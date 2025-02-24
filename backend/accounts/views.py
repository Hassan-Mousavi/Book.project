from django.views import generic
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from .forms import CustomUserCreationForm


class SignupView(generic.CreateView):
    form_class = CustomUserCreationForm
    template_name = 'accounts/signup.html'
    success_url = reverse_lazy('home')


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            messages.warning(request, 'نام کاربری یا رمز عبور اشتباه است!')
            return redirect('login')
    return render(request, 'accounts/login.html')


def logout_view(request):
    logout(request)
    return redirect('home')

