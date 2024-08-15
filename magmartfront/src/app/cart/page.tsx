"use client";
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import "@/app/globals.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartData, CartItem } from '@/components/myTypes/CartType';
import CardCarrinho from '@/components/CardCarrinho';
import Link from 'next/link';
import removeItemFromCart from '@/APIs/removeItemFromCart';
import FinishPurchase from '@/APIs/finishPurchase';
import GetUserCart from '../api/getUserCart';
import GetUserById from '@/APIs//getUserById';
import GetPaymentMethods from '@/APIs//GetPaymentMethods';
import Cookies from 'js-cookie';

function Carrinho() {
  const [cartData, setCartData] = useState<CartData | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [cartId, setCartId] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        // Obter ID do usuário
        const userResponse = await GetUserById();
        setUserId(userResponse.Id);

        // Obter dados do carrinho
        const cartResponse = await GetUserCart();
        setCartData(cartResponse);
        setCartId(cartResponse.id);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    fetchData();
  }, []);

  const handleShowPaymentOptions = () => {
    if (cartData && cartData.items.length > 0) {
      setShowPaymentOptions(true);
    } else {
      console.log("O carrinho está vazio. Não é possível finalizar a compra.");
    }
  };

  const handlePurchase = async () => {
    if ((paymentMethod!="") && (userId!="") && (cartId!=""))  {
      try {
        await FinishPurchase(userId,cartId,paymentMethod);
        setShowPaymentOptions(false); // Oculta as opções de pagamento após a finalização
        console.log("Compra finalizada com sucesso");
      } catch (error) {
        console.error('Erro ao finalizar a compra:', error);
      }
    } else {
      console.log("Dados necessários não encontrados.");
    }
  };

  const handleDelete = async (id: string, cart_id: string) => {
    console.log("deleting\n ", id);

    await removeItemFromCart(cart_id, id);
    await fetchCartData();

    console.log("Item deleted\n ", id);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row min-h-screen h-full justify-center gap-4 p-8 flex-wrap">
        <div className="flex flex-row min-h-screen h-full justify-center gap-4 p-8 flex-wrap">
          <div className="flex flex-row w-[60%] border h-full rounded-md shadow-2xl justify-center gap-4 p-2 flex-wrap overflow-hidden">
            {cartData?.items.map((item: CartItem) => (
              <div key={item.id} className="flex flex-row w-full h-1/3 rounded border overflow-hidden shadow-lg">
                <div className="flex flex-row items-center w-full h-full">
                  <a href={`/pokemon/${item.pokemon.id}`}>
                    <img className="w-[80%] h-[140%]" src={item.pokemon.image_url} alt={"Card 1"} />
                  </a>
                  <div className="px-6 py-4">
                    <label htmlFor="">Pokemon</label>
                    <div className="text-xl mb-2">{item.pokemon.name}</div>
                  </div>
                  <div className="px-6 py-4">
                    <label htmlFor="">Preço</label>
                    <div className="text-xl mb-2">R${item.price}</div>
                  </div>
                  <div className="px-6 py-4">
                    <label htmlFor="">Quantidade</label>
                    <div className="text-xl mb-2">{item.quantity}</div>
                  </div>
                </div>
                <div className='m-5'>
                  <button className="bg-red-600 w-6 h-6" onClick={() => handleDelete(item.id, item.cart_id)}>x</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row w-[30%] h-1/2 rounded-md shadow-2xl gap-4 p-8 flex-wrap overflow-hidden">
            <div className="flex flex-row w-full h-1/3 rounded overflow-hidden shadow-xl">
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">
                  {`Subtotal (${cartData?.items.length || 0} produtos) R$${cartData?.total || 0}`}
                </div>
                <button className='bg-orange-600 w-full p-2 rounded-md' onClick={handleShowPaymentOptions}>
                  Fechar pedido
                </button>
              </div>
            </div>
          </div>
        </div>

        {showPaymentOptions && ( // Renderiza o bloco de pagamento apenas se showPaymentOptions for true
          <div className="flex flex-row w-[90%] h-1/2 justify-center rounded-md shadow-2xl gap-4 p-8 flex-wrap overflow-hidden">
            <div className="flex flex-row justify-center w-[50%] h-1/3 rounded overflow-hidden shadow-xl">
              <div className="flex flex-col items-center justify-center px-6 ">
                <div>
                  <label htmlFor="">Escolha sua Forma de pagamento</label>
                  <select
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setPaymentMethod(e.target.value)} // Atualiza a forma de pagamento selecionada
                  >
                    <option value="">Selecione uma forma de pagamento</option>
                    <option value="cartao_credito">Cartão de crédito</option>
                    <option value="boleto">Boleto</option>
                    <option value="pix">Pix</option>
                  </select>
                </div>
                <button className='bg-orange-600 m-20 w-full p-2 rounded-md' onClick={handlePurchase}>
                  Finalizar pagamento
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Carrinho;
