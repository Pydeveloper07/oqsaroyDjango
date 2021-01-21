from django.db import models
import os

def image_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = '{}.{}'.format(instance, ext)
    return os.path.join(
        instance.floor.building.building_label,
        'floor-' + str(instance.floor.floor_number),
        'apartment-' + str(instance.apartment_number),
        'image',
        filename
    )

def image_3d_upload_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = '{}.{}'.format(instance, ext)
    return os.path.join(
        instance.floor.building.building_label,
        'floor-' + str(instance.floor.floor_number),
        'apartment-' + str(instance.apartment_number),
        'image3d',
        filename
    )

class Building(models.Model):
    building_label = models.CharField(max_length=1, primary_key=True)
    number_of_floors = models.IntegerField()
    available = models.BooleanField(default=True)
    template = models.CharField(max_length=100, null=False, blank=False)
    def __str__(self):
        return self.building_label
    

class Floor(models.Model):
    floor_number = models.IntegerField()
    available = models.BooleanField(default=True)
    template = models.CharField(max_length=100, null=False, blank=False)
    building = models.ForeignKey(Building, on_delete=models.SET_NULL, null=True, related_name="floors")

    def __str__(self):
        return '{}-{}'.format(self.building, self.floor_number)

class Apartment(models.Model):
    apartment_number = models.IntegerField(blank=False, null=False)
    number_of_rooms = models.IntegerField()
    tot_area = models.FloatField()
    tot_area_rooms = models.FloatField()
    available = models.BooleanField(default=True)
    image = models.ImageField(upload_to=image_upload_path)
    image_3d = models.ImageField(upload_to=image_3d_upload_path, blank=True, null=True)
    floor = models.ForeignKey(Floor, on_delete=models.SET_NULL, null=True, related_name="rooms")

    def __str__(self):
        return '{}-{}'.format(self.floor, self.apartment_number)