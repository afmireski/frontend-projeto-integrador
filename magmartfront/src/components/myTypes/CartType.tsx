import { PokemonData } from '@/components/myTypes/PokemonTypes';

export type CartItem = {
    id: string;
    cart_id: string;
    quantity: number;
    price: number;
    total: number;
    pokemon: PokemonData; // Usando PokemonData aqui
  };
  
  export type CartData = {
    id: string;
    user_id: string;
    is_active: boolean;
    expires_in: string;
    total: number;
    items: CartItem[];
  };