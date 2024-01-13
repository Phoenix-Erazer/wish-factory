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
        raise ValidationError("Date cannot be in the past")


class Location(models.Model):
    city = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.city}, {self.region}, {self.country}"


class Dream(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    dream_type = models.CharField(max_length=20, choices=DREAM_TYPE_CHOICES)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_email = models.EmailField(blank=True, null=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    request_date = models.DateField()
    price = models.FloatField(validators=[MinValueValidator(0)])
    currency = models.CharField(max_length=3, default="USD")
    attachment = models.FileField(
        upload_to="attachments/", null=True, blank=True)

    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    is_activated = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}, active: {self.is_activated}"


class Benefactor(models.Model):
    full_name = models.CharField(max_length=255)
    age = models.IntegerField()
    phone_number = PhoneField(blank=True, help_text="Contact phone number")
    email = models.EmailField(blank=True, null=True)
    method_of_receipt = models.CharField(
        max_length=20, choices=METHOD_OF_RECEIPT
    )
    date_execution = models.DateTimeField(validators=[not_past_date_validator])

    def __str__(self):
        return f"{self.full_name} {self.email} {self.method_of_receipt}"


class Payment(models.Model):
    payer = models.OneToOneField(Benefactor, on_delete=models.CASCADE)
    dream = models.ForeignKey(Dream, on_delete=models.CASCADE)
    amount = models.FloatField()
    currency = models.CharField(max_length=3, default="USD")
    success = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.amount = self.dream.price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Status:{self.success} - {self.amount}{self.currency} {self.payer}"
