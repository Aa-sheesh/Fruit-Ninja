
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  product: string;
  date: string;
  price: number;
}
