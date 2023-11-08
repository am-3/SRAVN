from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from main.models import *
import json
import os
from django.conf import settings
from django.core.files.storage import FileSystemStorage

#Helper Functions
def load_nav(context):
    context['Classrooms_list'] = []
    context['MeetingHalls_list'] = []
    context['SeminarHalls_list'] = []

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

def load_table(context):

    return context

###################################################################################################################





#Request Handler
def start(request):
    context = {}
    context = load_nav(context)
    
    return render(request, 'base.html', context)

def hello(request):
    return render(request, 'hello.html')

def nav(request):
    context = {}
    context = load_nav(context)
    return render(request, 'navbar.html', context)

def form(request):
    if request.method == 'POST':
        print(2)
        halls = request.POST.get('halls')
        eventName = request.POST.get('eventName')
        dates = request.POST.get('dates')
        startTimes = request.POST.get('startTimes')
        endTimes = request.POST.get('endTimes')

        hall_ctr = request.POST.get('hall_ctr')
        if hall_ctr != None:
            if int(hall_ctr) >= 1:
                print(hall_ctr)
                for i in range(1, int(hall_ctr)+1):
                    print(request.POST.get(f'hallsChild{i}'))

        date_ctr = request.POST.get('date_ctr')
        if date_ctr != None:
            if int(date_ctr) >= 1:
                print(date_ctr)
                for i in range(1, int(date_ctr)+1):
                    print(request.POST.get(f'dates{i}'))
                    print(request.POST.get(f'startTimes{i}'))
                    print(request.POST.get(f'endTimes{i}'))
            
        purpose = request.POST.get('purpose')
        audioSystem = request.POST.get('audioSystem')
        projector = request.POST.get('projector')
        eventCoordinatorName = request.POST.get('eventCoordinatorName')
        eventCoordinatorEmail = request.POST.get('eventCoordinatorEmail')
        eventCoordinatorDept = request.POST.get('eventCoordinatorDept')
        undertaking = request.POST.get('undertaking')
        sanctionLetter = request.POST.get('sanctionLetter')

        # For handling the upload of the PDF file

        sanctionLetterName = 'sanction_letter'

        file = request.FILES['sanctionLetter']
        file_path = os.path.join(settings.STATIC_ROOT, sanctionLetterName)
        fs = FileSystemStorage(location=file_path)
        fs.save(f'{sanctionLetterName}.pdf', file)
            

        print(f"halls: {halls}\neventName: {eventName}\ndates: {dates}\nstartTimes: {startTimes}\nendTimes: {endTimes}\npurpose: {purpose}\naudioSystem: {audioSystem}\nprojector: {projector}\neventCoordinatorName: {eventCoordinatorName}\neventCoordinatorEmail: {eventCoordinatorEmail}\neventCoordinatorDept: {eventCoordinatorDept}\nundertaking: {undertaking}\nsanctionLetter: {sanctionLetter}\n")
    return render(request, 'form.html')

def table(request):
    context = {}
    context = load_nav(context)

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