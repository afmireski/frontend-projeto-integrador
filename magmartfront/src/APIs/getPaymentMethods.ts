import axios from 'axios';
import Cookies from 'js-cookie';

// Definindo o tipo PaymentMethod para tipagem dos dados retornados
export type PaymentMethod = {
    id: string;
    name: string;
};

async function GetPaymentMethods() {
    const token = Cookies.get('authToken');

    try {
        const response = await axios.get<PaymentMethod[]>(`${process.env.API_URL}/payments-methods`, {
            headers: {
                'Authorization': `${token}`, // Adiciona o token ao cabeçalho
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            // Trata outros status HTTP diferentes de 200
            console.error('Erro ao buscar métodos de pagamento:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar métodos de pagamento:', error);
        throw error; // Lança o erro para tratamento adequado
    }
}

export default GetPaymentMethods;
