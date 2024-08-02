import axios from 'axios';
import { CartData } from '@/components/myTypes/CartType';



function GetUserCart(userId: string) {
  return axios.get<CartData>(`${process.env.API_URL}/users/${userId}/cart`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Failed to fetch cart');
    });
}

export default GetUserCart;
