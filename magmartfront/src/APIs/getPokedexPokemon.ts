import axios from 'axios';
import Cookies from 'js-cookie';
// import { PokemonData } from '@/components/myTypes/PokemonTypes';
import { PokedexData } from '@/components/myTypes/PodedexPokemonTypes';

function GetPokedexPokemon(pok_id: string) {
    const token = Cookies.get('authToken');
    return axios.get<PokedexData>(`${process.env.API_URL}/pokedex/${pok_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
    .then(response => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
        throw new Error;
    });
}

export default GetPokedexPokemon;