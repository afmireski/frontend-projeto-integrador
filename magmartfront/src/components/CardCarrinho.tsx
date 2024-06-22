import React, { useState } from 'react';


const CardCarrinho = ({ produto }) => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        const newValue = e.target.value;
        // Validar se o novo valor está dentro dos limites
        if (newValue >= 0 && newValue <= produto.quantity) {
          setValue(newValue);
        }
      };

  return (
    <div className="flex flex-row w-full h-1/3 rounded overflow-hidden shadow-lg">
        <div  className="flex flex-row items-center w-full h-full">
            <img className="w-1/3" src={"https://via.placeholder.com/100"} alt={"Card 1"} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"></div>
            </div>
            <div className="flex flex-col px-6 py-4">
                <label htmlFor="qtd">Quantidade</label>
                <input className='w-10 border' type="number" name="qtd" id="qtd" onChange={handleChange} />
            </div>
            <div className="flex flex-col px-6 py-4">
                <label htmlFor="">Preço</label>
                <div>
                </div>
            </div>
        </div>
        <div className='m-5'>
            <button className="bg-red-600 w-6 h-6" >x</button>
        </div>
    </div>
  );
};

export default CardCarrinho;