from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.utils import timezone
from phone_field import PhoneField

USER_TYPE_CHOICES = [
    ("requestor", "Dream Requestor"),
    ("executor", "Dream Executor"),
]

DREAM_TYPE_CHOICES = [
    ("to-have", "To-Have"),
    ("to-meet", "To-Meet"),
    ("to-go", "To-Go"),
    ("to-be", "To-Be"),
]

METHOD_OF_RECEIPT = [
    ("personally", "Personally"),
    ("indirectly", "Indirect")
]


def not_past_date_validator(value):
    if value < timezone.now():
        raise ValidationError('Date cannot be in the past')


class Dream(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    dream_type = models.CharField(max_length=20, choices=DREAM_TYPE_CHOICES)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_age = models.IntegerField()
    user_email = models.EmailField(blank=True, null=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    date = models.DateField()
    price = models.FloatField(validators=[MinValueValidator(0)])
    currency = models.CharField(max_length=3, default="USD")
    attachment = models.FileField(
        upload_to="attachments/", null=True, blank=True)

    city = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    is_activated = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}, {self.user_name}, {self.user_email}"


class Benefactor(models.Model):
    full_name = models.CharField(max_length=255)
    phone_number = PhoneField(blank=True, help_text="Contact phone number")
    email = models.EmailField(blank=True, null=True)
    method_of_receipt = models.CharField(
        max_length=20, choices=METHOD_OF_RECEIPT
    )
    date_execution = models.DateTimeField(validators=[not_past_date_validator])
    dream = models.ForeignKey(Dream, on_delete=models.CASCADE)


class Payment(models.Model):
    amount = models.FloatField()
    currency = models.CharField(max_length=3, default="USD")
    success = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}: ({self.success}) {self.amount}{self.currency}"
