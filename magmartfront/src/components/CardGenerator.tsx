import GetPokemon from "../APIs/getPokemon";
import Card from "./Card";
import { useState } from "react";

function CardGenerator( ){
    const [pokemon, setPokemon] = useState('');
    const data = GetPokemon();
    return (
        
        <div className="flex flex-row justify-center items-center gap-4 p-8">
            <Card name={} img_url={} price={} />
        </div>
    );
}

const [pokemon, setPokemon] = useState('');

useEffect(() => {
    async function getdados() {
        const data = await getAluguel('');
    
        try{ 
            if(!data) throw('error')
            let value = data.data
            setModelsComponents(value.map((aluguel) => (
                <div key={aluguel.id} className='border  border-slate-950 p-2 w-fit rounded-md hover:scale-105'>
                <h2 className='text-center font-bold'>Aluguel</h2>
                <p>Retirada: {aluguel.dataInicio}</p>
                <p>Devolução: {aluguel.dataDev}</p>
                <p>Modelo: {aluguel.model}</p>
                <p>Marca: {aluguel.marca}</p>
                <p>Nome: {aluguel.cliente_firstName}</p>
                <p>Endereço: {aluguel.endereco}</p>
                <p>Email: {aluguel.cliente_email}</p>
                <p>Telefone: {aluguel.telefone}</p>
                
            <div className='flex   justify-center mt-4'>
                <button  className='p-2  bg-zinc-300  rounded-md' type='button' onClick={() => deletar(aluguel.id)}>Deletar</button>
            </div>
        </div>
                


              
            )));
        }  catch{
            setModelsComponents([<p className='text-red-500 text-center'>nenhum item encontrado</p>]);
        }
    }

    getdados();
}, []);