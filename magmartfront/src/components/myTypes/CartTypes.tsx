export type Item = {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };
  
  export type CartData = {
    id: string;
    user_id: string;
    is_active: boolean;
    expires_in: string;
    total: number;
    items: Item[];
  };