from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username",'email', "usable_password", "password1", "password2"),
            },
        ),
    )

