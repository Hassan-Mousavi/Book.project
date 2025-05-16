from django.shortcuts import render, redirect
from django.views import generic

from core.models import CustomUser
from .forms import ProfileForm


def profile(request):
    user = request.user
    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=user)

    return render(request, 'profiles/profile.html', {"form": form})
