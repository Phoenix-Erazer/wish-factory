from django.contrib import admin

from .models import Dream, Benefactor, Location, Price

admin.site.register(Price)
admin.site.register(Location)
admin.site.register(Dream)
admin.site.register(Benefactor)
