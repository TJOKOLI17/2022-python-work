/* WEATHER APP */

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "29b55d863f76b20de8a9401468edc79f";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); //pressing a submit button refreshes the page by default - we need to prevent it.
    getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 35%)";
    setTimeout(() => {
        getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 40%)";
    }, 200);
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }catch(error){
            console.error(error);
            displayError(error)
        }
    }else{
        displayError("Please enter a city")
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }else{
        return await response.json();
    }
}

async function displayWeatherInfo(data){
    console.log(data);
    const {name: city, 
           main: {temp, humidity}, 
           weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay  = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `${(temp -  273.15).toFixed(1)}°C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID){
    switch(true){
        case(weatherID >= 200 && weatherID < 300):
            return "⛈️";
        case(weatherID >= 300 && weatherID < 400):
            return "🌧️";
        case(weatherID >= 500 && weatherID < 500):
            return "🌧️";
        case(weatherID >= 600 && weatherID < 700):
            return "❄️";
        case(weatherID >= 700 && weatherID < 800):
            return "🌫️";
        case(weatherID === 800):
            return "☀️";
        case(weatherID >= 801 && weatherID < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

const getWeatherBtn = document.getElementById("getWeatherBtn");
getWeatherBtn.addEventListener("mouseover", () => {
    getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 35%)";
});

getWeatherBtn.addEventListener("mouseout", () => {
    getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 40%)";
});
document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        event.preventDefault();
        getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 35%)";
        setTimeout(() => {
            getWeatherBtn.style.backgroundColor = "hsl(180, 100%, 40%)";
        }, 200);
        getWeatherBtn.click();
    }
});
