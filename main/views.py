from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
#Request Handler
def start(request):
    return render(request, 'base.html')

def hello(request):
    return render(request, 'hello.html')

def nav(request):
    return render(request, 'navbar.html')

def form(request):
    return render(request, 'form.html')

def table(request):
    return render(request, 'allocation.html')