from django.urls import path
from . import views

urlpatterns = [
    path('', views.admin, name="cadmin"),
    path('login/', views.login, name="login"),
    path('logout/', views.logout, name="logout"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('dashboard/<str:building_label>/', views.dashboard_building, name="dashboard_building"),
    path('dashboard/<str:building_label>/<int:floor>/', views.dashboard_floor, name="dashboard_floor"),
    path('update/', views.update, name="update"),
]  