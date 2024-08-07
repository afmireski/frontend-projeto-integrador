import axios from 'axios';

function DeletePokemon( id: string ) {
    return Promise.resolve(axios.delete(`${process.env.API_URL}/pokemon/${id}/del`))
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

export default DeletePokemon;