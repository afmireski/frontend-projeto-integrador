import axios from 'axios';
import { CartItem } from '@/components/myTypes/CartType';
import Cookies from 'js-cookie';

function EditCartItem(cart_id: string, item_id: string, quantity: number) {
    const token = Cookies.get('authToken');
    console.log('Token -> ', token);
    return axios.patch<CartItem>(`${process.env.API_URL}/carts/${cart_id}/items/${item_id}`, {
        "quantity": quantity
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`, // Adiciona o token ao cabeçalho
        },
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw ('error');
        });
}

export default EditCartItem;