'use client'
import React, { useState } from 'react';
import styles from '@/styles/CadPokemon.module.css';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditPokemon from '@/APIs/editPokemon';
import { PokemonData, type } from '@/components/myTypes/PokemonTypes';

export default function EditarPokemon() {
    const [tierId, setTierId] = useState('');
    const [price, setPrice] = useState('');
    const [initialStock, setInitialStock] = useState('');
    const [pokemonId, setPokemonId] = useState(''); // Alteração aqui

    const handleEditPokemon = async () => {
        try {
            // Dados do Pokémon a serem enviados para o backend
            const pokemonData = {
                tier_id: parseInt(tierId), // Convertendo para inteiro
                price: parseInt(price), // Convertendo para ponto flutuante
                stock: parseInt(initialStock) // Convertendo para inteiro
            };

            // Envia a requisição para editar o Pokémon
            const response = await fetch(`http://localhost:3001/pokemon/${pokemonId}/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pokemonData),
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
        <div className={styles.mainLogin}>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className={styles.ContainerCadPokemon}>
                <form className={styles.form} >
                    <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                        <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                            <h2 className='text-2xl font-bold text-white'>Editar Pokemon</h2>
                        </div>
                        <div className='flex flex-col h-full w-full justify-center items-center'>
                            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                                <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className="">
                                            <input
                                                className={styles.myinput}
                                                type="text"
                                                id="pokemonId" // Alteração aqui
                                                value={pokemonId} // Alteração aqui
                                                onChange={(e) => setPokemonId(e.target.value)} // Alteração aqui
                                                placeholder="ID do Pokemon" // Alteração aqui
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl className='border-white' fullWidth>
                                                <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Tier</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={tierId}
                                                    label="Age"
                                                    onChange={(e) => setTierId(e.target.value)}
                                                    sx={{ color: 'white', borderColor: 'white', '&:before': { borderColor: 'white' }, '&:after': { borderColor: 'white' } }}
                                                >
                                                    <MenuItem value={1}>Tier 1</MenuItem>
                                                    <MenuItem value={2}>Tier 2</MenuItem>
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
                                                onChange={(e) => setPrice(e.target.value)}
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
                                                value={initialStock}
                                                onChange={(e) => setInitialStock(e.target.value)}
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
    );
}


