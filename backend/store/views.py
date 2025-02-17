from django.shortcuts import render

from .models import Book


def book_list(request):
    books = Book.objects.select_related('category').all()
    return render(request, 'home.html', {'books': books})