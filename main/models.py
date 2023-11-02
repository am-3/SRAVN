from django.db import models

# Create your models here.
class eventID(models.Model):
    event_name = models.CharField(max_length=40)
    event_id = models.CharField(max_length=5)
    purpose = models.TextField()

class venue_details(models.Model):
    venue_room = models.IntegerField()
    venue_details = models.TextField()

class event_details(models.Model):
    event_id = models.CharField(max_length=5)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

class requirements(models.Model):
    event_id = models.CharField(max_length=5)
    proj = models.BooleanField()
    pa = models.BooleanField()

class event_coordinators(models.Model):
    event_id = models.CharField(max_length=5)
    coord_email = models.EmailField()

class event_coordinators_details(models.Model):
    event_id = models.CharField(max_length=5)
    coord_name = models.CharField(max_length=40)
    coord_dept = models.TextChoices('CSE', 'ECE')

class event_sanction(models.Model):
    event_id = models.CharField(max_length=5)
    sanction_letter = models.FileField()

class event_status(models.Model):
    event_id = models.CharField(max_length=5)
    approved = models.BooleanField()
    finished = models.BooleanField()

class event_venue(models.Model):
    event_id = models.CharField(max_length=5)
    venue_room = models.IntegerField()
