
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
name: string;

  createdAt: string;
  totalPrice: number;
  items: CartItem[];
  id: string; // Assuming the order has an ID
}
