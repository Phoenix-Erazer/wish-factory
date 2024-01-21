from django.test import TestCase

from dream.models import Payment


class ModelTests(TestCase):
    # def dream_str(self):
    #     dream = Dream.objects.create(
    #         title="test title",
    #         description="test description",
    #         dream_type="to-have",
    #         user_name="test_user_name",
    #         user_age=10,
    #         user_email="admin@admin.com",
    #         user_type="requestor",
    #         date="2024-01-19",
    #         price=100,
    #         attachment= null,
    #         currency="USD",
    #         city="Kyiv",
    #         region="test region",
    #         country="test country",
    #         is_activated=True
    #     )
    #     self.assertEqual(str(dream), f"{dream.title}, {dream.user_name}, {dream.user_email}")
    def Payment_str(self):
        payment = Payment.objects.create(amount=2.2)
        self.assertEqual(str(payment), f"{self.payment.id}: ({self.payment.success}) {self.payment.amount}{self.payment.currency}")

