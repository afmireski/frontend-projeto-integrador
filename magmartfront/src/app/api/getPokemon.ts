import axios from 'axios';
import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { PokemonData } from '@/components/myTypes/PokemonTypes';


// const [modelsComponents, setModelsComponen   ts] = useState<JSX.Element>([]);

// ` çlaskdçkajsdlkjasd${variavel}`
async function GetPokemon( id: string ){

         //const [pokemonData, setPokemonDataList] = useState<PokemonData[]>();

    return Promise.resolve(axios.get<PokemonData>(`${process.env.API_URL}/pokemon/${id}`))
    .then(response => {
        if(response.status.toString() == '200'){
            return response.data;
        } 
        return response.data;
    })
    .catch(error => {
        throw('error')
    });
}

export default GetPokemon;
