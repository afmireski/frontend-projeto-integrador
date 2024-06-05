import axios from 'axios';
import { CartData } from '@/components/myTypes/CartTypes';



function GetUserCart(userId: string) {
  return axios.get<CartData>(`http://localhost:3001/users/${userId}/cart`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Failed to fetch cart');
    });
}

export default GetUserCart;
