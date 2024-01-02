from django import forms
from .models import Dream, DREAM_TYPE_CHOICES


class DreamForm(forms.ModelForm):
    class Meta:
        model = Dream
        fields = ["__all__"]
