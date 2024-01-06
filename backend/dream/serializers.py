from rest_framework import serializers

from .models import Dream, Benefactor, Location, Payment


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"


class DreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dream
        fields = "__all__"


class BenefactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefactor
        fields = (
            "id", "full_name", "phone_number", "email",
            "method_of_receipt", "date_execution", "dream",
        )


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"
