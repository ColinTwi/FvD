// JavaScript Document
console.log("test");

/* zoek shuifbalk */
var zoekInput = document.querySelector('form input');
var schuifbalk = document.querySelector("body > section:first-of-type");
var balkOpen = false;
zoekInput.onfocus = uitSchuiven;
zoekInput.onblur = uitSchuiven;

function uitSchuiven() {
    if(balkOpen){
        schuifbalk.classList.toggle("uitklappen")
        schuifbalk.classList.toggle("inklappen");
        console.log("uitklappen");
}else{
    schuifbalk.classList.add("uitklappen");
    schuifbalk.classList.remove("inklappen")
    console.log("inklappen");    
} balkOpen = !balkOpen;
};


/* share edit knoppen */
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


/* saved en created tabs */
var createdTabs = document.querySelector(".page2 section:nth-of-type(2) a:nth-of-type(1)");
var savedTabs = document.querySelector(".page2 section:nth-of-type(2) a:nth-of-type(2)");

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

