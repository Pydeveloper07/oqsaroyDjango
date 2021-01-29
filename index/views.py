from django.shortcuts import render, redirect, HttpResponse
from django.template.loader import render_to_string
from planirovka.models import Building
import json

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

def load_secondary_contents(request):
    section_comfort_1 = render_to_string('partials/index_secondary/section-comfort-1.html')
    section_comfort_2 = render_to_string('partials/index_secondary/section-comfort-2.html')
    section_comfort_3 = render_to_string('partials/index_secondary/section-comfort-3.html')
    section_comfort_4 = render_to_string('partials/index_secondary/section-comfort-4.html')
    section_advantages = render_to_string('partials/index_secondary/section-advantages.html')
    section_commerce = render_to_string('partials/index_secondary/section-commerce.html')
    section_progress = render_to_string('partials/index_secondary/section-progress.html')
    section_about = render_to_string('partials/index_secondary/section-about.html')
    context = {
        'section_comfort_1': section_comfort_1,
        'section_comfort_2': section_comfort_2,
        'section_comfort_3': section_comfort_3,
        'section_comfort_4': section_comfort_4,
        'section_advantages': section_advantages,
        'section_commerce': section_commerce,
        'section_progress': section_progress,
        'section_about': section_about
    }
    return HttpResponse(json.dumps(context), content_type='application/json')