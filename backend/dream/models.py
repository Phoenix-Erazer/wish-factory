from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.utils import timezone
from phone_field import PhoneField

# USER_TYPE_CHOICES = [
#     ("requestor", "Dream Requestor"),
#     ("executor", "Dream Executor"),
# ]

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


class Benefactor(models.Model):
    full_name = models.CharField(max_length=255)

    phone_number = PhoneField(blank=True, help_text="Contact phone number")
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return f"{self.full_name} {self.email}"


class Dream(models.Model):
    # user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    title = models.CharField(max_length=255)
    dream_type = models.CharField(max_length=20, choices=DREAM_TYPE_CHOICES)
    description = models.TextField(max_length=500)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_age = models.IntegerField()
    user_email = models.EmailField(blank=True, null=True)
    request_date = models.DateTimeField(auto_now_add=True, validators=[not_past_date_validator])
    price = models.FloatField(validators=[MinValueValidator(0)])
    currency = models.CharField(max_length=3, default="USD")
    attachment = models.FileField(
        upload_to="attachments/", null=True, blank=True)

    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    date_execution = models.DateTimeField(default=None, null=True, blank=True)
    is_activated = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}, active: {self.is_activated}"


class Execution(models.Model):
    executor = models.ForeignKey(Benefactor, on_delete=models.CASCADE)
    dream = models.OneToOneField(Dream, on_delete=models.CASCADE)
    success = models.BooleanField(default=False)
    method_of_receipt = models.CharField(
        max_length=20, choices=METHOD_OF_RECEIPT
    )
    cost = models.FloatField(default=None)
    currency = models.CharField(max_length=3, default="UAH")
    timestamp = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.cost = self.dream.price
        self.currency = self.dream.currency

        super().save(*args, **kwargs)

        if self.success:
            self.dream.date_execution = self.timestamp
            self.dream.is_activated = False
            self.dream.save()

    def __str__(self):
        return f"Status:{self.success} - {self.dream.price}{self.dream.currency} {self.executor}"
