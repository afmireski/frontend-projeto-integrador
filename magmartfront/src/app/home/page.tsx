"use client"
import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetAllPokemon from '@/APIs/getAllPokemon';
import slugify from '@/utils/string';
import { type } from 'os';

export type type = {
    id: string;
    name: string;
    reference_id: number;
}

export type PokemonData = {
    id: string;
    reference_id: number; 
    name: string;
    image_url: string;
    price: number;
    types: type[];
    slug: string;
}

function Home() {

    const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                data =  await GetAllPokemon();
                const newArrayCopy: PokemonData[] = data.map((pokemon) => ({
                    ...pokemon,
                    slug: slugify(pokemon.name),
                }));
                setPokemonArray(newArrayCopy);
            } catch (error) {
                console.log(error);
                throw new Error;
            }
        }

        getdados();
    }, []); 

    const handleSearch = (text: string) => {
        console.log(text);
    }
  return (
      <div>
          <Navbar />
            <form className="max-w-lg mx-auto m-3">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={(e) => handleSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Pokémon..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </form>
          <div className="flex flex-row justify-center min-h-screen items-center gap-4 p-8 flex-wrap overflow-hidden">
            {pokemonArray.map((pokeObj) => (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <Link href={`/pokemon/${pokeObj.id}`}>
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                <Link href={`/pokemon/${pokeObj.id}`}><img className="h-48 w-full object-cover md:w-48" src={pokeObj.image_url} alt="Imagem do Card" /></Link>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{pokeObj.name}</div>
                                    <div className="mt-2 text-blue-500"> {pokeObj.types.map((tPok) => (
                                        <p>{tPok.name}</p>
                                    ))}</div>
                                    <p className="mt-2 text-gray-500"> Price: P${pokeObj.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
          </div>
          <Footer />
      </div>
  );
}

export default Home;
