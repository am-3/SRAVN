
--Populate 
INSERT INTO main_venue_details VALUES ( 'IInd CSE'                  , '1xx' );              
INSERT INTO main_venue_details VALUES ( 'IInd ECE'                  , '112' );
INSERT INTO main_venue_details VALUES ( 'IIIrd CSE'                 , '121' );
INSERT INTO main_venue_details VALUES ( 'IIIrd ECE'                 , '122' );

INSERT INTO main_venue_details VALUES ( 'Sudha Murty Hall'          , '210' );
INSERT INTO main_venue_details VALUES ( 'Seminar Hall-II'           , '211' );
INSERT INTO main_venue_details VALUES ( 'Seminar Hall-III'          , '212' );

INSERT INTO main_venue_details VALUES ( 'Meeting Hall-I'            , '310' );
INSERT INTO main_venue_details VALUES ( 'Meeting Hall-II'           , '311' );
INSERT INTO main_venue_details VALUES ( 'Meeting Hall-III'          , '312' );
INSERT INTO main_venue_details VALUES ( 'Meeting Hall-IV'           , '313' );
INSERT INTO main_venue_details VALUES ( 'Meeting Hall-V'            , '314' );
INSERT INTO main_venue_details VALUES ( 'Meeting Hall-VI'           , '315' );


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