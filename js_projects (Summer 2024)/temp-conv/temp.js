/* TEMPERATURE CONVERSION PROGRAM */
    // <button type="button" onclick="convert()">submit</button> --> onlick in HTML will trigger javascript function
    
    const textBox = document.getElementById("textBox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");
    let temp;
    
    function convert(){
        temp = Number(textBox.value);
        if(toFahrenheit.checked){
            result.textContent = `${(temp * (9/5)) + 32}°F`;
        }else if(toCelsius.checked){
            result.textContent = `${(temp - 32) * (5/9)}°C`;
        }else{
            result.textContent = `Please select a unit`;
        }
    }