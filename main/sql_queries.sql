
--Populate 
INSERT INTO main_venue_details VALUES (1, '1xx', 'IInd CSE');
INSERT INTO main_venue_details VALUES (2, '112', 'IInd ECE');
INSERT INTO main_venue_details VALUES (3, '121', 'IIIrd CSE');
INSERT INTO main_venue_details VALUES (4, '122', 'IIIrd ECE');

INSERT INTO main_venue_details VALUES (5, '210', 'Sudha Murty Hall');
INSERT INTO main_venue_details VALUES (6, '211', 'Seminar Hall-II');
INSERT INTO main_venue_details VALUES (7, '212', 'Seminar Hall-III');

INSERT INTO main_venue_details VALUES (8, '310', 'Meeting Hall-I');
INSERT INTO main_venue_details VALUES (9, '311', 'Meeting Hall-II');
INSERT INTO main_venue_details VALUES (10, '312', 'Meeting Hall-III');
INSERT INTO main_venue_details VALUES (11, '313', 'Meeting Hall-IV');
INSERT INTO main_venue_details VALUES (12, '314', 'Meeting Hall-V');
INSERT INTO main_venue_details VALUES (13, '315', 'Meeting Hall-VI');


--Populate Sample Events
INSERT INTO main_eventID VALUES (1, "Freshers Orientation", "E0001", "Orientation Program for Freshers Batch");
INSERT INTO main_event_details VALUES (1, "E0001", 1699677000, 1699684200);
INSERT INTO main_requirements VALUES (1, "E0001", 0, 1);
INSERT INTO main_event_coordinators VALUES (1, "E0001", "office@iiitt.ac.in");
INSERT INTO main_event_coordinators_details VALUES (1, "E0001", "Mr. Lokesh");
INSERT INTO main_event_sanction VALUES (1, "E0001", "./files/a.pdf");
INSERT INTO main_event_status VALUES (1, "E0001", 1, 0);
INSERT INTO main_event_venue VALUES (1, "E0001", '210');


INSERT INTO main_eventID VALUES (2, "Getting Started with Git", "E0002", "Intro Session to Git/Version Control");
INSERT INTO main_event_details VALUES (2, "E0002", 1699853400, 1699860600);
INSERT INTO main_requirements VALUES (2, "E0002", 1, 1);
INSERT INTO main_event_coordinators VALUES (2, "E0002", "webdev@iiitt.ac.in");
INSERT INTO main_event_coordinators_details VALUES (2, "E0002", "Web Dev Club");
INSERT INTO main_event_sanction VALUES (2, "E0002", "./files/b.pdf");
INSERT INTO main_event_status VALUES (2, "E0002", 1, 0);
INSERT INTO main_event_venue VALUES (2, "E0002", '210');

INSERT INTO main_eventID VALUES (3, "Robotics Session-I", "E0003", "Intro for Robotics Club");
INSERT INTO main_event_details VALUES (3, "E0003", 1699867800, 1699871400);
INSERT INTO main_requirements VALUES (3, "E0003", 1, 1);
INSERT INTO main_event_coordinators VALUES (3, "E0003", "robotics@iiitt.ac.in");
INSERT INTO main_event_coordinators_details VALUES (3, "E0003", "Robotics Club");
INSERT INTO main_event_sanction VALUES (3, "E0003", "./files/c.pdf");
INSERT INTO main_event_status VALUES (3, "E0003", 1, 1);
INSERT INTO main_event_venue VALUES (3, "E0003", '211');