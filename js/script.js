// ---------------------------
//	 Form error states
// ---------------------------

var form = document.getElementById("feedbackForm");

form.addEventListener("blur", function( event ) {
	var e = event.target;

	// If blur was triggered by button, do nothing
	if (e.className == "required") {

		// Remove pre-existing error messages
		var error = e.parentNode.getElementsByClassName("error-msg");
		if (error.length > 0 && e.name != "select-choice") {
			e.parentNode.removeChild(error[0]);
		}
		
		// Create new message
		var msg = document.createElement("P");
		msg.className = "error-msg";
		var t;

		// Input is empty
		// Append error message to input field
		if (!e.value) {
			t = document.createTextNode("This field cannot be left blank.");  
			msg.appendChild(t); 
			e.parentNode.insertBefore(msg, e.nextSibling);
		} 

		// Invalid email
		// Append error message to email input field
		else if (e.type == "email" && !validateEmail(e.value)) {
			t = document.createTextNode("Please enter a valid email address.");
			msg.appendChild(t); 
			e.parentNode.insertBefore(msg, e.nextSibling);
		}
	}

}, true);


// Validate email address in form using regex
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
