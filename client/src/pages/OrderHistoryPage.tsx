
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Order } from "@/types";

// Mock data for order history
const orderHistory: Order[] = [
  {
    id: "ORD-1",
    product: "Mango Bowl",
    date: "28/4/25",
    price: 50
  },
  {
    id: "ORD-2",
    product: "Mango Bowl",
    date: "28/4/25",
    price: 50
  },
  {
    id: "ORD-3",
    product: "Mango Bowl",
    date: "28/4/25",
    price: 50
  }
];

const OrderHistoryPage = () => {
  return (
    <div className="fruit-container py-6">
      <h1 className="text-2xl font-mono mb-6">Orders History</h1>
      
      <div className="space-y-4 mb-10">
        {orderHistory.map((order) => (
          <div 
            key={order.id} 
            className="bg-fruit-pink bg-opacity-30 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-medium">{order.product}</h3>
              <p className="text-gray-500">{order.date}</p>
            </div>
            <span className="text-xl font-bold">{order.price}Rs</span>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link to="/">
            Contact Us
          </Link>
        </Button>
      </div>
      
      
    </div>
  );
};

export default OrderHistoryPage;
