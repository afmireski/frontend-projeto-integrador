// cart.js

// Função para adicionar um item ao carrinho
async function addToCart(userId, pokemonId, quantity) {
    try {
        const response = await fetch(`http://localhost:3001/users/${userId}/items/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
    } catch (error) {
        console.error('Erro de rede:', error);
    }
}

export default addToCart;