// DICE ROLLER PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const rolls = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        images.push(`<img src="imgs/Dice-${roll}.png" alt="Dice-${roll}"></img>`)
    }

    diceResult.textContent = `dice: ${rolls.join(", ")}`;
    diceImages.innerHTML = images.join("");
}