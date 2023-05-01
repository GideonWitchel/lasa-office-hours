// Functions related to drawing and maintaining classes and class info on the main page

function drawClasses() {
    for (let day = 0; day < 5; day++) {
        for (let time = 0; time < 3; time++){
            for(let classNum = 0; classNum < data[time][day].length; classNum++) {
                populateClass(day, time, data[time][day][classNum])
            }
        }
    }
}

function populateClass(day, time, classNum) {
    let idToFill = ""
    switch(day) {
        case 0:
            idToFill += "m"
            break
        case 1:
            idToFill += "t"
            break
        case 2:
            idToFill += "w"
            break
        case 3:
            idToFill += "th"
            break
        case 4:
            idToFill += "f"
            break
        default:
            return
    }
    idToFill += "-"
    switch(time) {
        case 0:
            idToFill += "m"
            break
        case 1:
            idToFill += "l"
            break
        case 2:
            idToFill += "a"
            break
        default:
            return
    }
    let buttonData = classes[classNum][0]
    let folder = document.getElementById(idToFill).firstElementChild
    let newElement = document.createElement("button")
    newElement.type = "button"
    newElement.classList.add("btn")
    let cat = getCategory (classes[classNum][2])
    newElement.classList.add("class-"+ cat)
    newElement.classList.add("class-"+ cat +"-color")
    newElement.classList.add("btn-dark")
    newElement.classList.add("class-"+classNum)
    newElement.innerText = buttonData
    newElement.addEventListener("click", function() {
        setClassData(classNum)
    });
    folder.appendChild(newElement)
}

function setClassData(classNum) {
    let classData = classes[classNum]
    document.getElementById("info-name").innerText = classData[0]
    document.getElementById("info-email").innerText = classData[1]
    document.getElementById("info-class").innerText = classData[2]
    document.getElementById("info-room").innerText = classData[3]
    document.getElementById("info-time-1").innerText = classData[4]
    document.getElementById("info-time-2").innerText = classData[5]
    document.getElementById("info-time-3").innerText = classData[6]
}