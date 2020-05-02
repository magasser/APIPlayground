import { NASA_API_KEY } from "../config";

export let getAPODFromApi = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?hd=1&api_key=${NASA_API_KEY}`)
        .then(resp => resp.json());
};

export let getAPODOfDateFromApi = (date) => {
    return fetch(`https://api.nasa.gov/planetary/apod?hd=1&date=${date}&api_key=${NASA_API_KEY}`)
        .then(resp => resp.json());
};