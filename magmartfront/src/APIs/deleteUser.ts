import axios from 'axios';

function DeleteUser( id: string ) {
    return Promise.resolve(axios.delete(`${process.env.API_URL}/users/del`))
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

export default DeleteUser;