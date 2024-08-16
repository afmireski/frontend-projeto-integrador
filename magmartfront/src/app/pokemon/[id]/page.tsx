"use client";

// Arquivo Product.js
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import GetPokemon from '@/APIs/getPokemon';
import addToCart from '@/app/api/addToCart';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import slugify from '@/utils/string';
import SuccessModal from '@/components/SucessModel'; // Importa o modal de sucesso


const getNamingColorByType = (type: string) => {
    const gradientColors = {
        from: "",
        to: "",
    };

    switch(type) {
        case "bug":
            gradientColors.from = "from-green-400";
            gradientColors.to = "to-yellow-300";
            break;
        case "poison":
            gradientColors.from = "from-purple-600";
            gradientColors.to = "to-purple-300";
            break;
        case "water":
            gradientColors.from = "from-blue-500";
            gradientColors.to = "to-blue-300";
            break;
        case "flying":
            gradientColors.from = "from-blue-300";
            gradientColors.to = "to-purple-200";
            break;
        case "normal":
            gradientColors.from = "from-gray-400";
            gradientColors.to = "to-gray-200";
            break;
        case "fire":
            gradientColors.from = "from-orange-500";
            gradientColors.to = "to-yellow-400";
            break;
        case "grass":
            gradientColors.from = "from-green-500";
            gradientColors.to = "to-green-300";
            break;
    }

    return gradientColors;
}

const getTypeColor = (type: string) => {
    switch(type) {
        case "bug":
            return "bg-green-400";
        case "poison":
            return "bg-purple-600";
        case "water":
            return "bg-blue-500";
        case "flying":
            return "bg-blue-300";
        case "normal":
            return "bg-gray-400";
        case "fire":
            return "bg-orange-500";
        case "grass":
            return "bg-green-500";
    }
}

const getHoverColor = (type: string) => {
    switch(type) {
        case "bug":
            return "hover:bg-green-500";
        case "poison":
            return "hover:bg-purple-700";
        case "water":
            return "hover:bg-blue-600";
        case "flying":
            return "hover:bg-blue-400";
        case "normal":
            return "hover:bg-gray-500";
        case "fire":
            return "hover:bg-orange-600";
        case "grass":
            return "hover:bg-green-600";
    }
}

const PokemonTypeButton = styled(Button)({
    borderRadius: '15px',
    border: '2px solid black',
    color: 'white',
    width: '10rem',
    fontSize: '15px',
    boxShadow: '1px 1px 40px 0px rgba(255, 255, 255, 0.1) inset'
})

const PokemonTierButton = styled(Button)({
    borderRadius: '0px',
    border: '2px solid black',
    color: 'white !important',
    width: '7rem',
    fontSize: '13px',
    boxShadow: '1px 1px 40px 0px rgba(255, 255, 255, 0.1) inset',
    fontWeight: '700',
})

function Product({ params }: { params: { id: string } }) {
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
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Estado do modal de sucesso

    let data;

    useEffect(() => {
        async function getdados() {
            try {
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
            } catch {
                console.log('erro');
            }
        }

        getdados();
    }, []);

    const handleAddToCart = async () => {
        const userId = "e0353a92-d5b2-4ae7-af00-b9947eb72ea6"; // Substitua pelo ID do usuário autenticado
        const pokemonId = params.id;
        const qtty = quantity;

        const success = await addToCart(userId, pokemonId, qtty);
        console.log(success)
        if (success) {
            setIsSuccessModalOpen(true); // Abre o modal de sucesso
        }
    };

    const { from, to } = getNamingColorByType(type.split(' ')[0]);

    // const getCardColor = () => {
    //     const tmp = type.split(' ');
    //     console.log(tmp);
    //     if (tmp.length > 1) {
    //         const primaryColor = getTypeColor(tmp[0])?.replace(/\d{3}$/, '500');
    //         const secondaryColor = getTypeColor(tmp[1])?.replace(/\d{3}$/, '500');
    //         // return `from-${primaryColor} to-${secondaryColor}`;
    //         return `to-${getTypeColor(tmp[1])} from-${getTypeColor(tmp[0])}`;
    //     }
    //     return `bg-${getTypeColor(tmp[0])}`;
    // }

    const getTierBGColor = () => {
        const tier = slugify(tier_name);

        switch(tier) {
            case "inicial": return "bg-gray-400";
            case "comum": return "bg-gray-500";
            case "incomum": return "bg-blue-400";
            case "raro": return "bg-orange-400";
            case "epico": return "bg-purple-700";
            case "lendario": return "bg-yellow-500";
        }
    }

  return (
      <div>
          <Navbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8">
            <div className='image'>
                <img src={image} alt={name}></img>
            </div>
            <div className='description tracking-wide'>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${from} ${to}`}>
                        {name} Nº {(ref_id).toString().padStart(4, '0')}
                    </span>
                </h1>
                {type.split(' ').map((t, key) => (
                    <PokemonTypeButton key={key} className={`${getTypeColor(t)} ${getHoverColor(t)} mr-4 font-mono font-black align-middle`}>{t}</PokemonTypeButton>
                ))}
                <Grid style={{ fontSize: '17px', width: '25rem' }} className={`${getTypeColor( type.split(' ')[0] )} rounded-md font-mono font-semibold text-white my-5 mx-2`} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* <Grid className={`bg-gradient-to-br ${getCardColor()} rounded-md font-mono font-semibold text-white my-5 mx-2`} style={{ fontSize: '17px', width: '25rem' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                    <Grid item xs={6} className="mt-3 mb-4">
                        <p>Altura</p>
                        <p className='text-black'>{height} m</p>
                    </Grid>
                    <Grid item xs={6} className="mt-3 mb-4">
                        <p>Peso</p>
                        <p className='text-black'>{weight} kg</p>
                    </Grid>
                    <Grid item xs={6} className="mb-5">
                        <p>Preço</p>
                        <p className='text-black'>P$ {price}</p>
                    </Grid>
                    <Grid item xs={6} className="mb-5">
                        <p>Estoque</p>
                        <p className='text-black'>{stock}</p>
                    </Grid>
                </Grid>
                <PokemonTierButton disabled className={`${getTierBGColor()} mr-4 mb-4 font-mono align-middle`}>{tier_name}</PokemonTierButton>
                <div>
                    <button className={`${getTypeColor(type.split(' ')[0])} ${getHoverColor(type.split(' ')[0])} text-white font-bold py-2 px-4`} onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
            </div>
            <Footer />
            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                mensagem1="Produto adicionado ao carrinho!"
                mensagem2="Você pode continuar comprando ou finalizar a compra."
                rota="/cart"
            />
        </div>
    );
}

export default Product;
