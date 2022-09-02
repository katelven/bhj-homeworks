
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const signin = document.getElementById("signin");

window.onload = function() {
	
	if (localStorage.user_id === undefined) {
	    signin.className = "signin signin_active";
	} else {
	    welcome.className = "welcome welcome_active";
    	userId.textContent = localStorage.user_id;
	};
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
    let formData = new FormData(form);
	let request = new XMLHttpRequest();
	
    request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    request.send(formData);
	
	request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status == 200) {
	        let answerJSON = request.responseText;
		    let answerObject = JSON.parse(answerJSON);
		
		    if (answerObject.success === true) {
			    welcome.className = "welcome welcome_active";
			    localStorage.user_id = answerObject.user_id;
			    userId.textContent = localStorage.user_id;
			    signin.className = "signin";
			} else 
			    if (answerObject.success === false) {
			        alert("Неверные логин/пароль.");
		        };
	    };
        form.reset()
    };
});