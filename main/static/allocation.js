const legends = ['Event Approved', 'Lecture', 'Seminar', 'Meeting', 'Event Pending']

let startTime = new Date();
startTime.setHours(0, 0, 0, 0); // Start at 12:00 AM

let endTime = new Date();
endTime.setHours(24, 0, 0, 0); // End at 6:00 PM

const allocation = [
    {
        venue: "Hall 1",
        startDate: "2023-12-10",
        endDate: "2023-12-10",
        startTime: "12:00:00",
        endTime: "17:30:00",
        eventName: "cs201",
        eventType: "Lecture"
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

]
function showPopup(eventDetails) {
    const popup = document.createElement("div");
    popup.classList.add("popup")
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup" onclick="closePopup()">
                <img src = "../static/img/cross.png" width=20px height=20px/>
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

    `
    document.body.appendChild(popup);
    // Add a click event listener to the document to close the popup when clicked outside
    document.addEventListener("click", function (e) {
        const popupBox = popup.querySelector(".popup-content")
        if (!popupBox.contains(e.target) && !e.target.classList.contains("popup")) {
            console.log(e.target)
            // closePopup();
        }
    });
}

// Add a function to close the popup
function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) {
        popup.remove();
    }
}
const fillData = () => {
    // Fill thead and tfoot
    const theadRow = document.querySelector(".thead-row");
    const tfootRow = document.querySelector(".tfoot-row");

    for (let i = 0; i < allocation.length; i++) {
        const venue = allocation[i].venue;
        const td = document.createElement("td");
        td.textContent = venue;
        theadRow.appendChild(td);
    }
    for (let i = 0; i < legends.length; i++) {
        const type = legends[i];
        const td = document.createElement("td");
        td.textContent = type;
        td.classList.add('fixed-tfoot')
        switch (type) {
            case 'Event Approved':
                td.style.background = '#6dd9c4'
                break;

            case 'Lecture':
                td.style.background = '#86a723'
                break;

            case 'Seminar':
                td.style.background = '#ffff99'
                break;

            case 'Meeting':
                td.style.background = '#99cccc'
                break;

            case 'Event Pending':
                td.style.background = '#ccffcc'
                break;

            default:
                break;
        }
        tfootRow.appendChild(td);
    }

    // Set time

    // Fill tbody

    // Initialize an array to keep track of slot availability
    const slotsAvailable = Array(allocation.length).fill(true)

    const tbody = document.querySelector("tbody");
    while (startTime < endTime) {
        const tr = document.createElement("tr");
        for (let i = 0; i < allocation.length; i++) {
            const td = document.createElement("td");
            td.classList.add("active")
            const venueStartTime = new Date(`${allocation[i].startDate}T${allocation[i].startTime}`);
            const venueEndTime = new Date(`${allocation[i].startDate}T${allocation[i].endTime}`);

            // check if event time is in slot
            if (startTime >= venueStartTime && startTime <= venueEndTime) {
                //making sure that for each booking, eventName is printed only once
                if (!slotsAvailable[i]) continue;
                if (startTime.getTime() === venueStartTime.getTime()) {
                    td.textContent = allocation[i].eventName;
                    const slotsSpanned = 1 + Math.ceil((venueEndTime - venueStartTime) / (30 * 60 * 1000));
                    td.setAttribute("rowspan", slotsSpanned);
                }
                //applying specific colors based on eventType
                const type = allocation[i].eventType;
                switch (type) {
                    case 'Event Approved':
                        td.style.background = '#6dd9c4'
                        break;

                    case 'Lecture':
                        td.style.background = '#86a723'
                        break;

                    case 'Seminar':
                        td.style.background = '#ffff99'
                        break;

                    case 'Meeting':
                        td.style.background = '#99cccc'
                        break;

                    case 'Event Pending':
                        td.style.background = '#ccffcc'
                        break;

                    default:
                        break;
                }

                slotsAvailable[i] = false;

                td.addEventListener("click", function () {
                    const eventDetails = {
                        venue: "Hall 2",
                        startDate: "2023-12-10",
                        endDate: "2023-12-10",
                        startTime: "12:00",
                        endTime: "13:00",
                        eventName: "cs515",
                        eventType: "Seminar"
                    }
                    showPopup(eventDetails);
                });
            }
            else {

                td.style.textAlign = 'center';
                const svgImg = document.createElement("img");
                svgImg.src = "../static/img/plus.svg";
                svgImg.style.width = "15px";
                svgImg.style.height = "15px";

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

        // update time slots
        const timeCell = document.createElement("td");
        timeCell.textContent = startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        timeCell.classList.add("time-cell")
        tr.insertBefore(timeCell, tr.firstChild);
        tbody.appendChild(tr);

        // Increment startTime by 30 minutes
        startTime.setMinutes(startTime.getMinutes() + 30);
    }
}

fillData();