from django.db import models

# Create your models here.
class eventID(models.Model):
    event_name = models.CharField(max_length=40)
    event_id = models.CharField(max_length=5, primary_key=True)
    purpose = models.TextField()

class venue_details(models.Model):
    venue_room = models.IntegerField(primary_key=True)
    venue_details = models.TextField()

class event_details(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

class requirements(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    proj = models.BooleanField()
    pa = models.BooleanField()

class event_coordinators(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    coord_email = models.EmailField(primary_key=True)

class event_coordinators_details(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    coord_name = models.CharField(max_length=40)
    coord_dept = models.TextChoices('CSE', 'ECE')

class event_sanction(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    sanction_letter = models.FileField()

class event_status(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    approved = models.BooleanField()
    finished = models.BooleanField()

class event_venue(models.Model):
    event_id = models.ForeignKey(eventID, on_delete=models.CASCADE)
    venue_room = models.ForeignKey(venue_details, on_delete=models.CASCADE)
