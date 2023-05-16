
// const requirejs = require('requirejs');
// require("dotenv").config();

const hello = document.querySelector("header > h1");
const weatherContainer = document.querySelector(".weather");

const fetchWeather = () => {
    fetch(`https://flexweather.com/api/now?lat=40.650002&lon=-73.949997&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.temperature_current);
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const weatherSplit = data.condition.split("_")
        const weatherCondition = weatherSplit.join(" ")
        h2.innerText = data.temperature_current;
        h3.innerHTML = weatherCondition
        weatherContainer.appendChild(h2);
        weatherContainer.appendChild(h3);
        console.log(weatherCondition);
        if (weatherCondition.includes("cloudy")) {
            weatherContainer.classList.remove("weather");
            weatherContainer.classList.add("cloudy");
            
        }
    })
}

const changeHeader = () => {
    hello.addEventListener("click", () => {
        if (hello.innerText === "Hello!") {
            hello.innerText = "Bye!";
        } else {
            hello.innerText = "Hello!";
        }
    })
};

changeHeader();
fetchWeather();