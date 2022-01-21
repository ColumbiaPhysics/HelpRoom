function init() {
	let time = document.getElementById("time")
	let ta = document.getElementById("ta")
	let zoom = document.getElementById("zoom")

	let date = new Date((new Date()).toLocaleString("en-US", {timeZone: "America/New_York"}))
	let day = date.getDay() - 1
	let hour = date.getHours() - 12

	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
	let dayCode = ["m", "t", "w", "r", "f"]

	if((day >= 0 && day <=4 && hour >= 0 && hour <= 8)) {
		time.innerText = "Current Time Slot: " + days[day] + " " + hour + ":00-" + (hour+1) + ":00 PM"
		slot = document.getElementById(dayCode[day] + hour)
		if(slot.childNodes.length == 0) {
			ta.innerText = "No TA Assigned to this Time Slot"
			zoom.innerText = ""
		} else {
			ta.innerText = "Current TA: " + slot.innerText
			let link = document.createElement("a")
			link.appendChild(document.createTextNode(" " + 
				"https://columbiauniversity.zoom.us/j/2255695281?pwd=L3c3MGRkZTJ4ZHFGckpaaTZKT1IxUT09"))
			link.href = "https://columbiauniversity.zoom.us/j/2255695281?pwd=L3c3MGRkZTJ4ZHFGckpaaTZKT1IxUT09"
			zoom.appendChild(link)
		}
	} else {
		time.innerText = "Help Room Currently Closed"
		ta.innerText = ""
		zoom.innerText = ""
	}
}
