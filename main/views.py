from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from main.models import *
import json

#Helper Functions
def load_nav():
    context = {
            'Classrooms_list' : [],
            'SeminarHalls_list' : [],
            'MeetingHalls_list' : []
        }
    
    set_a = venue_details.objects.filter(venue_room__startswith='1')
    set_b = venue_details.objects.filter(venue_room__startswith='2')
    set_c = venue_details.objects.filter(venue_room__startswith='3')
    
    for row in set_a:
        context['Classrooms_list'].append(str(row.venue_room) + ': ' + row.venue_details)
    for row in set_b:
        context['SeminarHalls_list'].append(str(row.venue_room) + ': ' + row.venue_details)
    for row in set_c:
        context['MeetingHalls_list'].append(str(row.venue_room) + ': ' + row.venue_details)
    
    #Converting to JSON
    for i in context:
        context[i] = json.dumps(context[i])

    return context

###################################################################################################################





#Request Handler
def start(request):
    context = load_nav()
    
    return render(request, 'base.html', context)

def hello(request):
    return render(request, 'hello.html')

def nav(request):
    context = load_nav()
    return render(request, 'navbar.html', context)

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
    context = load_nav()

    print(1)
    hall_type = request.POST.get('hall-types')
    hall_subtype = request.POST.get('hall-subtypes')
    date_val = request.POST.get('calendar-date')
    print(hall_type)
    print(hall_subtype)
    print(date_val)

    #Query
    #query filter 

    #result format

    return render(request, 'allocation.html', context)




def procedure(request):
    return render(request, 'procedure.html')

def about(request):
    return render(request, 'about.html')

def form_conf(request):
    return render(request, 'form_confirmation.html')

def status(request):
    return render(request, 'status.html')