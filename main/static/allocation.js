// Define legend for event types
const legends = ['Event Approved', 'Lecture', 'Seminar', 'Meeting', 'Event Pending'];

// utility
function getLocalISODate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


// Initialize start and end times for the schedule
let startTime = new Date();
startTime.setHours(0, 0, 0, 0); // Start at 12:00 AM

let endTime = new Date();
endTime.setHours(24, 0, 0, 0); // End at 6:00 PM

// Sample event allocation data
const data = [
    {
        venue: "Hall 1",
        events: [
            {
                startDate: getLocalISODate(startTime),
                endDate: getLocalISODate(startTime),
                startTime: "09:00",
                endTime: "11:30",
                eventName: "cs515",
                eventType: "Event Approved"
            },
            {
                startDate: getLocalISODate(startTime),
                endDate: getLocalISODate(startTime),
                startTime: "12:00",
                endTime: "13:30",
                eventName: "cs515",
                eventType: "Seminar"
            }
        ]
    },
    {
        venue: "Hall 2",
        events: [
            {
                startDate: getLocalISODate(startTime),
                endDate: getLocalISODate(startTime),
                startTime: "10:30",
                endTime: "12:00",
                eventName: "cs516",
                eventType: "Lecture"
            }
        ]
    },
    {
        venue: "Hall 3",
        events: [
            {
                startDate: getLocalISODate(startTime),
                endDate: getLocalISODate(startTime),
                startTime: "13:00",
                endTime: "15:00",
                eventName: "cs517",
                eventType: "Seminar"
            },
            {
                startDate: getLocalISODate(startTime),
                endDate: getLocalISODate(startTime),
                startTime: "15:00",
                endTime: "17:00",
                eventName: "cs517",
                eventType: "Meeting"
            }
        ]
    },
];


// Function to return conflict-free allocation table
const getConflictFreeAllocation = (allocation) => {
    return allocation.map((venue) => {
        const events = venue.events;

        // Sort events by start time to check conflicts in order
        events.sort((a, b) => {
            const aStart = new Date(`${a.startDate}T${a.startTime}`);
            const bStart = new Date(`${b.startDate}T${b.startTime}`);
            return aStart - bStart;
        });

        // Array to store non-conflicting events
        const conflictFreeEvents = [];

        events.forEach((event) => {
            const eventStart = new Date(`${event.startDate}T${event.startTime}`);

            // Check if event conflicts with the last non-conflicting event
            const lastEvent = conflictFreeEvents[conflictFreeEvents.length - 1];
            if (!lastEvent) {
                // No events in conflict-free list, so add the current event
                conflictFreeEvents.push(event);
            } else {
                const lastEventEnd = new Date(`${lastEvent.endDate}T${lastEvent.endTime}`);

                // Only add the current event if it doesn't overlap with the last event
                if (eventStart > lastEventEnd) {
                    conflictFreeEvents.push(event);
                }
                else {
                    console.error("Conflicting event: ", lastEvent);
                }
            }
        });

        return {
            venue: venue.venue,
            events: conflictFreeEvents
        };
    });
};


