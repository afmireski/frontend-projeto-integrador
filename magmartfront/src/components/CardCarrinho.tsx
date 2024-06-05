import React, { useState } from 'react';


const CardCarrinho = ({ produto }) => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        const newValue = e.target.value;
        // Validar se o novo valor está dentro dos limites
        if (newValue >= 0 && newValue <= produto.pokemon.in_stock) {
          setValue(newValue);
        }
        console.log(produto.pokemon)
      };

  return (
    <div className="flex flex-row w-full h-1/3 rounded border overflow-hidden shadow-lg">
        <div  className="flex flex-row items-center w-full h-full">
            <img className="w-[40%] h-[100%]" src={produto.pokemon.image_url}  alt={"Card 1"} />
            <div className="px-6 py-4">
                <label htmlFor="">Pokemon</label>
                <div className=" text-xl mb-2 ">{produto.pokemon.name}</div>
            </div>
            <div className="flex flex-col px-6 py-4">
                <label htmlFor="qtd">Quantidade</label>
                <input className='w-10 border' type="number" name="qtd" id="qtd" onChange={handleChange} value={produto.quantity} />
            </div>
            <div className="flex flex-col px-2 py-4">
                <label htmlFor="">Preço</label>
                <div>
                    R${produto.price}
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