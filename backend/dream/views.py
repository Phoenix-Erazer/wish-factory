from rest_framework import viewsets

from .models import Benefactor
from .serializers import BenefactorSerializer


class BenefactorViewSet(viewsets.ModelViewSet):
    queryset = Benefactor.objects.all()
    serializer_class = BenefactorSerializer
