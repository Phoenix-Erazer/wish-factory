from django.urls import path, include

from rest_framework import routers
from .views import (
    DreamViewSet,
    BenefactorViewSet,
    PaymentViewSet,
)

router = routers.DefaultRouter()
router.register(r"dreams", DreamViewSet, basename="dream")
router.register("benefactors", BenefactorViewSet)
router.register("payment", PaymentViewSet)

urlpatterns = [path("", include(router.urls)), ]

app_name = "dream"
