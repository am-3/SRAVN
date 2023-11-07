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
    print(2)
    halls = request.POST.get('halls')
    hallsChild = request.POST.get('hallsChild')
    ctr = request.POST.get('Counter')
    if ctr != None:
        if int(ctr) > 1:
            print(ctr)
            for i in range(1, int(ctr)+1):
                print(request.POST.get(f'hallsChild{i}'))
    eventName = request.POST.get('eventName')
    dates = request.POST.get('dates')
    startTimes = request.POST.get('startTimes')
    endTimes = request.POST.get('endTimes')
    print(f"{halls}\n{eventName}\n{dates}\n{startTimes}\n{endTimes}")
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