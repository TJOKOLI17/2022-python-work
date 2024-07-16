/* EXCERCISE 1: COUNTER PROGRAM */

const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


decBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

incBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}



 

 