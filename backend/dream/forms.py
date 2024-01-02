from django import forms
from .models import Dream, Benefactor


class DreamRequestorForm(forms.ModelForm):
    class Meta:
        model = Dream
        fields = [
            "title",
            "date",
            "user_name",
            "user_email",
            "location",
            "price",
            "description",
            "attachment",
        ]


class DreamExecutorForm(forms.ModelForm):
    class Meta:
        model = Benefactor
        fields = ["__all__"]
