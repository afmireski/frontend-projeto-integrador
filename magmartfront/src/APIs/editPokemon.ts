import axios from 'axios';
import {PokemonData} from '@/components/myTypes/PokemonTypes';
function EditPokemon( id: string ) {
    return Promise.resolve(axios.patch<PokemonData>(`http://localhost:3001/pokemon/${id}/update`))
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

export default EditPokemon;