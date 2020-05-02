
const API_URL = 'https://pokeapi.co/api/v2';

export let getPokemonByIdFromApi = (id) => {
    return fetch(`${API_URL}/pokemon/${id}`)
        .then(resp => resp.json());
};

export let getPokemonByNameFromApi = (name) => {
    return fetch(`${API_URL}/pokemon/${name}`)
        .then(resp => resp.json());
};