import axios from 'axios';
import { UserData } from '@/components/myTypes/UserTypes';

async function GetUserById( id: string ){
    return Promise.resolve(axios.get<UserData>(`${process.env.API_URL}/users/profile`))
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

export default GetUserById;