from django.shortcuts import render, redirect

def index(request):
    request.session['lang'] = 'uz'
    return render(request, 'index/index.html', {})
