// JavaScript Document
console.log("test");

/* zoek shuifbalk */

var form = document.querySelector('form');
var schuifbalk = document.querySelector("main > nav");
var balkOpen = false;
var body = document.querySelector("body");
form.onclick = uitSchuiven;

function uitSchuiven() {
    if(balkOpen){
        schuifbalk.classList.remove("klap")
        schuifbalk.classList.add("terug");
        console.log("schuiven");
}else{
    schuifbalk.classList.add("klap");
    schuifbalk.classList.remove("terug")
    console.log("schuiven terug");    
} balkOpen = !balkOpen;
};






var shareKnop = document.querySelector(".page2 button:nth-of-type(1)");
var editKnop = document.querySelector(".page2 button:nth-of-type(2)");


shareKnop.onclick = veranderKnop1; 
editKnop.onclick = veranderKnop2;

function veranderKnop1() {
    shareKnop.classList.toggle("geklikt")
}

function veranderKnop2() {
    editKnop.classList.toggle("geklikt")
}


/*
var createdTabs = document.querySelector(".page2 section a:nth-of-type(1)");
var savedTabs = document.querySelector(".page2 section a:nth-of-type(2)");

createdTabs.onclick = selectCreated;
savedTabs.onclick = selectSaved;

savedTabs = savedTabs.classList.add("active")

function selectCreated(){
    savedTabs.classList.remove("geselecteerd");
    createdTabs.classList.add("geselecteerd");
    console.log("createKnop");
}

function selectSaved(){
    savedTabs.classList.add("geselecteerd");
    createdTabs.classList.remove("geselecteerd");
    console.log("saveKnop");
}
*/



/* saved en created tabs */

var createdTabs = document.querySelector(".page2 section a:nth-of-type(1)");
var savedTabs = document.querySelector(".page2 section a:nth-of-type(2)");



createdTabs.onclick = verander2;
savedTabs.onclick = verander;

savedTabs.classList.add("geselecteerd");


var filterPlus = document.querySelector(".page2 section div:nth-of-type(2)");
var main = document.querySelector(".page2 main");
var createSection = document.querySelector(".page2 section:has(h6):has(button)");

createSection.classList.add("onzichtbaar");

function verander(){
    createdTabs.classList.remove("geselecteerd");
   savedTabs.classList.add("geselecteerd");
   main.classList.remove("onzichtbaar");
   filterPlus.classList.remove("onzichtbaar");
   createSection.classList.add("onzichtbaar");
}

function verander2(){
    savedTabs.classList.remove("geselecteerd");
    createdTabs.classList.add("geselecteerd");
    main.classList.add("onzichtbaar");
    filterPlus.classList.add("onzichtbaar");
    createSection.classList.add("zichtbaar");
    createSection.classList.remove("onzichtbaar");
}

