import axios from 'axios';

function DeleteUser( id: string ) {
    return Promise.resolve(axios.delete(`http://localhost:3001/users/${id}/del`))
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