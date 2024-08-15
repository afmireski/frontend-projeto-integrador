import axios from 'axios';
// import { PokemonData } from '@/components/myTypes/PokemonTypes';

function GetPurchases(userToken: string) {
    return Promise.resolve(axios.get<any[]>(`${process.env.API_URL}/purchases`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${userToken}`
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

export default GetPurchases;
