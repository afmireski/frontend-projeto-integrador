"use client"

import React, { useState } from 'react';
import styles from '@/styles/CadPokemon.module.css';
import "@/app/globals.css";
import Navbar from '@/components/AdmNavbar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CadPokemon() {
    const [tierId, setTierId] = useState('');
    const [price, setPrice] = useState('');
    const [initialStock, setInitialStock] = useState('');
    const [name, setName] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    // Dados do Pokémon a serem enviados para o backend
    const pokemonData = {
        name: name,
        tier_id: parseInt(tierId), // Convertendo para inteiro
        price: parseInt(price), // Convertendo para ponto flutuante
        initial_stock: parseInt(initialStock) // Convertendo para inteiro
    };

    try {
      // Envia os dados do Pokémon para a API
      const response = await fetch('http://localhost:3001/pokemon/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemonData),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Reseta os campos do formulário após o sucesso
        setName('');
        setTierId('');
        setPrice('');
        setInitialStock('');
        console.log('Pokemon cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar o Pokemon.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o Pokemon:', error);
    }
  };

  return (
    <div className={styles.mainLogin}>
      <div className='w-full'>
        <Navbar />
      </div>
      <div className={styles.ContainerCadPokemon}>
        <form onSubmit={handleCadastro} className={styles.form} >
          <div className='flex flex-col h-full w-10/12 justify-center items-center'>
            <div className='flex flex-col h-full w-full justify-center items-center p-3'>
              <h2 className='text-2xl font-bold text-white'>Cadastrar Pokemon</h2>
            </div>
            <div className='flex flex-col h-full w-full justify-center items-center'>
              <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                  <div className='flex flex-row h-full w-full justify-center items-center'>
                    <div className="">
                      <input
                        className={styles.myinput}
                        type="text"
                        id="nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
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
                        label="Tier"
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
                <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Cadastrar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
