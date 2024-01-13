from rest_framework import serializers

from .models import Dream, Benefactor, Location, Execution


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
        fields = "__all__"


class ExecutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Execution
        fields = "__all__"
