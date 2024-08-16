import axios from 'axios';
import Cookies from 'js-cookie';

async function FinishPurchase(user_id: string, cart_id: string, payment_method_id: string) {
    const token = Cookies.get('authToken');

    try {
        const response = await axios.post(
            `${process.env.API_URL}/purchases/finish`, // URL da API
            { // Dados do corpo da requisição
                user_id: user_id,
                cart_id: cart_id,
                payment_method_id: payment_method_id
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
