function updateSecondDropdown() {
    var hallTypes = document.getElementById("hall-types");
    var hallSubtypes = document.getElementById("hall-subtypes");
    var selectedOption = hallTypes.options[hallTypes.selectedIndex].value;

    var defaultOption = hallTypes.options[0];
    defaultOption.disabled = true;

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
