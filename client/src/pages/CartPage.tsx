import React from "react";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const CartPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  // Get the mobile number from localStorage (you can also include name if needed)
  const mobileNumber = localStorage.getItem("fruitNinjaUserMobile");
  const userName = localStorage.getItem("fruitNinjaUserName") || "Guest";

  const handleCheckout = () => {
    // Check if mobile number exists
    if (!mobileNumber) {
      toast.error("Please log in to place an order.");
      return;
    }

    // Create the order object to send to the backend
    const orderData = {
      name: userName,
      phone: mobileNumber,
      items: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: totalPrice,
    };

    // Send POST request to create an order in the backend
    axios
      .post("https://fruit-ninja-7tju.onrender.com", orderData)
      .then((response) => {
        toast.success("Order placed successfully!");
        clearCart(); // Clear the cart after the order is placed
        window.location.href = "/order-confirmation"; // Navigate to order confirmation
      })
      .catch((err) => {
        toast.error("Failed to place the order. Please try again.");
        console.error("Error placing order:", err);
      });
  };

  if (cartItems.length === 0) {
    return (
      <div className="fruit-container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-8">Add some delicious fruit to get started!</p>
          <Link to="/">
            <Button className="bg-fruit-green hover:bg-green-300 text-black">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fruit-container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-mono mb-4">Order Items</h1>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <ProductCard key={item._id} product={item} variant="list" />
            ))}
          </div>
        </div>

        <div>
          <div className="fruit-card bg-white sticky top-20">
            <h2 className="text-2xl font-mono mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{item.price * item.quantity} rs</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-xl">Total</span>
              <span className="text-xl font-bold">{totalPrice} rs</span>
            </div>

            <Button
              className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
