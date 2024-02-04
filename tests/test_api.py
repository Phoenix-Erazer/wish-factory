from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from dream.models import Dream, Benefactor, Payment, Donate


class DreamAPITestCase(APITestCase):
    def setUp(self):
        self.dream_data = {
            "title": "Test Dream",
            "description": "Test Description",
            "dream_type": "Test Type",
            "user_name": "Test User",
            "user_age": 25,
            "user_email": "test@example.com",
            "user_type": "Test Type",
            "date": "2024-02-04",
            "price": 100,
            "currency": "USD",
            "city": "Test City",
            "region": "Test Region",
            "status": "unfulfilled",
            "is_activated": True,
        }

    def test_create_dream(self):
        url = reverse("dream:dream-list")
        response = self.client.post(url, self.dream_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Dream.objects.count(), 2)

    def test_get_dream_list(self):
        url = reverse("dream:dream-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_dream(self):
        url = reverse("dream:dream-detail", args=[self.dream.id])
        updated_data = {
            "title": "Updated Dream",
            "price": 150,
        }
        response = self.client.patch(url, updated_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.dream.refresh_from_db()
        self.assertEqual(self.dream.title, "Updated Dream")
        self.assertEqual(self.dream.price, 150)

    def test_delete_dream(self):
        url = reverse("dream:dream-detail", args=[self.dream.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Dream.objects.filter(id=self.dream.id).exists())


class BenefactorAPITestCase(APITestCase):
    def setUp(self):
        self.dream = Dream.objects.create(
            title="Test Dream",

        )
        self.benefactor = Benefactor.objects.create(
            full_name="Test Benefactor",
            phone_number="123456789",
            email="benefactor@example.com",
            method_of_receipt="personally",
            date_execution="2024-02-04",
            dream=self.dream,
        )

    def test_create_benefactor(self):
        url = reverse("dream:benefactor-list")
        data = {
            "full_name": "New Benefactor",
            "phone_number": "987654321",
            "email": "new_benefactor@example.com",
            "method_of_receipt": "indirectly",

        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(
            Benefactor.objects.count(), 2
        )

    def test_update_benefactor(self):
        url = reverse("dream:benefactor-detail", args=[self.benefactor.id])
        data = {
            "method_of_receipt": "indirectly",

        }
        response = self.client.patch(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.benefactor.refresh_from_db()
        self.assertEqual(self.benefactor.method_of_receipt, "indirectly")

    def test_delete_benefactor(self):
        url = reverse("dream:benefactor-detail", args=[self.benefactor.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Benefactor.objects.filter(id=self.benefactor.id).exists())

    def test_list_benefactors(self):
        url = reverse("dream:benefactor-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), Benefactor.objects.count())


class DonateAPITestCase(APITestCase):
    def setUp(self):
        self.donate_data = {
            "amount": 50,
            "currency": "USD",
        }
        self.donate = Donate.objects.create(**self.donate_data)

    def test_create_donate(self):
        url = reverse("dream:donate-list")
        response = self.client.post(url, self.donate_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Donate.objects.count(), 2)

    def test_get_donate_list(self):
        url = reverse("donate-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_donate(self):
        url = reverse("dream:donate-detail", args=[self.donate.id])
        updated_data = {
            "amount": 75,
            # Add other fields to update
        }
        response = self.client.patch(url, updated_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.donate.refresh_from_db()
        self.assertEqual(self.donate.amount, 75)

    def test_delete_donate(self):
        url = reverse("dream:donate-detail", args=[self.donate.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Donate.objects.filter(id=self.donate.id).exists())


class PaymentAPITestCase(APITestCase):
    def setUp(self):
        self.payment_data = {
            "executor": "Test Executor",
            "amount": 100,
            "currency": "USD",
            "success": True,
        }

    def test_create_payment(self):
        url = reverse("dream:payment-list")
        response = self.client.post(url, self.payment_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Payment.objects.count(), 2)

    def test_get_payment_list(self):
        url = reverse("dream:payment-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_payment(self):
        url = reverse("dream:payment-detail", args=[self.payment.id])
        updated_data = {
            "amount": 125,
        }
        response = self.client.patch(url, updated_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.payment.refresh_from_db()
        self.assertEqual(self.payment.amount, 125)

    def test_delete_payment(self):
        url = reverse("dream:payment-detail", args=[self.payment.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Payment.objects.filter(id=self.payment.id).exists())
