from django.shortcuts import render, get_object_or_404
from .models import Building, Floor, Apartment

def render_building(request, building_label):
    building = get_object_or_404(Building, building_label=building_label)
    buildings = Building.objects.all().order_by('building_label')
    floors = Floor.objects.filter(building=building).order_by('floor_number')
    floor_list = []
    j = 0
    for i in range(building.number_of_floors):
        if floors[j].floor_number == i+1:
            floor_list.append(floors[j])
            j += 1
        else:
            floor_list.append(None)
    aval_apartments_list = []
    for floor in floor_list:
        if floor:
            aval_apartments_list.append(floor.rooms.filter(available=True).count())
        else:
            aval_apartments_list.append('-')
    context = {
        'building':building,
        'buildings': buildings,
        'floors': floor_list,
        'aval_apartments':aval_apartments_list
    }
    return render(request, 'planirovka/building.html', context)

def render_floor(request, building_label, floor):
    building = Building.objects.get(building_label=building_label)
    buildings = Building.objects.all().order_by('building_label')
    floor = get_object_or_404(Floor, floor_number=floor, building=building)
    floors = Floor.objects.filter(building=building_label).order_by('floor_number')
    rooms = floor.rooms.order_by('apartment_number')
    floor_list = []
    j = 0
    for i in range(building.number_of_floors):
        if floors[j].floor_number == i+1:
            floor_list.append(floors[j])
            j += 1
        else:
            floor_list.append(None)
    context = {
        'building': building,
        'building_label': building_label,
        'buildings':buildings,
        'floor': floor,
        'floors': floor_list,
        'rooms': rooms
    }
    return render(request, 'planirovka/floor.html', context)

def render_room(request, building_label, floor, room):
    room = get_object_or_404(Floor, floor_number=floor, building=Building.objects.get(building_label=building_label)).rooms.get(apartment_number=room)
    buildings = Building.objects.all().order_by('building_label')
    context = {
        'building_label': building_label,
        'buildings': buildings,
        'floor': floor,
        'room': room
    }
    return render(request, 'planirovka/apartment.html', context)