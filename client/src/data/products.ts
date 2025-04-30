
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Mango Bowl",
    description: "Delicious alphonso mango cut up into juicy cubes",
    price: 150,
    category: "Fruit Bowls"
  },
  {
    id: "2",
    name: "Banana Bowl",
    description: "Fresh bananas with a hint of honey",
    price: 120,
    category: "Fruit Bowls"
  },
  {
    id: "3",
    name: "Mixed Berry Bowl",
    description: "Strawberries, blueberries, and raspberries",
    price: 180,
    category: "Fruit Bowls"
  },
  {
    id: "4",
    name: "Watermelon Crush",
    description: "Refreshing watermelon cubes",
    price: 130,
    category: "Fruit Bowls"
  },
  {
    id: "5",
    name: "Pineapple Delight",
    description: "Sweet pineapple chunks with mint",
    price: 160,
    category: "Fruit Bowls"
  },
  {
    id: "6",
    name: "Apple Cinnamon",
    description: "Fresh apples with a sprinkle of cinnamon",
    price: 140,
    category: "Fruit Bowls"
  },
  {
    id: "7",
    name: "Coconut Water",
    description: "Natural refreshing coconut water",
    price: 80,
    category: "Drinks"
  },
  {
    id: "8",
    name: "Fruit Ninja Smoothie",
    description: "Our signature smoothie with mixed fruits",
    price: 120,
    category: "Drinks"
  }
];

export const categories = [
  {
    id: "fruit-bowls",
    name: "Fruit Bowls",
  },
  {
    id: "drinks",
    name: "Drinks",
  }
];
