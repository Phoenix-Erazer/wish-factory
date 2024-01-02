from django.urls import path, include

from rest_framework import routers
from .views import (
    DreamViewSet,
    BenefactorViewSet,
)

router = routers.DefaultRouter()
router.register(r"dreams", DreamViewSet, basename="dream")
router.register("benefactors", BenefactorViewSet)

urlpatterns = [path("", include(router.urls)), ]

app_name = "dream"
