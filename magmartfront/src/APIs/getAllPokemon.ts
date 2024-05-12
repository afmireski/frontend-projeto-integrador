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
    console.log("called", process.env)
    return Promise.resolve(axios.get<PokemonData[]>(`${process.env.API_URL}/pokemon`))
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
