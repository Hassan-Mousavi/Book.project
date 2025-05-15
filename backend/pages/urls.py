from django.urls import path, include

from . import views


urlpatterns = [
    path('aboutus', views.AboutUs.as_view(), name='aboutus'),
]