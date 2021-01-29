from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('ru/', views.index_ru, name="ru"),
    path('uz/', views.index_uz, name="uz"),
    path('load-secondary/', views.load_secondary_contents, name="load-secondary-contents")
]