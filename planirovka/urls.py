from django.urls import path
from . import views

urlpatterns = [
    path('<str:building_label>/', views.render_building, name="building"),
    path('<str:building_label>/<int:floor>/', views.render_floor, name="floor"),
    path('<str:building_label>/<int:floor>/<int:room>', views.render_room, name="room")
]  