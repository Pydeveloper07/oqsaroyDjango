from django.shortcuts import render, redirect
from planirovka.models import Building

def index(request):
    return redirect('uz')

def index_ru(request):
    request.session['lang'] = 'ru'
    buildings = Building.objects.all().order_by('building_label')
    context = {
        'buildings': buildings
    }
    return render(request, 'index/index.html', context)

def index_uz(request):
    request.session['lang'] = 'uz'
    buildings = Building.objects.all().order_by('building_label')
    context = {
        'buildings': buildings
    }
    return render(request, 'index/index.html', context)