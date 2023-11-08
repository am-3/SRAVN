
--Populate 
INSERT INTO main_venue_details VALUES ('1xx', 'IInd CSE');
INSERT INTO main_venue_details VALUES ('112', 'IInd ECE');
INSERT INTO main_venue_details VALUES ('121', 'IIIrd CSE');
INSERT INTO main_venue_details VALUES ('122', 'IIIrd ECE');

INSERT INTO main_venue_details VALUES ('210', 'Sudha Murty Hall');
INSERT INTO main_venue_details VALUES ('211', 'Seminar Hall-II');
INSERT INTO main_venue_details VALUES ('212', 'Seminar Hall-III');

INSERT INTO main_venue_details VALUES ('310', 'Meeting Hall-I');
INSERT INTO main_venue_details VALUES ('311', 'Meeting Hall-II');
INSERT INTO main_venue_details VALUES ('312', 'Meeting Hall-III');
INSERT INTO main_venue_details VALUES ('313', 'Meeting Hall-IV');
INSERT INTO main_venue_details VALUES ('314', 'Meeting Hall-V');
INSERT INTO main_venue_details VALUES ('315', 'Meeting Hall-VI');


--Populate Sample Events
INSERT INTO main_eventID VALUES ("Freshers Orientation", "E0001", "Orientation Program for Freshers Batch");
INSERT INTO main_event_details VALUES (1, 1699677000, 1699684200, "E0001");
INSERT INTO main_requirements VALUES (1, 0, 1, "E0001");
INSERT INTO main_event_coordinators VALUES ("office@iiitt.ac.in", "E0001");
INSERT INTO main_event_coordinators_details VALUES (1, "Mr. Lokesh", "E0001");
INSERT INTO main_event_sanction VALUES (1, "./files/a.pdf", "E0001");
INSERT INTO main_event_status VALUES (1, 1, 0, "E0001");
INSERT INTO main_event_venue VALUES (1, "E0001", '210');


INSERT INTO main_eventID VALUES ("Getting Started with Git", "E0002", "Intro Session to Git/Version Control");
INSERT INTO main_event_details VALUES (2, 1699853400, 1699860600, "E0002");
INSERT INTO main_requirements VALUES (2, 1, 1, "E0002");
INSERT INTO main_event_coordinators VALUES ("webdev@iiitt.ac.in", "E0002");
INSERT INTO main_event_coordinators_details VALUES (2, "Web Dev Club", "E0002");
INSERT INTO main_event_sanction VALUES (2, "./files/b.pdf", "E0002");
INSERT INTO main_event_status VALUES (2, 1, 0, "E0002");
INSERT INTO main_event_venue VALUES (2, "E0002", '210');

INSERT INTO main_eventID VALUES ("Robotics Session-I", "E0003", "Intro for Robotics Club");
INSERT INTO main_event_details VALUES (3, 1699867800, 1699871400, "E0003");
INSERT INTO main_requirements VALUES (3, 1, 1, "E0003");
INSERT INTO main_event_coordinators VALUES ("robotics@iiitt.ac.in", "E0003");
INSERT INTO main_event_coordinators_details VALUES (3, "Robotics Club", "E0003");
INSERT INTO main_event_sanction VALUES (3, "./files/c.pdf", "E0003");
INSERT INTO main_event_status VALUES (3, 0, 0, "E0003");
INSERT INTO main_event_venue VALUES (3, "E0003", '211');