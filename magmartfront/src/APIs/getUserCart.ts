import axios from 'axios';

export type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type CartData = {
  id: string;
  user_id: string;
  is_active: boolean;
  expires_in: string;
  total: number;
  items: Item[];
};

function GetUserCart(userId: string) {
  return axios.get<CartData>(`http://localhost:3001/users/${userId}/cart`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Failed to fetch cart');
    });
}

export default GetUserCart;
