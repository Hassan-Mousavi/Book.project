from lib2to3.fixes.fix_input import context

from django.views import generic
from django.shortcuts import render, get_object_or_404

from .models import Book


class HomeView(generic.TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['newest_books'] = Book.objects.select_related('category').order_by('-datatime_created')[:6]
        context['cheapest_books'] = Book.objects.select_related('category').order_by('price')[:6]
        return context


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


def book_detail(request, pk):
    book = get_object_or_404(Book, pk=pk)
    related_books = Book.objects.filter(category=book.category).exclude(id=book.id)[0:6]
    return render(request, 'store/book_detail.html', {
        'book': book,
        'related_books': related_books,
    })
