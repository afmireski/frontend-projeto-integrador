'use client'
import React,{ useEffect, useState } from 'react';
import styles from '../styles/Product.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import GetPokemon from '@/APIs/getPokemon';

export type PokemonData = {
    id: number;
    reference_id: number; 
    name: string;
    weight: number;
    height: number;
    image_url: string;
    experience: number;
    price: number;
    in_stock: number;
}


function Product() {
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
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                data =  await GetPokemon('19c9e5a7-baa3-4286-953e-31e869c2b922');
                setName(data.name);
                setWeight(data.weight);
                setHeight(data.height);
                setExp(data.experience);
                setPrice(data.price);
                setStock(data.in_stock);
                setImage(data.image_url);
                if(data.types.length == 1)
                    setType(data.types[0].name);
                else
                    setType((data.types.join));
                setTierName(data.tier.name);
                setMinExp(data.tier.minimal_experience);
                setLimitExp(data.tier.limit_experience);
                console.log(data)
            } catch {
                console.log('erro')
            }
        }

        getdados();
    }, []);








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
                    Type: {type}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Exp: {exp} <br/>
                    Weight: {weight}<br/>
                    Height: {height}<br/>
                    Tier: {tier_name}<br/>
                    Minimal experience required: {min_exp}<br/>
                    Limit of experience: {limit_exp}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Price: {price} <br/>
                    In Stock: {stock}
                </p>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;