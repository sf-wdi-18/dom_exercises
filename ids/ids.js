document.getElementById("main-heading")

document.getElementById("main-heading").innerHTML = "fun dom party!";
"fun dom party!"

document.getElementById("diagram");

document.getElementById("diagram").style.height = "300px";

document.getElementById("diagram").src = "img/dom_basic.png";

//Question 1: Why do we use .innerHTML to change the heading but .setAttribute to change the diagram?
// We do this because we want to change the text inside of the HTML tags
// Where as we use .setAttribute to change an attribute that is contained in the HTML tag itself

//Question 2: What was different about the way we changed the style of the image from the way we changed its src?
// When we changed the style we are adjusting the CSS (inline) of the HTML element, where as when we used src we are changing the image file being shown instead

