import axios from 'axios';
import Cookies from 'js-cookie';
// import { PokemonData } from '@/components/myTypes/PokemonTypes';
import { PokedexData } from '@/components/myTypes/PodedexPokemonTypes';

function GetPokedex() {
    const token = Cookies.get('authToken');
    return Promise.resolve(axios.get<PokedexData[]>(`${process.env.API_URL}/pokedex`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    }))
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
        return [];
    })
    .catch((error) => {
        console.log(error);
        throw new Error;
    });
}

export default GetPokedex;