from django.contrib import admin

from .models import Dream, Benefactor, Payment, Donate

admin.site.register(Dream)
admin.site.register(Benefactor)
admin.site.register(Donate)
admin.site.register(Payment)
