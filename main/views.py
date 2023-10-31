from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
#Request Handler
def say_hello(request):
    return render(request, 'navbar.html')

def form(request):
    return render(request, 'form.html')