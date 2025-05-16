from django.urls import path, include

from . import views


urlpatterns = [
    path('profiles/', views.profile, name='profile'),
]