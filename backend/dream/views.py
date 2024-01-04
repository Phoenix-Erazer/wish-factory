from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Dream, Benefactor
from .serializers import DreamSerializer, BenefactorSerializer


class DreamViewSet(viewsets.ModelViewSet):
    queryset = Dream.objects.all()
    serializer_class = DreamSerializer

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
