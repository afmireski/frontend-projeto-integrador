import axios from 'axios';
import React,{ useState } from 'react';
import PropTypes from 'prop-types';

export type tier = {
    id: number;
    limit_experience: number;
    minimal_experience: number;
    name: string;
}

export type type = {
    id: string;
    name: string;
    reference_id: number;
}

export type PokemonData = {
    id: string;
    reference_id: number; 
    name: string;
    weight: number;
    height: number;
    image_url: string;
    experience: number;
    price: number;
    in_stock: number;
    tier: tier;
    types: type[];
}



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
