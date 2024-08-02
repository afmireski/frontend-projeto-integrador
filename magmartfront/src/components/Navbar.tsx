import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

function Navbar() {
    return (
        <nav className="bg-[#D64E24]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/LOGO.png" alt="Logo" width={150} height={50} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/home" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/search" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pesquisa</a>
                                <a href="/profile" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                                <a href="/purchases" className="text-gray-300 hover:bg-[#d63924] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Minhas Compras</a>
                            </div>
                        </div>
                        <Button href="/cart">
                            <Image src="/CartIcon.png" alt="Logo" width={40} height={40} />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
