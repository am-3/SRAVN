# Generated by Django 4.2.6 on 2023-11-02 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='event_coordinators',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('coord_email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='event_coordinators_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('coord_name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='event_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='event_sanction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('sanction_letter', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='event_status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('approved', models.BooleanField()),
                ('finished', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='event_venue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('venue_room', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='eventID',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=40)),
                ('event_id', models.CharField(max_length=5)),
                ('purpose', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='requirements',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=5)),
                ('proj', models.BooleanField()),
                ('pa', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='venue_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('venue_room', models.IntegerField()),
                ('venue_details', models.TextField()),
            ],
        ),
    ]
