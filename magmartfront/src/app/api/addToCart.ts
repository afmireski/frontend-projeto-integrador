// cart.js
import Cookies from 'js-cookie';
// Função para adicionar um item ao carrinho
async function addToCart(userId, pokemonId, quantity) {
    try {
        const token = Cookies.get('authToken');
        const response = await fetch(`${process.env.API_URL}/cart/add-item`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                pokemon_id: pokemonId.toString(),
                quantity: parseInt(quantity),
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Item adicionado ao carrinho:', data);
        } else {
            const errorData = await response.json();
            console.error('Erro ao adicionar item ao carrinho:', errorData);
        }
        return response;
    } catch (error) {
        console.error('Erro de rede:', error);
    }
}

export default addToCart;