from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.book_list, name='book_list'),

]