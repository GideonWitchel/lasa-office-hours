// Functions related to selecting individual teachers in the menu.

function toolbarToggle(toToggle){
    if(toToggle.is(":hidden")) {
        // Turn on the toggled screen and turn off everything else
        toToggle.show()
        $("#class-info-1").hide()
        $("#class-info-2").hide()
        $(".week").hide()
        // Update Button Text
        document.getElementById("toggle-toolbar-classes").innerText = "Back to Main"
    }
    else {
        // Turn off the toggled screen and turn on everything else
        toToggle.hide()
        $("#class-info-1").show()
        $("#class-info-2").show()
        $(".week").show()
        // Update Button Text
        document.getElementById("toggle-toolbar-classes").innerText = "Toggle Specific Teachers"
    }
}

function initImportDropdown() {
    let container = document.getElementById("import-teacher-dropdown")
    for (let i = 0; i < classes.length; i++){
        let newOption = document.createElement("option")
        newOption.innerText = classes[i][0]
        container.appendChild(newOption)
    }
}

function initImportButtons() {
    let enableButton = document.getElementById("enable-specific-class-button")
    let disableButton = document.getElementById("disable-specific-class-button")
    enableButton.addEventListener("click", function() {
       updateSelectedClass(true)
    });
    disableButton.addEventListener("click", function() {
        updateSelectedClass(false)
    });
}

function updateSelectedClass(enabled){
    let dropdown = document.getElementById("import-teacher-dropdown")
    let currentClassIndex = dropdown.selectedIndex
    setClass(currentClassIndex, enabled)
}
