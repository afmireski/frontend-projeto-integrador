import axios from 'axios';
import { PokemonData } from '@/components/myTypes/PokemonTypes';

function GetAllPokemon() {
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
