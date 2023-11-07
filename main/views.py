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
    print(1)
    hall_type = request.POST.get('hall-types')
    hall_subtype = request.POST.get('hall-subtypes')
    date_val = request.POST.get('calendar-date')
    print(hall_type)
    print(hall_subtype)
    print(date_val)
    return render(request, 'allocation.html')

def procedure(request):
    return render(request, 'procedure.html')

def about(request):
    return render(request, 'about.html')