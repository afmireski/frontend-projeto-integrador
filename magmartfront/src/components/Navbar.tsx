import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#] py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">Minha Página</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:text-gray-300">Página Inicial</a>
              <a href="#" className="text-white hover:text-gray-300">Sobre</a>
              <a href="#" className="text-white hover:text-gray-300">Contato</a>
              {/* Adicione mais links conforme necessário */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
