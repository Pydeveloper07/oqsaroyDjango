from django.shortcuts import render, redirect, get_object_or_404, HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import auth
from planirovka.models import Building, Floor, Apartment
import json

def admin(request):
    return render(request, 'custom_admin/login.html', {})

def login(request):
    if request.method == "POST":
        if request.POST['username']:
            username = request.POST['username']
        else:
            username = ''
        if request.POST['password']:
            password = request.POST['password']
        else:
            password = ''
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('dashboard')
        else:
            return redirect('login')
    else:
        return redirect('login')

@login_required
def logout(request):
    if request.method == "POST":
        auth.logout(request)
        return redirect('index')

@login_required
def dashboard(request):
    buildings = Building.objects.all().order_by('building_label')
    context = {
        'buildings': buildings
    }
    return render(request, 'custom_admin/dashboard.html', context)

@login_required
def dashboard_building(request, building_label):
    floors = get_object_or_404(Building, building_label=building_label).floors.order_by('floor_number')
    context = {
        'building_label': building_label,
        'floors': floors
    }
    return render(request, 'custom_admin/dashboard.html', context)

@login_required
def dashboard_floor(request, building_label, floor):
    apartments = get_object_or_404(Floor, floor_number=floor, building=Building.objects.get(building_label=building_label)).rooms.all()
    context = {
        'apartments': apartments,
        'building_label': building_label,
        'floor_number': floor
    }
    return render(request, 'custom_admin/dashboard.html', context)

@login_required
def update(request):
    if request.method == "POST":
        success = False
        update_object = request.POST['type']
        is_checked = False
        if request.POST['is_checked'] == 'true':
            is_checked = True
        if update_object == 'building':
            building_label = request.POST['building_label']
            building = Building.objects.get(building_label=building_label)
            building.available = is_checked
            building.save()
            success = True
        elif update_object == 'floor':
            building = Building.objects.get(building_label=request.POST['building_label'])
            floor_number = request.POST['floor_number']
            floor = Floor.objects.get(building=building, floor_number=floor_number)
            floor.available = is_checked
            floor.save()
            success = True
        elif update_object == 'apartment':
            building = Building.objects.get(building_label=request.POST['building_label'])
            floor_number = request.POST['floor_number']
            apartment = Floor.objects.get(building=building, floor_number=floor_number).rooms.get(apartment_number=request.POST['apartment_number'])
            apartment.available = is_checked
            apartment.save()
            success = True
        context = {
            'success': success
        }
        return HttpResponse(json.dumps(context), content_type='applications/json')