const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const randBtn = document.getElementById("randBtn");
const min = 1;
const max = 6;

let randNum1;
let randNum2;
let randNum3;

randBtn.onclick = function(){
    randNum1 = Math.floor(Math.random() * max) + min;
    randNum2 = Math.floor(Math.random() * max ) + min;
    randNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randNum1;
    myLabel2.textContent = randNum2;
    myLabel3.textContent = randNum3;
}