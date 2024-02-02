import os
from django.test import TestCase
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.conf import settings
from django.utils.text import slugify
from django.core.files.uploadedfile import SimpleUploadedFile
from dream.models import (
    Dream,
    Benefactor,
    Donate,
    Payment,
    not_past_date_validator,
    dream_image_file_path,
)


class DreamModelTest(TestCase):
    def setUp(self):
        self.dream_data = {
            "title": "Test Dream",
            "description": "This is a test dream",
            "dream_type": "to-have",
            "user_name": "Test User",
            "user_age": 25,
            "user_email": "test@example.com",
            "user_type": "requestor",
            "date": timezone.now().date(),
            "price": 100.0,
            "currency": "USD",
            "attachment": None,
            "city": "Test City",
            "region": "Test Region",
            "status": "unfulfilled",
            "is_activated": True,
        }

    def create_test_dream(self, **kwargs):
        dream_data = {**self.dream_data, **kwargs}
        return Dream.objects.create(**dream_data)

    def test_dream_image_file_path(self):
        image_file = SimpleUploadedFile(
            "test_image.jpg", b"file_content", content_type="image/jpeg"
        )

        dream = self.create_test_dream(attachment=image_file)
        result = dream_image_file_path(dream, image_file.name)
        expected_path = os.path.join(settings.MEDIA_ROOT, result)

        _, filename = os.path.split(result)

        self.assertTrue(slugify(dream.title) in filename)

        if os.path.exists(expected_path):
            os.remove(expected_path)

        dream.delete()

    def test_dream_str(self):
        dream = self.create_test_dream()
        expected_str = "Test Dream, Test User, test@example.com"
        self.assertEqual(str(dream), expected_str)


class BenefactorModelTest(TestCase):
    def create_test_benefactor(self, date_execution=None):
        return Benefactor.objects.create(
            full_name="Test Benefactor",
            phone_number="123-456-7890",
            email="benefactor@example.com",
            method_of_receipt="personally",
            date_execution=date_execution or timezone.now(),
            dream=self.dream,
        )

    def setUp(self):
        self.dream = Dream.objects.create(
            title="Test Dream",
            description="This is a test dream",
            dream_type="to-have",
            user_name="Test User",
            user_age=25,
            user_email="test@example.com",
            user_type="requestor",
            date=timezone.now().date(),
            price=100.0,
            currency="USD",
            attachment=None,
            city="Test City",
            region="Test Region",
            status="unfulfilled",
            is_activated=True,
        )

    def test_benefactor_creation(self):
        benefactor = self.create_test_benefactor()
        self.assertEqual(str(benefactor), "Test Benefactor Test Dream")

    def test_not_past_date_validator(self):
        benefactor = self.create_test_benefactor()
        self.assertIsNone(not_past_date_validator(benefactor.date_execution))

    def test_not_past_date_validator_raises_error(self):
        past_date = timezone.now() - timezone.timedelta(days=1)
        benefactor = self.create_test_benefactor(date_execution=past_date)
        with self.assertRaises(ValidationError):
            not_past_date_validator(benefactor.date_execution)

    def test_benefactor_str(self):
        benefactor = self.create_test_benefactor(date_execution="2024-02-01")
        expected_str = "Test Benefactor Test Dream"
        self.assertEqual(str(benefactor), expected_str)


class DonateModelTest(TestCase):
    def test_donate_creation(self):
        donate = Donate.objects.create(amount=50.0, currency="USD")
        self.assertEqual(str(donate), "1 Donate: 50.0 USD")

    def test_donate_str(self):
        donate = Donate.objects.create(amount=50.0, currency="USD")
        expected_str = f"{donate.id} Donate: 50.0 USD"
        self.assertEqual(str(donate), expected_str)


class PaymentModelTest(TestCase):
    def create_test_dream(self):
        return Dream.objects.create(
            title="Test Dream",
            description="This is a test dream",
            dream_type="to-have",
            user_name="Test User",
            user_age=25,
            user_email="test@example.com",
            user_type="requestor",
            date=timezone.now().date(),
            price=100.0,
            currency="USD",
            attachment=None,
            city="Test City",
            region="Test Region",
            status="unfulfilled",
            is_activated=True,
        )

    def create_test_benefactor(self, dream):
        return Benefactor.objects.create(
            full_name="Test Benefactor",
            phone_number="123-456-7890",
            email="benefactor@example.com",
            method_of_receipt="personally",
            date_execution=timezone.now(),
            dream=dream,
        )

    def test_payment_creation(self):
        dream = self.create_test_dream()
        benefactor = self.create_test_benefactor(dream)
        payment = Payment.objects.create(
            executor=benefactor, dream=dream, amount=50.0, currency="USD", success=True
        )

        self.assertEqual(str(payment), "1: (True) 50.0 USD")

    def test_payment_str(self):
        dream = self.create_test_dream()
        benefactor = self.create_test_benefactor(dream)
        payment = Payment.objects.create(
            executor=benefactor, dream=dream, amount=30.0, currency="USD", success=True
        )

        expected_str = f"{payment.id}: (True) 30.0 USD"
        self.assertEqual(str(payment), expected_str)
