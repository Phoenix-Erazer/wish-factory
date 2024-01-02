from django.urls import path, include

from rest_framework import routers

from .views import BenefactorViewSet

router = routers.DefaultRouter()
router.register("benefactors", BenefactorViewSet)

urlpatterns = [path("", include(router.urls))]

app_name = "dream"
