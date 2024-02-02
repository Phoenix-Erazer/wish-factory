from datetime import datetime
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from dream.models import Dream, Benefactor, Payment


class DreamViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.dream_data = {
            "title": "My Dream",
            "description": "My dream to come true",
            "dream_type": "requestor",
            "user_name": "John Doe",
            "user_age": 25,
            "user_email": "john@example.com",
            "user_type": "requestor",
            "date": datetime.now(),
            "price": 1000,
            "currency": "USD",
            "attachment": "dream_image.jpg",
            "city": "Dream City",
            "region": "Dreamland",
            "status": "unfulfilled",
            "is_activated": True,
        }

    def test_create_dream(self):
        response = self.client.post("/dreams/", data=self.dream_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Dream.objects.count(), 1)

        dream = Dream.objects.get()
        self.assertEqual(dream.title, "My Dream")
        self.assertEqual(dream.dream_type, "requestor")


class BenefactorViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.dream = Dream.objects.create(
            title="My Dream",
            description="My dream to come true",
            dream_type="requestor",
            user_name="John Doe",
            user_age=25,
            user_email="john@example.com",
            user_type="requestor",
            date=datetime.now(),
            price=1000,
            currency="USD",
            attachment="dream_image.jpg",
            city="Dream City",
            region="Dreamland",
            status="unfulfilled",
            is_activated=True,
        )
        self.benefactor_data = {
            "full_name": "Alice Benefactor",
            "phone_number": "123-456-7890",
            "email": "alice@example.com",
            "method_of_receipt": "personally",
            "date_execution": datetime.now(),
            "dream": self.dream.id,
        }

    def test_create_benefactor(self):
        response = self.client.post(
            f"/benefactors/", data=self.benefactor_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Benefactor.objects.count(), 1)
        self.assertEqual(Benefactor.objects.get().method_of_receipt, "personally")
        self.assertEqual(self.dream.status, "fulfilled")


class DonateViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.donate_data = {"amount": 100, "currency": "USD"}

    def test_get_total_amount(self):
        response = self.client.get("/donates/get_total_amount/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {"total_amount_by_currency": {"USD": 100}})


class PaymentViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.dream = Dream.objects.create(
            title="My Dream",
            description="My dream to come true",
            dream_type="requestor",
            user_name="John Doe",
            user_age=25,
            user_email="john@example.com",
            user_type="requestor",
            date=datetime.now(),
            price=1000,
            currency="USD",
            attachment="dream_image.jpg",
            city="Dream City",
            region="Dreamland",
            status="unfulfilled",
            is_activated=True,
        )
        self.payment_data = {
            "executor": "Alice Benefactor",
            "amount": 500,
            "currency": "USD",
            "success": True,
            "timestamp": datetime.now(),
        }

    def test_create_payment_successful(self):
        response = self.client.post(
            f"/payments/", data=self.payment_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Payment.objects.count(), 1)
        self.assertEqual(Payment.objects.get().success, True)
        self.assertEqual(self.dream.status, "fulfilled")

    def test_create_payment_unsuccessful_reserved_dream(self):
        self.dream.status = "reserved"
        self.dream.save()
        self.payment_data["success"] = False
        response = self.client.post(
            f"/payments/", data=self.payment_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(self.dream.status, "unfulfilled")
