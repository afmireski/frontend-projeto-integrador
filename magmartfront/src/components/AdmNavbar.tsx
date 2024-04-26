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
                                <a href="/admin/profile" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                                <a href="/admin/pokemon/list" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pokemons</a>
                                <a href="/admin/pokemon/find" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buscar Pokemon</a>
                                <a href="/admin/pokemon/create" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cadastrar Pokemon</a>
                                <a href="/admin/perfil/list" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfis</a>
                                <a href="/admin/perfil/find" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buscar Perfil</a>
                                <a href="/admin/perfil/create" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cadastrar Perfil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
