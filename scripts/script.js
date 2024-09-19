// JavaScript Document
console.log("test");

var shareKnop = document.querySelector(".profielKnoppen button:nth-of-type(1)");
var editKnop = document.querySelector(".profielKnoppen button:nth-of-type(2)");


shareKnop.onclick = veranderKnop1; 
editKnop.onclick = veranderKnop2;

function veranderKnop1() {
    shareKnop.classList.toggle("geklikt")
}

function veranderKnop2() {
    editKnop.classList.toggle("geklikt")
}
