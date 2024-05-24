import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { PokemonData } from '@/components/myTypes/PokemonTypes';

// Card.propTypes = {
//     name: PropTypes.string.isRequired,
//     img_url: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired
// };

// const [pokemon, setPokemon] = useState('');

async function Card( pokeObj: PokemonData ) {

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                <Link href={`/admin/pokemon/${pokeObj.id}`}><img className="h-48 w-full object-cover md:w-48" src={pokeObj.image_url} alt="Imagem do Card" /></Link>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><Link href={`@/app/admin/pokemon/${pokeObj.id}`}>{pokeObj.name}</Link></div>
                    <div className="mt-2 text-blue-500"> {pokeObj.types.map((tPok) => (
                        <p>{tPok.name}</p>
                    ))}</div>
                    <p className="mt-2 text-gray-500"> Price: P${pokeObj.price}</p>
                </div>
            </div>
        </div>
        // <div className=" bg-white rounded-md w-[200px] shadow-md overflow-hidden md:max-w-2xl inline-block mr-4 mb-4">
        //     <div className="md:flex ">
        //         <div className="md:flex-shrink-0">
        //             <img className="h-48 w-full object-cover md:w-48" src={img_url} alt="Imagem do Card" />
        //         </div>
        //         <div className="p-8">
        //             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
        //             <p className="mt-2 text-gray-500">{price}</p>
        //         </div>
        //     </div>
        //     <div className="p-4">
        //         <div className="uppercase tracking-wide text-sm text-[#D64E24] font-semibold">{title}</div>
        //         <p className="mt-2 text-gray-500">{description}</p>
        //     </div>
        // </div>
    );
}



export default Card;
