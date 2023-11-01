const allocation = [
    {
        venue: "Hall 1",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "12:00",
        endTime: "13:00",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 2",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "12:00",
        endTime: "13:00",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 3",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "13:00",
        endTime: "14:00",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 4",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "14:00",
        endTime: "16:00",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 5",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "16:30",
        endTime: "17:30",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 6",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "16:30",
        endTime: "17:30",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 7",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "16:30",
        endTime: "17:30",
        bookedBy: "Razor"
    },
    {
        venue: "Hall 8",
        startDate: "2023-11-01",
        endDate: "2023-11-01",
        startTime: "16:30",
        endTime: "17:30",
        bookedBy: "Razor"
    },

]

const fillData = () => {
    // Fill thead
    const theadRow = document.querySelector(".thead-row");
    for (let i = 0; i < allocation.length; i++) {
        const venue = allocation[i].venue;
        const th = document.createElement("th");
        th.textContent = venue;
        theadRow.appendChild(th);
    }

    // Set time
    let startTime = new Date();
    startTime.setHours(12,0,0,0); // Start at 12:00 AM

    let endTime = new Date();
    endTime.setHours(18,0,0,0); // End at 6:00 PM

    // Fill tbody
    const tbody = document.querySelector("tbody");
    while (startTime < endTime) {
        const tr = document.createElement("tr");
        for (let i = 0; i < allocation.length; i++) {
            const td = document.createElement("td");
            
            const venueStartTime = new Date(`${allocation[i].startDate}T${allocation[i].startTime}`);
            const venueEndTime = new Date(`${allocation[i].startDate}T${allocation[i].endTime}`);
            
            // check if event time is in slot
            if (startTime >= venueStartTime && startTime <= venueEndTime) {
                td.classList.add("booked");
            } 
            else{
                td.addEventListener("click", function() {
                    // Navigate to another page (replace 'URL' with the actual URL)
                    window.location.href = '/form-URL';
                });
            }
            tr.appendChild(td);
        }

        // update time slots
        const timeCell = document.createElement("td");
        timeCell.textContent = startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        tr.insertBefore(timeCell, tr.firstChild);
        tbody.appendChild(tr);

        // Increment startTime by 30 minutes
        startTime.setMinutes(startTime.getMinutes() + 30);
    }
}

fillData();