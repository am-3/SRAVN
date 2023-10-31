const MAX_VIEW_LIMIT = 90; // Including today

function updateSecondDropdown() {
    var hallTypes = document.getElementById("hall-types");
    var hallSubtypes = document.getElementById("hall-subtypes");
    var selectedOption = hallTypes.options[hallTypes.selectedIndex].value;

    var defaultOption = hallTypes.options[0];
    defaultOption.disabled = true;

    hallSubtypes.hidden = false;

    // Clear previous options
    hallSubtypes.innerHTML = "";

    // Add options based on selected option
    if (selectedOption === "Classrooms") {
        addOption(hallSubtypes, "subOption1-1", "Sub Option 1-1");
        addOption(hallSubtypes, "subOption1-2", "Sub Option 1-2");
    } else if (selectedOption === "Seminar Halls") {
        addOption(hallSubtypes, "subOption2-1", "Sub Option 2-1");
        addOption(hallSubtypes, "subOption2-2", "Sub Option 2-2");
    } else if (selectedOption === "Meeting Halls") {
        addOption(hallSubtypes, "subOption3-1", "Sub Option 3-1");
        addOption(hallSubtypes, "subOption3-2", "Sub Option 3-2");
    }
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    today.setDate(today.getDate() + 1);

    var maxDate = new Date(today);
    maxDate.setDate(today.getDay() + MAX_VIEW_LIMIT - 1);

    var calendarDate = document.getElementById('calendar-date');
    calendarDate.setAttribute('min', today.toISOString().split('T')[0]);
    calendarDate.setAttribute('max', maxDate.toISOString().split('T')[0]);
});
