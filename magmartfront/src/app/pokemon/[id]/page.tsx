"use client";

// Arquivo Product.js
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import GetPokemon from '@/APIs/getPokemon';
import addToCart from '@/app/api/addToCart';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const getTypeColor = (type: string) => {
    switch(type) {
        case "bug":
            return "#a6b61f";
        case "poison":
            return "#904391";
        case "water":
            return "#3091f2";
        case "flying":
            return "#92a3f1";
        case "normal":
            return "#c3bcb2";
        case "fire":
            return "#e73b0d";
        case "grass":
            return "#6fc033";
    }
}

const PokemonTypeButton = styled(Button)({
    borderRadius: '20px',
    border: '2px solid black',
    color: 'white',
    width: '10rem',
    fontSize: '15px',
    boxShadow: '1px 1px 40px 0px rgba(255, 255, 255, 0.1) inset'
})

function Product({params}: {params: {id: string}}) {
    const [pok_id, setPokId] = useState('');
    const [ref_id, setRefId] = useState(1);
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(1);
    const [height, setHeight] = useState(1);
    const [image, setImage] = useState('');
    const [exp, setExp] = useState(1);
    const [price, setPrice] = useState(1);
    const [stock, setStock] = useState(1);
    const [type, setType] = useState('');
    const [tier_name, setTierName] = useState('');
    const [min_exp, setMinExp] = useState(1);
    const [limit_exp, setLimitExp] = useState(1);
    const [quantity, setQuantity] = useState(1);
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                //setPokId(queryString);
                //if (typeof router.query.data === 'string') {
                    data = await GetPokemon(params.id);
                    setPokId(data.id);
                    setRefId(data.reference_id);
                    setName(data.name);
                    setWeight(data.weight);
                    setHeight(data.height);
                    setExp(data.experience);
                    setPrice(data.price);
                    setStock(data.in_stock);
                    setImage(data.image_url);
                    setType((data.types.reduce((types, type)=>{
                        return types.concat(` ${type.name}`)
                    },"")).trim());
                    setTierName(data.tier.name);
                    setMinExp(data.tier.minimal_experience);
                    setLimitExp(data.tier.limit_experience);
                    console.log(data)
                //}
                
            } catch {
                console.log('erro')
            }
        }

        getdados();
    }, []);

    // Função para lidar com o clique no botão "Adicionar ao Carrinho"
    const handleAddToCart = () => {
        const userId = "e0353a92-d5b2-4ae7-af00-b9947eb72ea6"; // Substitua pelo ID do usuário autenticado
        const pokemonId = params.id; // Substitua pelo ID do pokémon
        const qtty = quantity; // Quantidade a ser adicionada ao carrinho
        addToCart(userId, pokemonId, qtty);
    };

  return (
      <div>
          <Navbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8">
            <div className='image'>
                <img src={image} alt={name}></img>
            </div>
            <div className='description tracking-wide'>
                {/* <h1 className="font-normal uppercase" style={{ fontFamily: '"Flexo-Regular",arial,sans-serif', fontSize: '1.5rem' }}>{name}</h1><br></br> */}
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-green-400">{name}</span></h1>
                {type.split(' ').map((t) => (
                        <PokemonTypeButton style={{ backgroundColor: getTypeColor(t) }} className="mr-4 font-mono font-black align-middle">{t}</PokemonTypeButton>
                ))}
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Exp: {exp} <br/>
                    Weight: {weight}<br/>
                    Height: {height}<br/>
                    Tier: {tier_name}<br/>
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Price: {price} <br/>
                    In Stock: {stock}
                </p>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                    </button>
                </div>
                <div>
                    <label>Quantidade: </label>
                    <input type="number" id="pokemon" name="bought" onChange={(e) => setQuantity(Number(e.target.value))} defaultValue={1} min={1} max={stock} />
                </div>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;
