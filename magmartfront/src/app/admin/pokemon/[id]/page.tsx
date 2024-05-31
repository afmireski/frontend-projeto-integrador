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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { stringify } from 'querystring';

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
    const [tier_id, setTierId] = useState(1);
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
                    setTierId(data.tier.id);
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

    const handleDelete = async (e: any) => {
        DeletePokemon(pok_id)
    }

    const [patchedTierId, setPatchedTierId] = useState('');
    const [patchedStock, setPatchedStock] = useState('');
    const [patchedPrice, setPatchedPrice] = useState('');
    const handleEditPokemon = async () => {
        try {
            // Dados do Pokémon a serem enviados para o backend
            const convertedData = {
                tier_id: parseInt(patchedTierId), // Convertendo para inteiro
                price: parseInt(patchedPrice), // Convertendo para ponto flutuante
                stock: parseInt(patchedStock) // Convertendo para inteiro
            };

            // Envia a requisição para editar o Pokémon
            const response = await fetch(`http://localhost:3001/pokemon/${params.id}/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(convertedData),
            });

            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                console.log('Pokemon editado com sucesso!');
            } else {
                console.error('Erro ao editar o Pokemon.');
            }
        } catch (error) {
            console.error('Houve um erro ao editar o Pokemon:', error);
            alert("Houve um erro ao editar o Pokémon.");
        }
    };
  return (
      <div>
          <AdmNavbar />
          <div className="flex flex-row justify-center min-h-screen items-center gap-4 p-8">
            <div className='image'>
                <img src={image} alt='test'></img>
                <div className={styles.ContainerCadPokemon}>
                    <form className={styles.form} >
                        <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                            <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                                <h2 className='text-2xl font-bold text-black'>Editar Pokemon</h2>
                            </div>
                            <div className='flex flex-col h-full w-full justify-center items-center'>
                                <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                                    <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl className='border-white' fullWidth>
                                                    <InputLabel id="demo-simple-select-label" sx={{ color: 'gray' }}>Tier</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={patchedTierId}
                                                        label="Age"
                                                        onChange={(e) => setPatchedTierId(e.target.value)}
                                                        sx={{ color: 'white', borderColor: 'white', '&:before': { borderColor: 'white' }, '&:after': { borderColor: 'white' } }}
                                                    >
                                                        <MenuItem value={1}>Comum</MenuItem>
                                                        <MenuItem value={2}>Inicial</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>

                                        </div>
                                    </div>
                                    <div className='flex flex-col h-full w-1/2 m-2 justify-center items-center'>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <div className=''>
                                                <input
                                                    type="number"
                                                    className={styles.myinput}
                                                    id="preco"
                                                    value={price}
                                                    onChange={(e) => setPatchedPrice(e.target.value)}
                                                    placeholder="Preço"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <div className="">
                                                <input
                                                    className={styles.myinput}
                                                    type="number"
                                                    id="initialStock"
                                                    value={stock}
                                                    onChange={(e) => setPatchedStock(e.target.value)}
                                                    placeholder="Estoque Inicial"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <div className='flex flex-col justify-center items-center h-full w-full'>
                                    <button onClick={handleEditPokemon} className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="button">Editar Pokemon</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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
                <Button onClick={handleDelete} className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" variant="contained"> <Link href={"/admin/pokemon/list"}>Deletar Pokemon</Link> </Button>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;