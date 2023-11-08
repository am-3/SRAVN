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

    print(f"halls: {halls}\neventName: {eventName}\ndates: {dates}\nstartTimes: {startTimes}\nendTimes: {endTimes}\npurpose: {purpose}\naudioSystem: {audioSystem}\nprojector: {projector}\neventCoordinatorName: {eventCoordinatorName}\neventCoordinatorEmail: {eventCoordinatorEmail}\neventCoordinatorDept: {eventCoordinatorDept}\nundertaking: {undertaking}\nsanctionLetter: {sanctionLetter}\n")
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