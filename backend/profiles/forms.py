from django import forms

from core.models import CustomUser

class ProfileForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email',]