// Define legend for event types
const legends = ['Event Approved', 'Lecture', 'Seminar', 'Meeting', 'Event Pending'];

// Initialize start and end times for the schedule
let startTime = new Date();
startTime.setHours(0, 0, 0, 0); // Start at 12:00 AM

let endTime = new Date();
endTime.setHours(24, 0, 0, 0); // End at 6:00 PM

// Sample event allocation data
const allocation = [
    {
        venue: "Hall 2",
        startDate: "2023-12-10",
        endDate: "2023-12-10",
        startTime: "12:00",
        endTime: "15:00",
        eventName: "cs515",
        eventType: "Seminar"
    },
    {
        venue: "Hall 2",
        startDate: "2023-12-10",
        endDate: "2023-12-10",
        startTime: "12:00",
        endTime: "15:00",
        eventName: "cs515",
        eventType: "Seminar"
    },
];

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

// Function to fill the schedule data
const fillData = () => {
    // Fill thead and tfoot

    const theadRow = document.querySelector(".thead-row"); // Get the thead row
    const tfootRow = document.querySelector(".tfoot-row"); // Get the tfoot row

    // Fill thead with venue names
    // Loop through venues in allocation
    for (let i = 0; i < allocation.length; i++) {
        const venue = allocation[i].venue;          // Get the venue name
        const td = document.createElement("td");    // Create a td element (a cell in table)
        td.textContent = venue;                     // Set the text content of the cell to the venue name
        theadRow.appendChild(td);                   // Append the cell to the thead row
    }

    // Fill tfoot with event types and corresponding colors
    // Loop through legend types
    for (let i = 0; i < legends.length; i++) {
        const type = legends[i];                        // Get the legend type
        const td = document.createElement("td");        // Create a td element (a cell in table)
        td.textContent = type;                          // Set the text content of the cell to the legend type
        td.classList.add('fixed-tfoot');                // Add a class to the cell to fix it at the bottom

        // Apply specific background colors to the cell created above based on event type
        switch (type) {
            case 'Event Approved':
                td.style.background = '#6dd9c4';
                break;
            case 'Lecture':
                td.style.background = '#86a723';
                break;
            case 'Seminar':
                td.style.background = '#ffff99';
                break;
            case 'Meeting':
                td.style.background = '#99cccc';
                break;
            case 'Event Pending':
                td.style.background = '#ccffcc';
                break;
            default:
                break;
        }
        tfootRow.appendChild(td);                      // Append the cell to the tfoot row  
    }

    // Initialize an array to keep track of slot fiiling status to avoid overlapping events
    /*
    
        Purpose: The slotsAvailable array helps prevent events from overlapping in time slots. When an event is accommodated in a time slot, the corresponding index in the slotsAvailable array is set to false to indicate that the slot is no longer available. This prevents multiple events from being displayed in the same time slot, ensuring that each event is shown only once in the schedule.
    
    */
    const slotsAvailable = Array(allocation.length).fill(true);

    // Get the tbody element so that we can append cells to it
    const tbody = document.querySelector("tbody");

    // Loop through time slots, we will increase the startTime by 30 minutes in each iteration
    while (startTime < endTime) {
        const tr = document.createElement("tr");        // Create a tr element (a row in table)

        // Loop through venues
        for (let i = 0; i < allocation.length; i++) {
            const td = document.createElement("td");    // Create a td element (a cell in table) so as to put it in above created row
            
            td.classList.add("active");                 // Add a class to the cell to make it active when hovered on it

            const venueStartTime = new Date(`${allocation[i].startDate}T${allocation[i].startTime}`);  // Get the start time of the event in allocation input in proper format
            const venueEndTime = new Date(`${allocation[i].startDate}T${allocation[i].endTime}`);      // Get the end time of the event in allocation input in proper format

            // Check if event time is in the current slot
            if (startTime >= venueStartTime && startTime <= venueEndTime) {

                // If i'th events' slot is filled in some previous iteration, ensure event name is printed only once for each booking so that for a booking spanning multiple slots, the event name is printed only once
                if (!slotsAvailable[i]) continue;


                // Check if the current slot is the start time of the i'th event
                if (startTime.getTime() === venueStartTime.getTime()) {
                    td.textContent = allocation[i].eventName;       // Set the text content of the cell to the event name

                    // Calculate the number of slots spanned by the event
                    const slotsSpanned = 1 + Math.ceil((venueEndTime - venueStartTime) / (30 * 60 * 1000));
                    td.setAttribute("rowspan", slotsSpanned);       // Set the rowspan attribute of the cell to the number of slots spanned by the event    
                }

                // Apply specific colors based on eventType to the cell created above
                const type = allocation[i].eventType;
                switch (type) {
                    case 'Event Approved':
                        td.style.background = '#6dd9c4';
                        break;
                    case 'Lecture':
                        td.style.background = '#86a723';
                        break;
                    case 'Seminar':
                        td.style.background = '#ffff99';
                        break;
                    case 'Meeting':
                        td.style.background = '#99cccc';
                        break;
                    case 'Event Pending':
                        td.style.background = '#ccffcc';
                        break;
                    default:
                        break;
                }

                slotsAvailable[i] = false;      // Mark the i'th event as filled

                // Add click event listener to display popup with event details
                td.addEventListener("click", function () {
                    const eventDetails = {
                        venue: allocation[i].venue,
                        startDate: allocation[i].startDate,
                        endDate: allocation[i].endDate,
                        startTime: allocation[i].startTime,
                        endTime: allocation[i].endTime,
                        eventName: allocation[i].eventName,
                        eventType: allocation[i].eventType,
                    };
                    showPopup(eventDetails);
                });
            } else {
                // Display a plus icon to indicate an empty slot
                td.style.textAlign = 'center';
                const svgImg = document.createElement("img");
                svgImg.src = "../static/img/plus.svg";
                svgImg.style.width = "15px";
                svgImg.style.height = "15px";

                // Add click event listener to navigate to another page
                td.appendChild(svgImg);
                td.addEventListener("click", function () {
                    // Navigate to another page (replace 'URL' with the actual URL)
                    setTimeout(function () {
                        window.location.href = '/form';
                    }, 100);
                });
            }
            tr.appendChild(td);
        }

        // Add time cell to the row
        const timeCell = document.createElement("td");      // Create a td element (a cell in table) so as to put it in above created row
        timeCell.textContent = startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });    // Set the text content of the cell to the current time
        timeCell.classList.add("time-cell");        // Add a class to the cell to fix it at the left
        tr.insertBefore(timeCell, tr.firstChild);   // Insert the cell at the beginning of the row
        tbody.appendChild(tr);                      // Append the above created row to the tbody

        // Increment startTime by 30 minutes
        startTime.setMinutes(startTime.getMinutes() + 30);
    }
};

// Call the function to fill the schedule data
fillData();
