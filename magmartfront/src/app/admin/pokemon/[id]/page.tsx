'use client'
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import AdmNavbar from '@/components/AdmNavbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import PropTypes from 'prop-types';
import GetPokemon from '@/APIs/getPokemon';
import { types } from 'util';
import { Button } from '@mui/material';
import DeletePokemon from '@/APIs/deletePokemon'; 
import Link from 'next/link';

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

    const handleSearch = async (e: any) => {
        DeletePokemon(pok_id)
    }

  return (
      <div>
          <AdmNavbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8">
            <div className='image'>
                <img src={image} alt='test'></img>
            </div>
            <div className='description'>
                <p className={`m-0 max-w-[200ch] text-sm text-balance`}>
                    {name}<br/>
                    Id: {pok_id}<br/>
                    Número: {ref_id}<br/>
                    Tipo: {type}
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
                <br/>
                <Button onClick={handleSearch} variant="contained"> <Link href={"/admin/pokemon/list"}>Deletar Pokemon</Link> </Button>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;