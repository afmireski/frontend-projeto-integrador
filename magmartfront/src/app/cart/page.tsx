// ./src/app/cart/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import "@/app/globals.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import getUserCart, { CartData} from '@/APIs/getUserCart';
import CardCarrinho from '@/components/CardCarrinho';

function Carrinho() {
    const [cartData, setCartData] = useState<CartData | null>(null);
    const router = useRouter();

    const redirectToProductPage = (parameter: string) => {
        router.push({
            pathname: '/product',
            query: { parameter },
        });
    };

    useEffect(() => {
        async function fetchCartData() {
            try {
                const data = await getUserCart("e0353a92-d5b2-4ae7-af00-b9947eb72ea6");
                setCartData(data);
                console.log(data);
            } catch (error) {
                console.error('Erro ao buscar dados do carrinho', error);
            }
        }

        fetchCartData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex flex-row min-h-screen justify-center gap-4 p-8 flex-wrap">
                <div className="flex flex-row w-[60%] rounded-md shadow-2xl justify-center gap-4 p-8 flex-wrap overflow-hidden">
                    {cartData?.items.map((item: CartItem) => (
                        <CardCarrinho key={item.id} produto={item.product} />
                    ))}
                </div>
                <div className="flex flex-row w-[30%] h-1/2 rounded-md shadow-2xl gap-4 p-8 flex-wrap overflow-hidden">
                    <div className="flex flex-row w-full h-1/3 rounded overflow-hidden shadow-xl">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">
                                {`Subtotal (${cartData?.items.length || 0} produtos) R$${cartData?.totalPrice || 0}`}
                            </div>
                            <button className='bg-orange-600 w-full p-2 rounded-md'>
                                Fechar pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Carrinho;
