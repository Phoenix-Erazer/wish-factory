from django.urls import path, include

from rest_framework import routers
from .views import (
    DreamViewSet,
    BenefactorViewSet,
    PaymentViewSet,
    DonateViewSet,
)

router = routers.DefaultRouter()
router.register(r"dreams", DreamViewSet, basename="dream")
router.register(r"benefactors", BenefactorViewSet)
router.register(r"payments", PaymentViewSet)
router.register(r"donates", DonateViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("handle_dream/", DreamViewSet.as_view({'post': 'handle_dream'}), name='handle_dream')
]

app_name = "dream"
