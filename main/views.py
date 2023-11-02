from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
#Request Handler
def start(request):
    template = loader.get_template('base.html')
    context = {
        'user' : {
            'username' : 'hey there lol'
        }
    }
    return HttpResponse(template.render(context, request))

def hello(request):
    return render(request, 'hello.html')

def nav(request):
    return render(request, 'navbar.html')

def form(request):
    return render(request, 'form.html')

def table(request):
    return render(request, 'allocation.html')