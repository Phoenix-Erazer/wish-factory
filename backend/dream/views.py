from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Dream, Benefactor, Payment
from .serializers import DreamSerializer, BenefactorSerializer, PaymentSerializer


class DreamViewSet(viewsets.ModelViewSet):
    queryset = Dream.objects.all()
    serializer_class = DreamSerializer

    @action(detail=True, methods=["post"])
    def deactivate_dream(self, request, pk=None):
        dream = self.get_object()

        payment_data = {
            "amount": dream.price,
            "currency": dream.currency,
        }

        payment_data["success"] = True

        payment_serializer = PaymentSerializer(data=payment_data)
        payment_serializer.is_valid(raise_exception=True)
        payment_instance = payment_serializer.save()

        if payment_instance.success:
            dream.is_activated = False
            dream.save()
            return Response({"message": "Dream paid successfully"})
        else:
            return Response({"message": "Payment failed"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["post"])
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
