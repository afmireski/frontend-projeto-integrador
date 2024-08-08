import axios from 'axios';
import Cookies from 'js-cookie';

function removeItemFromCart( cart_id: string, item_id: string ) {
    console.log("Deleting ", cart_id, item_id);
    const token = Cookies.get('authToken');
    

    return Promise.resolve(axios.delete(`${process.env.API_URL}/carts/${cart_id}/items/${item_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    }))
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

export default removeItemFromCart;