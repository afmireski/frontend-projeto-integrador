import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// Card.propTypes = {
//     name: PropTypes.string.isRequired,
//     img_url: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired
// };

// const [pokemon, setPokemon] = useState('');

async function Card( id: string, name: string, img_url: string, price: number ) {

    return (
        <div className=" bg-white rounded-md w-[200px] shadow-md overflow-hidden md:max-w-2xl inline-block mr-4 mb-4">
            <div className="md:flex ">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={img_url} alt="Imagem do Card" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                    <p className="mt-2 text-gray-500">{price}</p>
                </div>
            </div>
            <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-[#D64E24] font-semibold">{title}</div>
                <p className="mt-2 text-gray-500">{description}</p>
            </div>
        </div>
    );
}



export default Card;
