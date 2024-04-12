import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

function Card({ title, description }) {
    return (
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl inline-block mr-4 mb-4">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Imagem do Card" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <p className="mt-2 text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
