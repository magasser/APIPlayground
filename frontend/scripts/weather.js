import { getCurrentWeatherByCityFromApi } from "../services/owm-service"
import { getIconUrl } from "../services/owm-service";

let icon;
let location;
let temp;
let humidity;
let wind;
let description;

document.addEventListener("DOMContentLoaded", () => {
    icon = document.querySelector('#icon');
    location = document.querySelector('#location');
    temp = document.querySelector('#temp');
    humidity = document.querySelector('#humidity');
    wind = document.querySelector('#wind');
    description = document.querySelector('#description');

    getCurrentWeatherByCityFromApi('bern')
        .then(data => {
            setData(data);
        });

});

let setData = (data) => {
    icon.src = getIconUrl(data.weather[0].icon);
    location.innterHTML = data.main.name;
    temp.innerHTML = `${Math.round((Number(data.main.temp) - 273.15) * 100) / 100} °C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${Number(data.wind.speed) * 3.6} km/h`;
    description.innerHTML = data.weather[0].description;
};