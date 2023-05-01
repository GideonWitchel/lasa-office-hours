// Open SIS Frontline
// Navigate to the "Report Card" pane
// Run the script

// This does not load, store, or in any way affect permanent TEAMS data
// This functions entirely locally on your machine, not contacting any external servers
// This is only meant to make listing teachers easier

function getTeachers() {
	let teachers = new Set()
	let classIndex = 2

	// Arbitrary stop of 100 in case error catching fails
	while (classIndex < 100) {
		try {
			teacher = document.getElementById("r"+classIndex+"td2").firstElementChild.innerText
			teachers.add(teacher)
		}
		catch(err) {
			break
		}
		classIndex++
	}
	
	return teachers
}

async function displaySet(teachers){
	// Output in every way possible
	console.log(teachers)
	let teachersAsString = Array.from(teachers).join(";")
	document.body.innerHTML = (teachersAsString+"<br><br><br><br>Reload to bring back normal TEAMS.")
	await navigator.clipboard.writeText(teachersAsString);
}

displaySet(getTeachers())
