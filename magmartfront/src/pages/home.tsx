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

function Home() {

    const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
    let data;
    const router = useRouter();
    const redirectToProductPage = (parameter: string) => {
        window.location.href = `product/${parameter}`;
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
          <div className="flex flex-row justify-center items-center gap-4 p-8">
            {pokemonArray.map((pokeObj) => (
                    // I am no longer using index as key, as I have unique id value.
                    // <li key={pokeObj.reference_id}>
                    //     <span>name: {pokeObj.name}</span>{" "}
                    //     {/* <span>age: {friend.age}</span> */}
                    //     <br />
                    //     <span>Types</span>
                    //     <ul>
                    //         {pokeObj.types.map((tPok) => (
                    //             <li>{tPok.name}</li>
                    //         ))}
                    //     </ul>
                    //    </li>
                    // <Card id={pokeObj.id} name={pokeObj.name} img_url={pokeObj.image_url} price={pokeObj.price}></Card>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" onClick={() => redirectToProductPage(pokeObj.id)}>
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src={pokeObj.image_url} alt="Imagem do Card" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{pokeObj.name}</div>
                                <div className="mt-2 text-blue-500"> {pokeObj.types.map((tPok) => (
                                    <p>{tPok.name}</p>
                                ))}</div>
                                <p className="mt-2 text-gray-500"> Price: P${pokeObj.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
              {/* <Card title="Título do Card" description="Descrição do card. Aqui você pode colocar mais informações sobre o conteúdo." />
              <Card title="Outro Título" description="Descrição do card. Mais informações sobre o conteúdo." />
              <Card title="Um terceiro título" description="Descrição do card. Mais informações sobre o conteúdo." /> */}
          </div>
          <Footer />
      </div>
  );
}

export default Home;
