from django.db.models import Sum, F
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from copy import deepcopy

from .models import Dream, Benefactor, Payment, Donate
from .serializers import (
    DreamSerializer,
    BenefactorSerializer,
    PaymentSerializer,
    DonateSerializer
)


class DreamViewSet(viewsets.ModelViewSet):
    queryset = Dream.objects.all()
    serializer_class = DreamSerializer

    @action(detail=False, methods=["post", "put"])
    def handle_dream(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        dream_type = serializer.validated_data.get("dream_type")

        if dream_type == "requestor":
            return DreamSerializer
        elif dream_type == "executor":
            return BenefactorSerializer
        else:
            return Response({"message": "Invalid dream_type"})

    def perform_create(self, serializer):
        serializer.save()


class BenefactorViewSet(viewsets.ModelViewSet):
    queryset = Benefactor.objects.all()
    serializer_class = BenefactorSerializer

    def perform_create(self, serializer):
        benefactor_instance = serializer.save()
        related_dream = benefactor_instance.dream

        if benefactor_instance.method_of_receipt == "personally":
            related_dream.status = "fulfilled"
            related_dream.is_activated = False
        elif benefactor_instance.method_of_receipt == "indirectly":
            related_dream.status = "reserved"

        related_dream.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_destroy(self, instance):
        related_dream = instance.dream
        related_dream.status = "unfulfilled"
        related_dream.is_activated = True
        related_dream.save()

        instance.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        partial = kwargs.pop("partial", False)

        original_instance = Benefactor.objects.get(pk=instance.pk)

        serializer = self.get_serializer(
            instance, data=request.data, partial=partial
        )
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)

        if instance.dream != original_instance.dream:
            original_instance.dream.status = "unfulfilled"
            original_instance.dream.is_activated = True
            original_instance.dream.save()

        self.perform_update(serializer)

        instance.refresh_from_db()
        if instance.method_of_receipt == "personally":
            instance.dream.status = "fulfilled"
            instance.dream.is_activated = False
        elif instance.method_of_receipt == "indirectly":
            instance.dream.status = "reserved"
        elif not instance.dream.benefactors.exists():
            instance.dream.status = "unfulfilled"
            instance.dream.is_activated = True

        instance.dream.save()

        return Response(serializer.data)


class DonateViewSet(viewsets.ModelViewSet):
    queryset = Donate.objects.all()
    serializer_class = DonateSerializer

    @action(detail=False, methods=["get"])
    def get_total_amount(self, request):
        total_amount_data = Donate.objects.values("currency").annotate(
            total_amount=Sum(F("amount"))
        )

        total_amount_by_currency = {
            entry["currency"]: entry["total_amount"]
            for entry in total_amount_data
        }

        return Response({"total_amount_by_currency": total_amount_by_currency})


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

    @action(detail=True, methods=["get", "post"])
    def perform_create(self, serializer):
        payment_instance = serializer.save()
        related_dream = payment_instance.dream

        if payment_instance.success:
            related_dream.status = "fulfilled"
            related_dream.is_activated = False
        elif not payment_instance.success and related_dream.status == "reserved":
            related_dream.status = "unfulfilled"
            related_dream.is_activated = True

        related_dream.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
