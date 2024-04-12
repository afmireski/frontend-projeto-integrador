import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

function Card({ title, description }) {
    return (
        <div className=" bg-white rounded-md w-[200px] shadow-md overflow-hidden md:max-w-2xl inline-block mr-4 mb-4">
            <div className="md:flex ">
                <div className="md:flex-shrink-0">
                    <img className="w-full object-cover" src="https://via.placeholder.com/200" alt="Imagem do Card" />
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
