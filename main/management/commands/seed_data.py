from django.core.management.base import BaseCommand
from main.models import venue_details

class Command(BaseCommand):
    help = 'Seed database with default data'

    def handle(self, *args, **kwargs):
        # Example default data
        default_entries = [
            {"venue_room": "101", "venue_details": "IInd CSE"},
            {"venue_room": "102", "venue_details": "IInd ECE"},
            {"venue_room": "121", "venue_details": "IIIrd CSE"},
            {"venue_room": "122", "venue_details": "IIIrd ECE"},
            {"venue_room": "201", "venue_details": "Sudha Murthy Hall"},
            {"venue_room": "211", "venue_details": "Seminar Hall-II"},
            {"venue_room": "212", "venue_details": "Seminar Hall-III"},
            {"venue_room": "311", "venue_details": "Board Room"},
            {"venue_room": "312", "venue_details": "Meeting Room-II"},
            {"venue_room": "313", "venue_details": "Meeting Room-III"},
            {"venue_room": "314", "venue_details": "Meeting Room-IV"},
            {"venue_room": "315", "venue_details": "Meeting Room-V"},
            {"venue_room": "316", "venue_details": "Meeting Room-VI"},
        ]

        for entry in default_entries:
            obj, created = venue_details.objects.get_or_create(
                venue_room=entry["venue_room"],
                venue_details=entry["venue_details"]
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Created {obj}"))
            else:
                self.stdout.write(self.style.WARNING(f"{obj} already exists"))

        self.stdout.write(self.style.SUCCESS('Seeding complete!'))
