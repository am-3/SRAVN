// Global variables for time constraints
const MIN_START_TIME = "09:00";
const MAX_START_TIME = "21:30";
const MIN_END_TIME = "09:30";
const MAX_END_TIME = "22:00";
const MAX_DATE_LIMIT = 3; // Maximum allowed months from today


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("eventForm");
    const eventDates = document.getElementById("eventDates");
    const addDateButton = document.getElementById("addDate");
    const dateInput = document.getElementById("dateInput");
    const startTimeSelect = document.getElementById("startTimeSelect");
    const endTimeSelect = document.getElementById("endTimeSelect");

    const hallNumbers = document.getElementById("hallNumbers");
    const addHallButton = document.getElementById("addHall");

    addHallButton.addEventListener("click", function () {
        const input = document.createElement("input");
        input.type = "text";
        input.name = "halls";
        input.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Hall";
        deleteButton.addEventListener("click", function () {
            hallNumbers.removeChild(input);
            hallNumbers.removeChild(deleteButton);
        });

        hallNumbers.appendChild(input);
        hallNumbers.appendChild(deleteButton);
    });


    addDateButton.addEventListener("click", function () {
        const dateGroup = document.createElement("div");
        dateGroup.classList.add("date-time-group");

        const cloneDateInput = dateInput.cloneNode(true);
        const cloneStartTimeSelect = startTimeSelect.cloneNode(true);
        const cloneEndTimeSelect = endTimeSelect.cloneNode(true);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Date";
        deleteButton.addEventListener("click", function () {
            eventDates.removeChild(dateGroup);
        });

        dateGroup.appendChild(cloneDateInput);
        dateGroup.appendChild(cloneStartTimeSelect);
        dateGroup.appendChild(cloneEndTimeSelect);
        dateGroup.appendChild(deleteButton);

        eventDates.appendChild(dateGroup);
    });

    // Function to handle the selection of start and end times
    function handleTimeSelection() {
        const selectedStartTime = startTimeSelect.value;
        const selectedEndTime = endTimeSelect.value;

        if (selectedStartTime >= selectedEndTime) {
            // Ensure the end time is after the start time
            alert("End time must be after the start time.");
            startTimeSelect.value = ""; // Clear the selected start time
        }
    }

    startTimeSelect.addEventListener("change", handleTimeSelection);
    endTimeSelect.addEventListener("change", handleTimeSelection);

    // Function to update start and end time options
    function updateStartTimeEndTimeOptions() {
        startTimeSelect.innerHTML = "";
        endTimeSelect.innerHTML = "";

        const currentDate = new Date();
        const selectedDate = new Date(dateInput.value);

        // Disable all past dates
        const minDate = new Date();
        minDate.setHours(0, 0, 0, 0); // Set the time to midnight
        minDate.setDate(currentDate.getDate() + 1); // Disable past dates


        const maxDate = new Date();
        maxDate.setHours(0, 0, 0, 0); // Set the time to midnight
        maxDate.setMonth(currentDate.getMonth() + MAX_DATE_LIMIT); // Set maximum allowed date


        dateInput.min = minDate.toISOString().split("T")[0];
        dateInput.max = maxDate.toISOString().split("T")[0];

        if (isSameDate(currentDate, selectedDate)) {
            // Adjust time slots for today's date based on the current time
            updateTodayTimeSlots(currentDate);
        } else {
            // Use global time constraints for other valid dates
            updateGlobalTimeSlots();
        }
    }

    function isSameDate(date1, date2) {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    function updateTodayTimeSlots(currentDate) {
        // Adjust start time based on the current time
        const currentTimeHours = currentDate.getHours();
        const currentTimeMinutes = currentDate.getMinutes();

        // Round current time to the nearest half-hour
        const adjustedMinutes = Math.ceil(currentTimeMinutes / 30) * 30;
        const startHour = currentTimeHours + Math.floor(adjustedMinutes / 60);
        const startMinute = adjustedMinutes % 60;

        // Set the minimum and maximum start times
        const minStartTime = new Date(currentDate);
        minStartTime.setHours(startHour, startMinute);

        const maxStartTime = new Date(currentDate);
        maxStartTime.setHours(21, 30);

        // Set the minimum and maximum end times
        const minEndTime = new Date(currentDate);
        minEndTime.setHours(startHour, startMinute + 30);

        const maxEndTime = new Date(currentDate);
        maxEndTime.setHours(22, 0);

        // Populate start time options
        while (minStartTime <= maxStartTime) {
            const timeString = minStartTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            startTimeSelect.add(new Option(timeString, timeString));
            minStartTime.setMinutes(minStartTime.getMinutes() + 30);
        }

        // Populate end time options
        while (minEndTime <= maxEndTime) {
            const timeString = minEndTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            endTimeSelect.add(new Option(timeString, timeString));
            minEndTime.setMinutes(minEndTime.getMinutes() + 30);
        }
    }

    function updateGlobalTimeSlots() {
        let startTime = new Date();
        startTime.setHours(parseInt(MIN_START_TIME.split(":")[0], 10));
        startTime.setMinutes(parseInt(MIN_START_TIME.split(":")[1], 10));

        let endTime = new Date();
        endTime.setHours(parseInt(MIN_END_TIME.split(":")[0], 10));
        endTime.setMinutes(parseInt(MIN_END_TIME.split(":")[1], 10));

        const maxTimeStart = new Date();
        maxTimeStart.setHours(parseInt(MAX_START_TIME.split(":")[0], 10));
        maxTimeStart.setMinutes(parseInt(MAX_START_TIME.split(":")[1], 10));

        const maxTimeEnd = new Date();
        maxTimeEnd.setHours(parseInt(MAX_END_TIME.split(":")[0], 10));
        maxTimeEnd.setMinutes(parseInt(MAX_END_TIME.split(":")[1], 10));

        while (startTime <= maxTimeStart) {
            const timeString = startTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            startTimeSelect.add(new Option(timeString, timeString));
            startTime.setMinutes(startTime.getMinutes() + 30);
        }

        while (endTime <= maxTimeEnd) {
            const timeString = endTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            endTimeSelect.add(new Option(timeString, timeString));
            endTime.setMinutes(endTime.getMinutes() + 30);
        }
    }

    dateInput.addEventListener("change", function () {
        updateStartTimeEndTimeOptions();
        const currentDate = new Date();
        const selectedDate = new Date(dateInput.value);
        selectedDate.setHours(24, 0, 0, 0);
        console.log(currentDate, selectedDate);

        if (selectedDate < currentDate) {
            console.log(currentDate);
            console.log(selectedDate);
            dateInput.value = '';
            alert('Please select a future date.');
        }
    });

    updateStartTimeEndTimeOptions(); // Call this function initially

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add your form submission logic here
    });
});
