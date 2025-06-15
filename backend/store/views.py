from django.core.paginator import Paginator
from django.views import generic
from django.shortcuts import render, get_object_or_404, redirect

from .forms import CommentForm
from .models import Book, Comment


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
    comments = Comment.objects.filter(book=book).order_by('-datetime_created')

    if request.method == 'POST':
        comment = CommentForm(request.POST)
        if comment.is_valid():
            comment = comment.save(commit=False)
            comment.author = request.user
            comment.book = book
            comment.save()
            comment = CommentForm()
    else:
        comment = CommentForm()

    return render(request, 'store/book_detail.html', {
        'book': book,
        'related_books': related_books,
        'comments': comments,
        'comment_form': comment,
    })


class BookSearchView(generic.View):
    def post(self, request):
        searched = request.POST.get('searched', '').strip()
        return redirect(f"{request.path}?searched={searched}")

    def get(self, request):
        searched = request.GET.get('searched', '').strip()
        books = Book.objects.filter(title__icontains=searched) if searched else Book.objects.none()

        paginator = Paginator(books, 4)
        page_number = request.GET.get('page')
        try:
            page_obj = paginator.page(page_number)
        except:
            page_obj = paginator.page(1)

        return render(request, "store/book_search.html", {
            "books": page_obj,
            "searched": searched,
            "page_obj": page_obj,
        })
