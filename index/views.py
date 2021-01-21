from django.shortcuts import render, redirect
from planirovka.models import Building

def index(request):
    buildings = Building.objects.all().order_by('building_label')
    request.session['lang'] = 'uz'
    context = {
        'buildings': buildings
    }
    return render(request, 'index/index.html', context)
