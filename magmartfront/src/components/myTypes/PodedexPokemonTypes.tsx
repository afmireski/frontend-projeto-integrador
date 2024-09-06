import { tier, type } from "./PokemonTypes";
export type PokedexData = {
    id: string;
    reference_id: number; 
    name: string;
    weight: number;
    height: number;
    image_url: string;
    types: type[];
    tier: tier;
    user_id: string;
    quantity: number;
    slug?: string | null;
}