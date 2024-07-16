//CACULATOR PROGRAM

const display = document.getElementById("display");
let beenCalculated = false;
const operators = ["+", "-", "/", "x", "*"]


/**
 * appends user's input to the display window.
 */
function appendToDisply(input){
    if(beenCalculated){
        if(!operators.includes(input)){
            clearDisplay();
        }
        beenCalculated = false;
    }
    display.value += input;

}


/**
 * Calculates the input in the display.
 */
function calculate(){
    if(display.value.includes("x")){
        display.value = display.value.replaceAll("x", "*")
    }

    try{
        if(String(eval(display.value)).length > 6){
            display.value = eval(display.value).toFixed(8);
        }else{
            display.value = eval(display.value)
        }
        beenCalculated = true;
    }catch(error){
        display.value = "Error";
    }

}

/**
 * Clears the text in the calculator display.
 */
function clearDisplay(){
    display.value = "";

}

