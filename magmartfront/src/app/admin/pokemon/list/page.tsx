"use client"
import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import "@/app/globals.css";
import AdmNavbar from '@/components/AdmNavbar';
import Footer from '@/components/Footer';
import GetAllPokemon from '@/APIs/getAllPokemon';
import { PokemonData } from '@/components/myTypes/PokemonTypes';

function Home() {

    const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                data =  await GetAllPokemon();
                const newArrayCopy: PokemonData[] = [...data];
                setPokemonArray(newArrayCopy);
                console.log(data)
            } catch {
                console.log('erro')
            }
        }

        getdados();
    }, []); 
  return (
      <div>
          <AdmNavbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8 flex-wrap overflow-hidden">
            {pokemonArray.map((pokeObj) => (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                        <Link href={`/admin/pokemon/${pokeObj.id}`}><img className="h-48 w-full object-cover md:w-48" src={pokeObj.image_url} alt="Imagem do Card" /></Link>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><Link href={`/admin/pokemon/${pokeObj.id}`}>{pokeObj.name}</Link></div>
                            <div className="mt-2 text-blue-500"> {pokeObj.types.map((tPok) => (
                                <p>{tPok.name}</p>
                            ))}</div>
                            <p className="mt-2 text-gray-500"> Price: P${pokeObj.price}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
          <Footer />
      </div>
  );
}

export default Home;
