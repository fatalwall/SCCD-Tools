function CreateButton() {
	if (document.getElementById("mxb2c5b3bc").value != "DRAFT"
		&& document.getElementById("mxb2c5b3bc").value != "COMP"
		&& document.getElementById("mxb2c5b3bc").value != "CLOSE"
		&& document.getElementById("mxb2c5b3bc").value != "CAN"
		&& document.getElementById("mxb2c5b3bc").value != "REJECTED"
		&& document.getElementById("mxb2c5b3bc").value != "FAIL"
		) {
		var SCCD = document.getElementById("mx22d674a4_holder");
		var UI = SCCD.getElementsByTagName("ul")[0]

		
		var SendToCalendarLI = document.createElement("li");
		SendToCalendarLI.setAttribute("role", "presentation");
		SendToCalendarLI.setAttribute("ctype", "toolbarbutton");

		var SendToCalendarA = document.createElement("a");
		SendToCalendarA.setAttribute("role", "button");
		SendToCalendarA.setAttribute("ctype", "toolbarbutton");
		SendToCalendarA.setAttribute("href", "javascript:sendEvent('SendToCalendar','SendToCalendar','')");
		SendToCalendarA.setAttribute("onkeydown", "itemAKey(event,this)");
		SendToCalendarA.setAttribute("onfocus", "appendClass(this,'onhover')");
		SendToCalendarA.setAttribute("onblur", "removeClass(this,'onhover')");
		SendToCalendarA.setAttribute("class", "on");

		var SendToCalendarButton = document.createElement("img");
		SendToCalendarButton.setAttribute("src", chrome.extension.getURL("button.png"));
		SendToCalendarButton.setAttribute("alt", "Send to Calendar");
		SendToCalendarButton.setAttribute("role", "presentation");
		SendToCalendarButton.setAttribute("height", "22");
		SendToCalendarButton.setAttribute("width", "22");
		SendToCalendarButton.addEventListener("click", SendToCalendar, false);

		//Add elements
		SendToCalendarA.appendChild(SendToCalendarButton);
		SendToCalendarLI.appendChild(SendToCalendarA);
		UI.appendChild(SendToCalendarLI);
	}
}

function SendToCalendar(e) {
	       /**
         * Add event to the calendar
         * @param  {string} subject     Subject/Title of event
         * @param  {string} description Description of event
         * @param  {string} location    Location of event
         * @param  {string} begin       Beginning date of event
         * @param  {string} stop        Ending date of event
		 * @param  {String} showAs		How the event should show in the calandar FREE BUSY
		 * @param  {String} email
         * @param  {number} before      Amount of time before event to trigger alarm
         * @param  {string} unit        Unit of time for alarm trigger
         */
	chrome.storage.sync.get(
		['showAS', 'reminderTime', 'reminderUnit', 'reminderEnabled', 'email'], 
		function(items) {
			if (typeof items.showAS === 'undefined'){
				items.showAS = 'FREE';
			}
			if (typeof items.reminderTime === 'undefined'){
				items.reminderTime = 15;
			}
			if (typeof items.reminderUnit === 'undefined'){
				items.reminderUnit = 'M';
			}
			if (typeof items.reminderEnabled === 'undefined'){
				items.reminderEnabled = true;
			}
			

			
			var cal = ics();
			if (items.reminderEnabled == true) {
				cal.addEvent(document.getElementById('mx9d44d398').value + " - " + document.getElementById('mxe9abc5a').value
				, '<div><a href=https://129.39.231.177/maximo/ui/?event=loadapp&value=change&uniqueid=' + document.location.toString().split('uniqueid=')[1].split('&')[0] + '>SCCD Direct Link</a></div>' + document.getElementById('mxc0073963').contentDocument.body.innerHTML
				, ''
				, document.getElementById("mx6406e617").value
				, document.getElementById("mx38a35846").value
				, items.showAS
				, items.email
				, items.reminderTime
				, items.reminderUnit);
			} else {
				cal.addEvent(document.getElementById('mx9d44d398').value + " - " + document.getElementById('mxe9abc5a').value
				, '<div><a href=https://129.39.231.177/maximo/ui/?event=loadapp&value=change&uniqueid=' + document.location.toString().split('uniqueid=')[1].split('&')[0] + '>SCCD Direct Link</a></div>' + document.getElementById('mxc0073963').contentDocument.body.innerHTML
				, ''
				, document.getElementById("mx6406e617").value
				, document.getElementById("mx38a35846").value
				, items.showAS
				, 'JohnSnow@TheWall.com'
				);
			}
			cal.download(document.getElementById('mx9d44d398').value);
		}
	);
}

CreateButton();


