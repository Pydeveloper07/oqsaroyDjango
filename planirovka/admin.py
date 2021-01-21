from django.contrib import admin
from .models import Building, Floor, Apartment

admin.site.register(Building)
admin.site.register(Floor)
admin.site.register(Apartment)
