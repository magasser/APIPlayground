import { OWM_API_KEY } from "../config"

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ICON_URL = 'https://openweathermap.org/img/wn/';

export let getCurrentWeatherByCityFromApi = (city) => {
    return fetch(`${API_URL}?q=${city}&${OWM_API_KEY}`)
        .then(resp => resp.json());
};

export let getIconUrl = (icon) => {
    return `${ICON_URL}${icon}.png`;
};