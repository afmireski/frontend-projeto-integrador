export type type = {
    id: string;
    name: string;
    reference_id: number;
}

export type tier = {
    id: number;
    limit_experience: number;
    minimal_experience: number;
    name: string;
}

export type PokemonData = {
    id: string;
    reference_id: number; 
    name: string;
    weight: number;
    height: number;
    image_url: string;
    experience: number;
    price: number;
    in_stock: number;
    types: type[];
    tier: tier;
}