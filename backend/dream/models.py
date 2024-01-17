import os
import uuid

from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.utils import timezone
from django.utils.text import slugify
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

STATUS = [
    ("unfulfilled", "Unfulfilled"),
    ("fulfilled", "Fulfilled"),
    ("reserved", "Reserved"),
]


def not_past_date_validator(value):
    if value < timezone.now():
        raise ValidationError("Date cannot be in the past")


def dream_image_file_path(instance, filename):
    _, extension = os.path.splitext(filename)

    filename = f"{slugify(instance.title)}-{uuid.uuid4()}{extension}"

    return os.path.join("uploads", "dreams", filename)


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
    attachment = models.ImageField(
        upload_to=dream_image_file_path, null=True, blank=True
    )

    city = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    status = models.CharField(max_length=255, choices=STATUS, default="unfulfilled")
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
    dream = models.ForeignKey(Dream, on_delete=models.CASCADE, related_name="benefactors")

    def __str__(self):
        return f"{self.full_name} {self.dream.title}"


class Donate(models.Model):
    amount = models.FloatField(validators=[MinValueValidator(0.01)])
    currency = models.CharField(max_length=3, default="UAH")

    def __str__(self):
        return f"{self.id} Donate: {self.amount} {self.currency}"


class Payment(models.Model):
    executor = models.ForeignKey(Benefactor, on_delete=models.CASCADE, related_name="payments")
    dream = models.OneToOneField(Dream, on_delete=models.CASCADE, related_name="payments")
    amount = models.FloatField()
    currency = models.CharField(max_length=3, default="USD")
    success = models.BooleanField(default=None)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}: ({self.success}) {self.amount}{self.currency}"
