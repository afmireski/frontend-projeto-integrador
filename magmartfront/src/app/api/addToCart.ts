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
        console.log(response.status)
        if (response.status==201) {
            console.log('Item adicionado ao carrinho:');
            return { success: true};
        } else {
            const errorData = await response.json();
            console.error('Erro ao adicionar item ao carrinho:', errorData);
            return { success: false, error: errorData };
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        return { success: false, error: error.message };
    }
}

export default addToCart;
