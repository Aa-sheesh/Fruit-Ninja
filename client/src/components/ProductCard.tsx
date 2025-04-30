
import React from "react";
import QuantityControl from "./QuantityControl";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "carousel" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  variant = "default"
}) => {
  const { addToCart, findCartItem, updateQuantity } = useCart();
  const cartItem = findCartItem(product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    if (cartItem) {
      updateQuantity(product._id, newQuantity);
    } else if (newQuantity > 0) {
      addToCart({ ...product, quantity: newQuantity });
      toast.success(`${product.name} added to cart`);
    }
  };

  const handleAddToCart = () => {
    if (!cartItem) {
      addToCart({ ...product, quantity: 1 });
      toast.success(`${product.name} added to cart`);
    }
  };

  if (variant === "carousel") {
    return (
      <div className="fruit-card bg-fruit-lightBlue min-w-[250px] max-w-[280px]">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <QuantityControl
            quantity={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="fruit-card bg-white flex items-center justify-between p-4 my-2">
        <div>
          <h3 className="text-lg">{product.name}</h3>
        </div>
        <div className="flex items-center gap-4">
          <QuantityControl
            quantity={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="fruit-card bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="font-bold">{product.price} rs</span>
        <QuantityControl
          quantity={quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};

export default ProductCard;
