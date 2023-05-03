// Functions related to checkboxes and sliders toggling class visibility

function initCheckboxes() {
    // Init category sliders
    for (let category = 0; category < categories.length; category++) {
        $("#checkbox-"+categories[category]).change(function() {
            setAllWholeCategory(this.checked, categories[category])
        });
    }

    // Init teacher checkboxes
    for (let i = 0; i < classes.length; i++) {
        let cat = getCategory (classes[i][2])
        if (cat === "unknown"){
            continue
        }
        let parentObj = document.getElementById("classes-"+cat)
        parentObj.appendChild(makeTeacherCheckbox(i))
    }
}

function setAllWholeCategory(state, category){
    for (let i = 0; i < classes.length; i++){
        if(category === getCategory(classes[i][2])) {
            // Set checkbox
            $("#class-checkbox-"+i).prop("checked", state)
            // Set class on main page
            setClass(i, state)
        }
    }
}

function makeTeacherCheckbox(i) {
    // i is the index of the class in the classes[] array

    // Initialize container
    let newElement = document.createElement("div")
    newElement.className = "form-check"

    // Initialize checkbox
    let newInput = document.createElement("input")
    newInput.className = "form-check-input"
    newInput.type = "checkbox"
    newInput.id = "class-checkbox-"+i

    // If the box was checked in the cookie, check the box.
    newInput.checked = toggled.has(i);

    newInput.addEventListener("change", function(e) {
        if (this.checked) {
            setClass(i, true)
        }
        else {
            setClass(i, false)
        }
    });
    newElement.appendChild(newInput)

    // Initialize label
    let newLabel = document.createElement("label")
    newLabel.className = "form-check-label"
    newLabel.htmlFor = "class-checkbox-"+i
    newLabel.innerText = classes[i][0]
    newElement.appendChild(newLabel)

    return newElement
}
