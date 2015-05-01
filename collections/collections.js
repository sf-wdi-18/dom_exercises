window.addEventListener("load", function (){
   	//Part 1
    var getLi = document.getElementsByTagName("li");

    for (i=0; i<(getLi.length); i++){
    	getLi[i].style.borderBottom = "2px solid black";
    }

    //Part 2
    var getDataTypeClass = document.getElementsByClassName("datatype");

    for (i=0; i<getDataTypeClass.length; i++) {
    	getDataTypeClass[i].style.color = "red";
    }

    //Part 3
    var getClassFunction = document.querySelectorAll(".function");

    for (i=0; i<getClassFunction.length; i++) {
    	getClassFunction[i].style.color = "blue";
    }
});

//Question 1: What are the differences between .getElementById, .getElementsByClassName, .getElementsByTagName, and querySelectorAll?
//Answer: .getElementById searches for only HTML tags with the given id, .getElementsByClassName only searches for HTML elements with the given class, .getElementsByTagName searches only for the tag name, and .querySelectorAll can search for all three, but classes and ids must be specified with a . or # respectively.

//Question 2: How did you loop over the lists of elements?
//Answer: I first declared a variable to find all of the elements I was looking for, which saved those in an array.
//   		  I then create a for loop that iterated from 0, until the end of the var.length, and set the element[i] to the desired style.
