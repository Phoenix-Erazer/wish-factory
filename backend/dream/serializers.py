from rest_framework import serializers

from .models import Dream, Benefactor, Payment


class DreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dream
        fields = "__all__"


class BenefactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefactor
        fields = "__all__"


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"
