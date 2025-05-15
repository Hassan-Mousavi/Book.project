from django.shortcuts import render
from django.views import generic


class AboutUs(generic.TemplateView):
    template_name = 'pages/aboutus.html'
