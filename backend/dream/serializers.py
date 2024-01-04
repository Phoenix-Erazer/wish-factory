from rest_framework import serializers

from .models import Dream, Benefactor


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
