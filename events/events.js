window.addEventListener("load", function (){
// Part 1
	var clicker = document.querySelector("#clicker");

	clicker.addEventListener("click", function (event) {
		alert("You've been clicked!")
	});

// Part 2
	var mouser = document.querySelector("#mouser");

	mouser.addEventListener("mouseover", function (event) {
		mouser.style.backgroundColor = "blue";
	});
	mouser.addEventListener("mouseout", function (event) {
		mouser.style.backgroundColor = "green";
	});
// Part 3 / 4
	var submit = document.querySelector("#former");
	
	submit.addEventListener("submit", function (event) {
		event.preventDefault();
		alert(document.querySelector("input").value);
	});

// Part 5
	var ul = document.querySelector("ul");

	ul.addEventListener("click", function (event) {
		alert(event.target.innerHTML);
	});
});

// Question 1: What does event.preventDefault() do?
// Answer: event.preventDefault() prevents the default behavior from occurring when the action is taken. 
//         For example, when a form is submited the default behavior is to refresh the page. In this example, we prevented the page from reloading.

// Question 2: Why do we listen for the submit event on a <form> instead of listening for the click event on the submit button?
// Answer: The submit event occurs when a form is submitted, where as a click could occurr without the form being submitted.
//         In this example, we want to know when the entire form was submitted, and not just when the button was clicked.

// Question 3: What does the window's load event allow us to do?
// Answer: It prevents the rest of the Javascript from being loaded until the entire HTML file has loaded. 
//         Otherwise, the JS file would load first and would look for elements on the page that haven't loaded yet.


