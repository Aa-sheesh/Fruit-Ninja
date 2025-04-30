
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderConfirmationPage = () => {
  const [orderId] = useState(() => Math.floor(100000000 + Math.random() * 900000000));
  const [minutes] = useState(() => Math.floor(10 + Math.random() * 20));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fruit-container py-12">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-8">Thank you for ordering</h1>
          
          <div className="space-y-4 text-left mb-8">
            <div>
              <p className="text-gray-500">Order ID :</p>
              <p>{orderId}</p>
            </div>
            <div>
              <p className="text-gray-500">Expected Order Time :</p>
              <p>{minutes} mins</p>
            </div>
          </div>
          
          <Button asChild className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
            <Link to="/order-history">
              Track Order
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Fruit emoji */}
      <div className="relative h-40">
        <div className="absolute -bottom-10 left-0">
          <img
            src="/assets/favicon.png"
            alt="Fruit Emoji"
            className="w-40 h-40 animate-bounce "
          />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
