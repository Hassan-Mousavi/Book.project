from django.contrib.auth import get_user_model
from django.db import models
from django.core.validators import MinValueValidator
from django.conf import settings


class Category(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.title


class Discount(models.Model):
    discount = models.FloatField()
    description = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.discount

class Producer(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False, default=None)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name



class Book(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='covers/', default='images.png')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="books")
    description = models.TextField(default='Lorem Ipsum')
    price = models.DecimalField(max_digits=15 , decimal_places=0)
    producer = models.ForeignKey(Producer, on_delete=models.PROTECT, related_name="books", default=1)
    writer = models.CharField(max_length=255, default='<NAME>')
    translator = models.CharField(max_length=255, default='<NAME>')
    inventory = models.IntegerField(validators=[MinValueValidator(0)])
    datatime_created = models.DateTimeField(auto_now_add=True)
    datetime_modified = models.DateTimeField(auto_now=True)
    discount = models.ManyToManyField(Discount, blank=True, null=True)

    def __str__(self):
        return self.title


class Customer(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    birth_date = models.DateField()

    def __str__(self):
        return self.user.first_name


class Comment(models.Model):
    COMMENT_STATUS_WAITING = 'w'
    COMMENT_STATUS_APPROVED = 'a'
    COMMENT_STATUS_NOT_APPROVED = 'na'
    COMMENT_STATUS = [
        (COMMENT_STATUS_WAITING, 'Waiting'),
        (COMMENT_STATUS_APPROVED, 'Approved'),
        (COMMENT_STATUS_NOT_APPROVED, 'Not Approved'),
    ]
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, default=1, related_name="comments")
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='comments')
    body = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=2, choices=COMMENT_STATUS, default=COMMENT_STATUS_WAITING)
