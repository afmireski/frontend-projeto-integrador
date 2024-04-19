import React from 'react';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="bg-[#D64E24]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/LOGO.png" alt="Logo" width={120} height={40} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/home" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/editarPerfil" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                                <a href="/cadastro" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cadastro</a>
                                <a href="/apagarPerfil" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deletar Perfil</a>
                                <a href="/editarPokemon" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Editar Pokemon</a>
                                <a href="/apagarPokemon" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deletar Pokemon</a>
                                <a href="/cadastrarPokemon" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Criar Pokemon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
