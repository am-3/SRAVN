// Global variables for time constraints
const MIN_START_TIME = "09:00";
const MAX_START_TIME = "21:30";
const MIN_END_TIME = "09:30";
const MAX_END_TIME = "22:00";
const MAX_DATE_LIMIT = 3; // Maximum allowed months from today

const ROOM_NUMBERS_LIST = ["101", "102", "103", "104"];

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("eventForm");
    const eventDates = document.getElementById("eventDates");
    const addDateButton = document.getElementById("addDate");
    const dateInput = document.getElementById("dateInput");
    const startTimeSelect = document.getElementById("startTimeSelect");
    const endTimeSelect = document.getElementById("endTimeSelect");

    const hallNumbers = document.getElementById("hallNumbers");
    const addHallButton = document.getElementById("addHall");

    const hallSelect = document.getElementById("hallSelect");
    const hallTemplate = document.getElementById("hallTemplate");
    // Populate the hallSelect dropdown with options from ROOM_NUMBERS_LIST
    ROOM_NUMBERS_LIST.forEach((roomNumber) => {
        const option = new Option(roomNumber, roomNumber);
        hallSelect.appendChild(option);
    });

    addHallButton.addEventListener("click", function () {
        const newHallSelect = hallTemplate.cloneNode(true);
        newHallSelect.removeAttribute("style"); // Make the cloned dropdown visible
    
        // Populate the cloned dropdown with options
        hallSelect.querySelectorAll("option").forEach(function (option) {
            const clonedOption = document.createElement("option");
            clonedOption.value = option.value;
            clonedOption.text = option.text;
            if(option.hidden == true)
            {
                clonedOption.hidden=true;
            }
            newHallSelect.querySelector("select").appendChild(clonedOption);
        });

        // Add a "Remove Hall" button for the new hall
        const removeHallButton = document.createElement("button");
        removeHallButton.textContent = "Remove Venue";
        removeHallButton.addEventListener("click", function () {
            hallNumbers.removeChild(newHallSelect);
        });
    
        newHallSelect.appendChild(removeHallButton);
        hallNumbers.appendChild(newHallSelect);
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

        // Update time slots based on the selected date
        updateStartTimeEndTimeOptions();
    });

    // Function to handle the selection of start and end times
    function handleTimeSelection() {
        const selectedStartTime = startTimeSelect.value;
        const selectedEndTime = endTimeSelect.value;

        const parsedStartTime = parseTime(selectedStartTime);
        const parsedEndTime = parseTime(selectedEndTime);

        if (parsedStartTime >= parsedEndTime) {
            alert("End time must be after the start time.");
            startTimeSelect.value = ""; // Clear the selected start time
        }
    }

    function parseTime(timeString) {
        let result;
        // Split the time string into hours and minutes
        const [time, period] = timeString.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        // Adjust hours for PM if needed
        if (period === "PM" && hours < 12) {
            hours += 12;
        }

        // Create a Date object with the adjusted hours and minutes
        result = new Date();
        result.setHours(hours, minutes, 0, 0);

        return result;
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
        minDate.setHours(0, 0, 0, 0);
        minDate.setDate(currentDate.getDate() + 1);

        const maxDate = new Date();
        maxDate.setHours(0, 0, 0, 0);
        maxDate.setMonth(currentDate.getMonth() + MAX_DATE_LIMIT);

        dateInput.min = minDate.toISOString().split("T")[0];
        dateInput.max = maxDate.toISOString().split("T")[0];

        if (isSameDate(currentDate, selectedDate)) {
            updateTodayTimeSlots(currentDate);
        } else {
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

    var startTimeOption = new Option("Start time", "", true, true);
    startTimeOption.hidden = "true";

    var endTimeOption = new Option("End time", "", true, true);
    endTimeOption.hidden = "true";
    function updateTodayTimeSlots(currentDate) {
        const now = new Date();
        if (currentDate.toDateString() === now.toDateString()) {
            // Today is selected, and the date is the same as the current date
            // Calculate the nearest next near future slot
            const currentTime = new Date();
            let nearestNextSlot = new Date(currentTime);

            const minStartTime = parseTime(MIN_START_TIME);
            const minEndTime = parseTime(MIN_END_TIME);
            const maxStartTime = parseTime(MAX_START_TIME);
            const maxEndTime = parseTime(MAX_END_TIME);

            if (currentTime <= minStartTime) {
                nearestNextSlot = minStartTime;
            } else if (
                currentTime >= minEndTime &&
                currentTime <= maxStartTime
            ) {
                nearestNextSlot = new Date(
                    Math.ceil(currentTime / 1800000) * 1800000
                ); // Round up to the next 30 minutes
            } else if (currentTime >= maxStartTime) {
                nearestNextSlot = maxEndTime;
            }

            // Populate start time options
            let startTime = new Date(nearestNextSlot);
            while (startTime <= maxStartTime) {
                const timeString = startTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                startTimeSelect.add(new Option(timeString, timeString));
                startTime.setMinutes(startTime.getMinutes() + 30);
            }

            // Populate end time options=
            console.log("ASAs", nearestNextSlot);
            let endTime = new Date(nearestNextSlot);
            endTime.setMinutes(endTime.getMinutes() + 30);
            console.log("Endtime", endTime);
            while (endTime <= maxEndTime) {
                const timeString = endTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                endTimeSelect.add(new Option(timeString, timeString));
                endTime.setMinutes(endTime.getMinutes() + 30);
            }
            startTimeSelect.add(startTimeOption);
            endTimeSelect.add(endTimeOption);
        } else {
            // Date is not today, use global time constraints
            updateGlobalTimeSlots();
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

        startTimeSelect.add(startTimeOption);
        endTimeSelect.add(endTimeOption);
    }

    dateInput.addEventListener("change", function () {
        updateStartTimeEndTimeOptions();
        const currentDate = new Date();
        const selectedDate = new Date(dateInput.value);
        selectedDate.setHours(24, 0, 0, 0);

        if (selectedDate < currentDate) {
            dateInput.value = "";
            alert("Please select a future date.");
        }
    });

    updateStartTimeEndTimeOptions(); // Call this function initially

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add your form submission logic here
    });
});
