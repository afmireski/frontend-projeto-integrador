import axios from 'axios';

function removeItemFromCart( cart_id: string, item_id: string ) {
    console.log("Deleting ", cart_id, item_id);
    

    return Promise.resolve(axios.delete(`http://localhost:3001/carts/${cart_id}/items/${item_id}`))
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