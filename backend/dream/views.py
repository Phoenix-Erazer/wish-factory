from django.db.models import Sum, F
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

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

    @action(detail=True, methods=["post"])
    def dream_payment(self, request, pk=None):
        dream = self.get_object()

        payment_data = {
            "amount": dream.price,
            "currency": dream.currency,
            "success": True
        }

        payment_serializer = PaymentSerializer(data=payment_data)
        payment_serializer.is_valid(raise_exception=True)
        payment_instance = payment_serializer.save()

        if payment_instance.success:
            dream.save()
            return Response({"message": "Dream paid successfully"})
        else:
            return Response(
                {"message": "Payment failed"},
                status=status.HTTP_400_BAD_REQUEST
            )

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
            related_dream.save()
        elif benefactor_instance.method_of_receipt == "indirectly":
            related_dream.status = "reserved"
            payment_data = {
                "amount": related_dream.price,
                "currency": related_dream.currency,
                "success": True,
                "benefactor": benefactor_instance,
            }

            payment_serializer = PaymentSerializer(data=payment_data)
            payment_serializer.is_valid(raise_exception=True)
            payment_instance = payment_serializer.save()

            if payment_instance.success:
                related_dream.status = "fulfilled"
                related_dream.is_activated = False
                payment_instance.save()

        related_dream.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DonateViewSet(viewsets.ModelViewSet):
    queryset = Donate.objects.all()
    serializer_class = DonateSerializer

    @action(detail=False, methods=["get"])
    def get_total_amount(self, request):
        total_amount_data = Donate.objects.values("currency").annotate(
            total_amount=Sum(F("amount"))
        )

        total_amount_by_currency = {
            entry['currency']: entry["total_amount"]
            for entry in total_amount_data
        }

        return Response({"total_amount_by_currency": total_amount_by_currency})


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
