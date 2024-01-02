from django.db import models

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


class Price(models.Model):
    amount = models.FloatField()
    currency = models.CharField(max_length=3)


class Location(models.Model):
    city = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    country = models.CharField(max_length=255)


class Dream(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    dream_type = models.CharField(max_length=20, choices=DREAM_TYPE_CHOICES)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_email = models.EmailField(blank=True, null=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    date = models.DateField()
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
    attachment = models.FileField(upload_to="attachments/", null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
