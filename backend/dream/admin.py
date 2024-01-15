from django.contrib import admin

from .models import Dream, Benefactor, Payment

admin.site.register(Dream)
admin.site.register(Benefactor)
admin.site.register(Payment)
