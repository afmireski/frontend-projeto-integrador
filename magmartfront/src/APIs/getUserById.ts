import axios from 'axios';
import { UserData } from '@/components/myTypes/UserTypes';
import Cookies from 'js-cookie';

async function GetUserById(){
const token = Cookies.get('authToken');
    return Promise.resolve(axios.get<UserData>(`${process.env.API_URL}/users/profile`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`, // Adiciona o token ao cabeçalho
        },
      }))
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