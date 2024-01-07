# Generated by Django 4.1 on 2024-01-07 09:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("dream", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="payment",
            name="payer",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to="dream.benefactor",
            ),
        ),
    ]
