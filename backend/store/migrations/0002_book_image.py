# Generated by Django 5.1.6 on 2025-02-17 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='image',
            field=models.ImageField(default='images.png', upload_to='covers/'),
        ),
    ]
