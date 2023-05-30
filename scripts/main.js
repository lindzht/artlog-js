
// const requirejs = require('requirejs');
// require("dotenv").config();
//Need to dig into above

const hello = document.querySelector("header > h1");
const weatherContainer = document.querySelector(".weather");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

const fetchWeather = () => {
    fetch(`https://flexweather.com/api/now?lat=40.650002&lon=-73.949997&units=imperial`)
    .then(res => res.json())
    .then(data => {
        const weatherSplit = data.condition.split("_")
        const weatherCondition = weatherSplit.join(" ")

        h2.innerText = data.temperature_current;
        h3.innerHTML = weatherCondition

        if (weatherCondition) {
            weatherContainer.innerText = ""
            weatherContainer.appendChild(h2);
            weatherContainer.appendChild(h3);
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

const loading = () => {
    h2.innerText = "Loading..."
    weatherContainer.append(h2);
};

loading();
changeHeader();
fetchWeather();