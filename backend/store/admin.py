from django.contrib import admin

from .models import Category, Comment, Customer, Book, Discount, Producer


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    list_display = ['discount', 'description']

@admin.register(Producer)
class ProducerAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    list_per_page = 10
    ordering = ['name']
    search_fields = ['name__istartswith']

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'inventory', 'price', 'datatime_created']
    list_per_page = 10
    list_editable = ['inventory', 'price', 'category']
    ordering = ['inventory']
    search_fields = ['title__istartswith']


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['author', 'book', 'body', 'status']


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone_number', 'address', 'birth_date']
