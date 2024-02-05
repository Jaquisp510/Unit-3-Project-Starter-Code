/* Declare variables below to save the different sections (divs) of your story*/
let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let cimmarron = document.querySelector(".option-one");
let Juanacatlan = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let left = document.querySelector(".option-three");
let right = document.querySelector(".option-four");
let cow = document.querySelector(".option-one-a");
let horse = document.querySelector(".option-two-b");
let lallorona = document.querySelector(".option-two-end");
let babycow = document.querySelector(".cow");
let cowsfamily = document.querySelector(".family");
let laguna = document.querySelector(".laguna");

cimmarron.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
    title.style.display = "none";

};

Juanacatlan.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    Juanacatlan.style.display = "block";
    option2.style.display = "block";
};

left.onclick = function() {
    optionOne.style.display = "none";
    buttons.style.display = "none"; 
    lallorona.style.display = "block";
};

right.onclick = function() {
    optionOne.style.display = "none";
    opening.style.display = "none";
    babycow.style.display = "block";
};

cow.onclick = function() {
    option2.style.display = "none";
    opening.style.display = "none";
    cowsfamily.style.display = "block";
};
horse.onclick = function() {
    option2.style.display = "none";
    opening.style.display = "none";
    laguna.style.display = "block";
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/