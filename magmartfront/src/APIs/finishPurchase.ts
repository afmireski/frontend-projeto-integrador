import axios from 'axios';
import Cookies from 'js-cookie';

async function FinishPurchase() {
    const token = Cookies.get('authToken');

    try {
        const response = await axios.post(
            `${process.env.API_URL}/purchases/finish`, // URL da API
            { // Dados do corpo da requisição
                "user_id": "e0353a92-d5b2-4ae7-af00-b9947eb72ea6",
                "cart_id": "10c9f5f8-26de-4b3e-a977-685f416503e1",
                "payment_method_id": "8c75baa8-ac41-4bff-a8a0-89c777ecde27"
            },
            { // Cabeçalhos
                headers: {
                    'Authorization': `${token}`, // Adiciona o token ao cabeçalho
                    'Content-Type': 'application/json',
                }
            }
        );

        if (response.status === 200) {
            console.log('Compra realizada com sucesso:', response.data);
            return response.data;
        } else {
            // Retorna dados mesmo em caso de status diferente de 200
            return response.data;
        }
    } catch (error) {
        console.error('Erro ao realizar a compra:', error);
        throw error; // Lança o erro original para tratamento adequado
    }
}

export default FinishPurchase;
