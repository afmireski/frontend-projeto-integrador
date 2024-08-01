import axios from 'axios';
import {UserData} from '@/components/myTypes/UserTypes';
function EditUser( id: string ) {
    return Promise.resolve(axios.patch<UserData>(`http://localhost:3001/users/${id}/update`))
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

export default EditUser;