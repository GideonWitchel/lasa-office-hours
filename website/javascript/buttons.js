// Functions related to checkboxes and sliders toggling class visibility

function initCheckboxes() {
    // Init category sliders
    let categories = ["socialstudies", "finearts", "english", "science", "cte", "math", "lote"]
    for (let category = 0; category < categories.length; category++) {
        $("#checkbox-"+categories[category]).change(function() {
            // This is split into 2 categories instead of using .toggle() because
            // every checkbox needs to be standardized, regardless of current state.
            if (this.checked){
                // Enable all buttons
                $(".class-"+categories[category]).show()
                // Enable all teacher specific buttons
                for (let i = 0; i < classes.length; i++){
                    if(categories[category] === getCategory(classes[i][2])) {
                        $("#class-checkbox-"+i).prop("checked", true)
                    }
                }
            }
            else {
                // Disable all buttons
                $(".class-"+categories[category]).hide()
                // Disable all teacher specific buttons
                for (let i = 0; i < classes.length; i++){
                    if(categories[category] === getCategory(classes[i][2])) {
                        $("#class-checkbox-"+i).prop("checked", false)
                    }
                }
            }
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
    newInput.checked = true
    newInput.addEventListener("change", function(e) {
        if (this.checked) {
            // Enable this class in the main view
            $(".class-"+i).show()
        }
        else {
            // Disable this class in the main view
            $(".class-"+i).hide()
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
