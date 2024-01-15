from rest_framework import serializers

from .models import Dream, Benefactor, Payment


class DreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dream
        fields = (
            "id", "title", "description", "dream_type", "user_name",
            "user_age", "user_email", "user_type", "date", "price",
            "currency", "attachment", "city", "region", "country",
            "is_activated",
        )


class BenefactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefactor
        fields = (
            "id", "full_name", "phone_number", "email",
            "method_of_receipt", "date_execution",
            "dream",
        )


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = (
            "id", "amount", "currency",
            "success", "timestamp",
        )
