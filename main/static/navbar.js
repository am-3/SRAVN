const MAX_VIEW_LIMIT = 90; // Including today

var Classrooms = ['Sub Option 1-1', 'Sub Option 1-2'];
var Meeting_Halls = ['Sub Option 2-1', 'Sub Option 2-2'];
var Seminar_Halls = ['Sub Option 3-1', 'Sub Option 3-2'];

function updateSecondDropdown() {
    var hallTypes = document.getElementById("hall-types");
    var hallSubtypes = document.getElementById("hall-subtypes");
    var selectedOption = hallTypes.options[hallTypes.selectedIndex].value;

    var defaultOption = hallTypes.options[0];
    defaultOption.disabled = true;

    hallSubtypes.disabled = false;

    // Clear previous options
    hallSubtypes.innerHTML = "";

    // Add options based on selected option
    if (selectedOption === "Classrooms") {
        addOption(hallSubtypes, "", "Select Classrooms", true);
        var defOpt = hallSubtypes.options[0];
        defOpt.disabled = true;

        for (var i = 0; i < Classrooms.length; i++){
            addOption(hallSubtypes, Classrooms[i], Classrooms[i], false);
        }

    } else if (selectedOption === "Seminar Halls") {
        addOption(hallSubtypes, "", "Select Seminar Halls", true);
        var defOpt = hallSubtypes.options[0];
        defOpt.disabled = true;

        for (var i = 0; i < Seminar_Halls.length; i++){
            addOption(hallSubtypes, Seminar_Halls[i], Seminar_Halls[i], false);
        }

    } else if (selectedOption === "Meeting Halls") {
        addOption(hallSubtypes, "", "Select Meeting Halls", true);
        var defOpt = hallSubtypes.options[0];
        defOpt.disabled = true;

        for (var i = 0; i < Meeting_Halls.length; i++){
            addOption(hallSubtypes, Meeting_Halls[i], Meeting_Halls[i], false);
        }

    }
}

function addOption(selectElement, value, text, flag) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    option.selected = flag;
    selectElement.add(option);
}

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    today.setDate(today.getDate());

    var maxDate = new Date(today);
    maxDate.setDate(today.getDay() + MAX_VIEW_LIMIT - 1);

    var calendarDate = document.getElementById('calendar-date');
    calendarDate.setAttribute('min', today.toISOString().split('T')[0]);
    calendarDate.setAttribute('max', maxDate.toISOString().split('T')[0]);

    var hallSubtypes = document.getElementById("hall-subtypes");
    addOption(hallSubtypes, "", "Select Hall Subtype", true);
});

// Function to submit the form data
function submitForm() {
    var formData = new FormData();
    formData.append('hall_types', document.getElementById('hall-types').value);
    formData.append('hall_subtypes', document.getElementById('hall-subtypes').value);
    formData.append('date_input', document.getElementById('calendar-date').value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/your_backend_url/');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful response (if needed)
        }
    };
    xhr.send(formData);
}

// Event listener for dropdown change
document.getElementById('hall-types').addEventListener('change', submitForm);

// Event listener for date input change
document.getElementById('hall-subtypes').addEventListener('change', submitForm);
document.getElementById('calendar-date').addEventListener('change', submitForm);