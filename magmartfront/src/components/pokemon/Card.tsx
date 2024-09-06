"use client"

import React,{ useState, useEffect } from 'react';
import Link from 'next/link';

const labelLayout = {
    'fire': "bg-orange-500 text-slate-50",
    'bug': "bg-fuchsia-500 text-slate-50",
    'poison': "bg-amber-400 text-slate-50",
    'water': "bg-sky-400 text-zinc-900",
    'flying': "bg-cyan-400 text-slate-900",
    'normal': "bg-gray-400 text-slate-50",
    'grass': "bg-green-500 text-zinc-900",
};

function Card( { pokeObj } ) {
    return (
        <div style={{ width: '25rem' }} className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <Link href={`/pokemon/${pokeObj.id}`}>
                <div className="md:flex">
                    <div className="md:flex-shrink-0 bg-slate-100">
                        <img className="h-48 w-full object-cover md:w-48" src={pokeObj.image_url} alt="Imagem do Card" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-teal-900 font-semibold font-mono text-lg">{pokeObj.name}</div>
                        <div className="mt-2 text-blue-500"> {pokeObj.types.map((type, index) => (
                            <p key={index} style={{ width: '5em', fontSize: '13px' }} className={`font-bold rounded text-center py-1 mt-1 text-sm ${labelLayout[type.name]}`}>{type.name}</p>
                        ))}</div>
                        <p className="mt-2 text-gray-500">P${pokeObj.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}



export default Card;
