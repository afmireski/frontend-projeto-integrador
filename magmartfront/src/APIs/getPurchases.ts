import axios from 'axios';
// import { PokemonData } from '@/components/myTypes/PokemonTypes';

function GetPurchases(userId: string) {
    return Promise.resolve(axios.get<any[]>(`http://localhost:3000/users/${userId}/purchases`))
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
