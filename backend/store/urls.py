from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('products/', views.BookListView.as_view(), name='products'),
    path('products/<int:pk>', views.book_detail, name='book_detail'),
]