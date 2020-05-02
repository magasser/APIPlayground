import { API_BASE_URL } from "../config"

export let createAPOD = (apod) => {
    let jsonApod = JSON.stringify(apod);

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    
    return fetch(`${API_BASE_URL}/nasa/apod`, { method: 'POST', mode: 'cors', headers: header, body: jsonApod })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Could not find APOD");
            }
        });
};

export let getAPODByDateFromDb = (date) => {
    return fetch(`${API_BASE_URL}/nasa/apods/${date}`, { method: 'GET', mode: 'cors' })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Invalid response.")
            }
        });
};