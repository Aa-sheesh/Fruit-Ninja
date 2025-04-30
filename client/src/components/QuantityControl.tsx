
import React from "react";
import { Plus, Minus } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onChange,
  min = 0,
  max = 99,
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="quantity-btn bg-gray-100 hover:bg-gray-200 text-gray-600"
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center">{quantity}</span>
      <button
        className="quantity-btn bg-fruit-green hover:bg-green-200 text-gray-600"
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantityControl;
