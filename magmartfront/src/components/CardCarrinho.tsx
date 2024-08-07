import React, { useState } from 'react';
import { useEffect } from 'react';
import Router from "next/router";
import  useRouter from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';
import removeItemFromCart from '@/APIs/removeItemFromCart';

const CardCarrinho = ({ produto }) => {

    const handleDelete = () => {
        //inserir remover item do carrinho por ID
        removeItemFromCart(produto.cart_id,produto.id)
        console.log("delete ", produto.id);
        //window.location.reload();
      };

  return (
        <div className="flex flex-row w-full h-1/3 rounded border overflow-hidden shadow-lg">
            <div className="flex flex-row items-center w-full h-full">
                <a href={`/pokemon/${produto.pokemon.id}`}><img className="w-[80%] h-[140%]" src={produto.pokemon.image_url} alt={"Card 1"}/></a>
                <div className="px-6 py-4">
                    <label htmlFor="">Pokemon</label>
                    <div className=" text-xl mb-2 ">{produto.pokemon.name}</div>
                </div>
                <div className="px-6 py-4">
                    <label htmlFor="">Preço</label>
                    <div className=" text-xl mb-2 ">
                        R${produto.price}
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <button className="bg-red-600 w-6 h-6" onClick={handleDelete}>x</button>
            </div>
        </div>
  );
};

export default CardCarrinho;