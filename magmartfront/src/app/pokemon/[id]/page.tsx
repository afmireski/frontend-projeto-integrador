"use client";

// Arquivo Product.js
import React,{ useEffect, useState } from 'react';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetPokemon from '@/APIs/getPokemon';
import addToCart from '@/APIs/addToCart';

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
                    },"")));
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
                <img src={image} alt='test'></img>
            </div>
            <div className='description'>
                <p className={`m-0 max-w-[200ch] text-sm text-balance`}>
                    {name}<br/>
                    Id: {pok_id}<br/>
                    Número: {ref_id}<br/>
                    Type: {type}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Experiência: {exp} <br/>
                    Peso: {weight}<br/>
                    Altura: {height}<br/>
                    Tier: {tier_name}<br/>
                    Experiência mínima requerida: {min_exp}<br/>
                    Limite de experiência: {limit_exp}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Preço: {price} <br/>
                    Quantidade: {stock}
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
