from django.views import generic

from .models import Book


class HomeView(generic.ListView):
    template_name = 'home.html'
    context_object_name = 'books'

    def get_queryset(self):
        return Book.objects.select_related('category').all()


class BookListView(generic.ListView):
    paginate_by = 4
    template_name = 'store/book_list.html'
    context_object_name = 'books'

    def get_queryset(self):
        queryset = Book.objects.select_related('category').all()
        sort = self.request.GET.get('sort')

        if sort == 'newest':
            return queryset.order_by('-datatime_created')
        elif sort == 'cheapest':
            return queryset.order_by('price')
        elif sort == 'expensive':
            return queryset.order_by('-price')
        else:
            return queryset.order_by('-datatime_created')
