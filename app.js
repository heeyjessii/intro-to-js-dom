console.log("Sanity check"); 

//Finding HTML Elements
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement); 

// console.log(document.getElementsByTagName("div"));
var tagName = document.getElementsByTagName("div");
console.log(tagName);

// console.log(document.getElementsByClassName("use-class-method"));
var classElement = document.getElementsByClassName("use-class-method");
console.log(classElement);

//Changing HTML Element
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed";

console.log(classElement[1].innerHTML);