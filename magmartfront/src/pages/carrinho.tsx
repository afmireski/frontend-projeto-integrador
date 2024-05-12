import React,{ useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import GetAllPokemon from '@/APIs/getAllPokemon';
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
}

function Carrinho() {

    const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
    let data;
    const router = useRouter();
    const redirectToProductPage = (parameter: string) => {
        //window.location.href = `product/${parameter}`;
        router.push({
            pathname: '/product',
            query: { parameter },
        });
    };
    useEffect(() => {
        async function getdados() {
            try {
                data =  await GetAllPokemon();
                // for(var index in data){
                //     setId<index>(data[index]);
                //     console.log(index)
                // }
                // if(data[0].types.length == 1)
                //     setType(data[0].types[0].name);
                // else
                //     setType((data[0].types[0].join));
                //for(var obj of data){

                    // const fetchedData: PokemonData[] = [
                    
                    //     // { property1: "Value 1", property2: 42 },
                    //     // { property1: "Value 2", property2: 24 },
                    // ];
                    // setPokemonArray(fetchedData);
                //}
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
            <Navbar />
            <div className="flex flex-row min-h-screen justify-center gap-4 p-8 flex-wrap">
                <div className="flex flex-row w-[60%] rounded-md shadow-2xl justify-center  gap-4 p-8 flex-wrap overflow-hidden">
                    <div className="flex flex-row w-full h-1/3 rounded overflow-hidden shadow-lg">
                        <div  className="flex flex-row items-center w-full h-full">
                            <img className="w-1/3" src={"https://via.placeholder.com/100"} alt={"Card 1"} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{"Charmander"}</div>
                            </div>
                            <div className="flex flex-col px-6 py-4">
                                <label htmlFor="">quantidade</label>
                                <input className='w-10 border' type="number" name="qtd" id="qtd" />
                            </div>
                            <div className="flex flex-col px-6 py-4">
                                <label htmlFor="">preço</label>
                                <div>
                                    R$1000
                                </div>
                            </div>
                        </div>
                        <div className='m-5'>
                            <button className="bg-red-600 w-6 h-6" >x</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-[30%] h-1/2 rounded-md shadow-2xl gap-4 p-8 flex-wrap overflow-hidden">
                    <div className="flex flex-row w-full h-1/3 rounded overflow-hidden shadow-xl">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">{"subtotal (1 produto) R$1000"}</div>
                            <button className='bg-orange-600 w-full p-2 rounded-md' >fechar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
            
          <Footer />
      </div>
  );
}

export default Carrinho;
