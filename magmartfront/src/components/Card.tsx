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
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={img_url} alt="Imagem do Card" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                    <p className="mt-2 text-gray-500">{price}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