// Function to display a popup with event details
function showPopup(eventDetails) {
    const popup = document.createElement("div"); // Create a div element for popup
    popup.classList.add("popup"); //add class to the div element
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup" onclick="closePopup()">
                <img src="../static/img/cross.png" width="20px" height="20px"/>
            </span>
            <div class='event-details'>
                <h2>Event Details</h2>
                <p><span>Venue:</span> ${eventDetails.venue}</p>
                <p><span>Start Date:</span> ${eventDetails.startDate}</p>
                <p><span>End Date:</span> ${eventDetails.endDate}</p>
                <p><span>Start Time:</span> ${eventDetails.startTime}</p>
                <p><span>End Time:</span> ${eventDetails.endTime}</p>
                <p><span>Event Name:</span> ${eventDetails.eventName}</p>
                <p><span>Event Type:</span> ${eventDetails.eventType}</p>
            </div>
        </div>
    `;
    document.body.appendChild(popup); // Append the popup to the document body

    // Add a click event listener to the document to close the popup when clicked outside the popup body
    document.addEventListener("click", function (e) {
        const popupBox = popup.querySelector(".popup-content"); // Get the popup body
        // Check if the click event is not inside the popup body and not on the popup itself
        if (!popupBox.contains(e.target) && !e.target.classList.contains("popup")) {
            closePopup();
        }
    });
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector(".popup"); // Get the popup
    if (popup) {
        popup.remove();
    }
}

const fillData = () => {
    const allocation = getConflictFreeAllocation(data); // Retrieve conflict-free allocation table

    // Fill thead and tfoot rows for venues and event types, respectively
    const theadRow = document.querySelector(".thead-row");
    const tfootRow = document.querySelector(".tfoot-row");

    // Populate thead with venue names
    allocation.forEach(({ venue }) => {
        const td = document.createElement("td");
        td.textContent = venue;
        theadRow.appendChild(td);
    });

    // Populate tfoot with event types and colors
    legends.forEach((type) => {
        const td = document.createElement("td");
        td.textContent = type;
        td.classList.add('fixed-tfoot');
        td.style.background = getEventColor(type); // Helper function for color by type
        tfootRow.appendChild(td);
    });

    // Fill tbody with time slots and events
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Clear any existing content

    let currentTime = new Date(startTime); // Use a local variable to iterate through time

    // Define the number of time slots (48 slots for a 24-hour schedule in 30-minute increments)
    const TIME_SLOTS = 48; // Adjust based on your time range

    // Initialize a 2D array for venues and time slots (true indicates availability)
    const venueSlots = allocation.map(() => Array(TIME_SLOTS).fill(true));

    while (currentTime < endTime) {
        const tr = document.createElement("tr"); //create a row in table

        // Add time label cell at the start of each row
        const timeCell = document.createElement("td");
        timeCell.textContent = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        timeCell.classList.add("time-cell");
        tr.appendChild(timeCell);

        allocation.forEach((venue, columnIndex) => {
            const td = document.createElement("td");
            td.classList.add("active");

            // event whose start and end times cover current time slot 
            const event = venue.events.find(evt => {
                const eventStart = new Date(`${evt.startDate}T${evt.startTime}`);
                const eventEnd = new Date(`${evt.endDate}T${evt.endTime}`);
                return currentTime >= eventStart && currentTime < eventEnd;
            });

            if (event) {
                // Calculate start and end slot indices
                const eventStart = new Date(`${event.startDate}T${event.startTime}`);
                const startSlot = Math.floor((eventStart.getHours() * 60 + eventStart.getMinutes()) / 30);
                const endSlot = Math.ceil((new Date(`${event.endDate}T${event.endTime}`).getTime() - eventStart.getTime()) / (30 * 60 * 1000)) + startSlot;

                // Check if the slots are available
                const isAvailable = venueSlots[columnIndex].slice(startSlot, endSlot).every(slot => slot === true);

                if (isAvailable) {
                    td.textContent = event.eventName;
                    td.setAttribute("rowspan", endSlot - startSlot); // Number of slots the event spans
                    td.style.background = getEventColor(event.eventType);
                    td.addEventListener("click", () => showPopup(event)); // Show event details in popup

                    // Mark these slots as occupied
                    for (let i = startSlot; i < endSlot; i++) {
                        venueSlots[columnIndex][i] = false;
                    }
                } else {
                    td.style.display = 'none'; // Hide cells that aren't the event start time
                }
            } else {
                // Only display empty slots if no current event
                td.innerHTML = `<img src="../static/img/plus.svg" style="width: 15px; height: 15px;">`;
                td.style.textAlign = "center";
                td.addEventListener("click", () => {
                    setTimeout(() => window.location.href = '/form', 100);
                });
            }

            tr.appendChild(td);
        });


        // Append row to tbody
        tbody.appendChild(tr);

        // Increment time by 30 minutes
        currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
};

// Helper function to get background color based on event type
const getEventColor = (type) => {
    switch (type) {
        case 'Event Approved': return '#6dd9c4';
        case 'Lecture': return '#86a723';
        case 'Seminar': return '#ffff99';
        case 'Meeting': return '#99cccc';
        case 'Event Pending': return '#ccffcc';
        default: return '#ffffff';
    }
};


// Call the function to fill the schedule data
fillData();
