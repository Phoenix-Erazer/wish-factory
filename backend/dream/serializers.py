from rest_framework import serializers

from .models import Benefactor


class BenefactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefactor
        fields = (
            "id", "full_name", "phone_number", "email",
            "method_of_receipt", "date_execution", "dream",
        )
