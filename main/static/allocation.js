const legends = ['Event Approved', 'Lecture', 'Seminar', 'Meeting', 'Event Pending']

const allocation = [
    {
        venue: "Hall 1",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "12:00:00",
        endTime: "13:00:00",
        eventName: "cs201",
        eventType:"Seminar"
    },
    {
        venue: "Hall 2",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "12:00",
        endTime: "13:00",
        eventName: "cs515",
        eventType:"Seminar"
    },
    {
        venue: "Hall 3",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "13:00",
        endTime: "14:00",
        eventName: "Razor",
        eventType:"Seminar"
    },
    {
        venue: "Hall 4",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "14:00",
        endTime: "16:00",
        eventName: "Razor",
        eventType:"Seminar"
    },
    {
        venue: "Hall 5",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "16:30",
        endTime: "17:30",
        eventName: "Razor",
        eventType:"Seminar"
    },
    {
        venue: "Hall 6",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "16:30",
        endTime: "17:30",
        eventName: "Razor",
        eventType:"Seminar"
    },
    {
        venue: "Hall 7",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "16:30",
        endTime: "17:30",
        eventName: "Razor",
        eventType:"Seminar"
    },
    {
        venue: "Hall 8",
        startDate: "2023-11-02",
        endDate: "2023-11-02",
        startTime: "16:30",
        endTime: "17:30",
        eventName: "Razor",
        eventType:"Seminar"
    },

]

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
    let startTime = new Date();
    startTime.setHours(12, 0, 0, 0); // Start at 12:00 AM

    let endTime = new Date();
    endTime.setHours(18, 0, 0, 0); // End at 6:00 PM

    // Fill tbody
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
                

                //making sure that for each booking, eventName is printed only once
                if(startTime.getTime() === venueStartTime.getTime()){
                    td.textContent = allocation[i].eventName
                }

                td.addEventListener("click", function () {
                    // Navigate to another page (replace 'URL' with the actual URL)
                    setTimeout(function () {
                        window.location.href = '/event';
                    }, 100);
                });
            }
            else {

                td.style.textAlign='center';
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