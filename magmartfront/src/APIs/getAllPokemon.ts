import axios from 'axios';

export type type = {
    id: string;
    name: string;
    reference_id: number;
}

export type PokemonData = {
    id: string;
    reference_id: number; 
    name: string;
    image_url: string;
    price: number;
    types: type[];
}

function GetAllPokemon() {
    return Promise.resolve(axios.get<PokemonData[]>('http://localhost:3001/pokemon'))
    .then(response => {
        if(response.status.toString() == '200'){
            return response.data;
        } 
        return response.data;
    })
    .catch(error => {
        throw('error');
    });
}

export default GetAllPokemon;
