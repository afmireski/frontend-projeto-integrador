"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/CadPokemon.module.css';
import "@/app/globals.css";
import AdmNavbar from '@/components/AdmNavbar';

export default function EditarPokemon() {
    const [pokemonId, setPokemonId] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            // Envia o ID do Pokémon para a API para exclusão
            const response = await fetch(`http://localhost:3001/pokemon/${pokemonId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                // Limpa o campo após a exclusão bem-sucedida
                setPokemonId('');
                console.log('Pokemon encontrado com sucesso!');
            } else {
                console.error('Erro ao buscar o Pokemon.');
            }
        } catch (error) {
            console.error('Erro ao buscar o Pokemon:', error);
        }
    };

    return (
        <div className={styles.mainLogin}>
            <div className='w-full'>
                <AdmNavbar />
            </div>
            <div className={styles.ContainerCadPokemon}>
                <form onSubmit={handleSearch} className={styles.form} >
                    <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                        <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                            <h2 className='text-2xl font-bold text-white'>Excluir Pokemon</h2>
                        </div>
                        <div className='flex flex-col h-full w-full justify-center items-center'>
                            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                                <div className='flex flex-col h-full w-full justify-center items-center'>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className="">
                                            <input
                                                className={styles.myinput}
                                                type="text"
                                                id="pokemonId"
                                                value={pokemonId}
                                                onChange={(e) => setPokemonId(e.target.value)}
                                                placeholder="ID do Pokémon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-full w-full'>
                            <div className='flex flex-col justify-center mt-5 items-center h-full w-full'>
                                <button className="bg-[#e72b2b] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Buscar Pokemon</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
