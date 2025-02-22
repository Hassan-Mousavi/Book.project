from django.views import generic

from .models import Book


class BookListView(generic.ListView):
    template_name = 'home.html'
    context_object_name = 'books'

    def get_queryset(self):
        return Book.objects.select_related('category').all()