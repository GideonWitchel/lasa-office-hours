// Functions related to selecting individual teachers in the menu.

function toolbarToggle(toToggle){
    if(toToggle.is(":hidden")) {
        // Turn on the toggled screen and turn off everything else
        toToggle.show()
        $("#class-info-1").hide()
        $("#class-info-2").hide()
        $(".week").hide()

        //Update Button
        let button = $("#toggle-toolbar-classes")
        button.text("Back to Main")
        button.css("background-color", "#212529")
        // Update footer color
        $("#true-footer").css("background-color", "dimgray")
    }
    else {
        // Turn off the toggled screen and turn on everything else
        toToggle.hide()
        $("#class-info-1").show()
        $("#class-info-2").show()
        $(".week").show()

        //Update Button
        let button = $("#toggle-toolbar-classes")
        button.text("Toggle Specific Teachers")
        button.css("background-color", "dimgray")
        // Update footer color
        $("#true-footer").css("background-color", "#212529")
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
