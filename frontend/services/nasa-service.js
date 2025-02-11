import { NASA_API_KEY } from "../config";

const API_URL = 'https://api.nasa.gov/planetary/apod';

export let getAPODFromApi = () => {
    return fetch(`${API_URL}?hd=1&${NASA_API_KEY}`)
        .then(resp => resp.json());
};

export let getAPODOfDateFromApi = (date) => {
    return fetch(`${API_URL}?hd=1&date=${date}&${NASA_API_KEY}`)
        .then(resp => resp.json());
};