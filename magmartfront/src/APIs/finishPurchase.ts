import axios from 'axios';

async function FinishPurchase() {
    return Promise.resolve(axios.post(`${process.env.API_URL}/purchases/finish`,{
        "user_id": "e0353a92-d5b2-4ae7-af00-b9947eb72ea6",
        "cart_id": "10c9f5f8-26de-4b3e-a977-685f416503e1",
        "payment_method_id": "8c75baa8-ac41-4bff-a8a0-89c777ecde27"
    }))
    .then(response => {
        if(response.status.toString() == '200'){
            console.log('Compra realizada com sucesso:', response.data);
            return response.data;
        } 
        return response.data;
    })
    .catch(error => {
        console.error('Erro ao realizar a compra:', error);
        throw('error');
    });
}

export default FinishPurchase;
