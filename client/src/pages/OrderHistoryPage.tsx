import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Order } from "@/types";
import axios from "axios";

const OrderHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get the mobile number from localStorage
  const mobileNumber = localStorage.getItem("fruitNinjaUserMobile");

  useEffect(() => {
    if (mobileNumber) {
      // Make API call to get orders by mobile number
      axios
        .get(`https://fruit-ninja-7tju.onrender.com/${mobileNumber}`) // Ensure this endpoint is correct
        .then((response) => {
          setOrderHistory(response.data); // Assuming the response is an array of orders
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch orders.");
          setLoading(false);
        });
    } else {
      setError("Mobile number not found in localStorage.");
      setLoading(false);
    }
  }, [mobileNumber]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <div className="loader-inner"></div>
          <div className="loader-text">Loading...</div>
          <style>
            {`
              .loader {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 24px;
              }
              .loader-inner {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 5px solid #f3f3f3;
                border-top: 5px solid #3498db;
                animation: spin 1s linear infinite;
              }
              .loader-text {
                margin-top: 10px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="fruit-container py-6">
      <h1 className="text-2xl font-mono mb-6">Orders History</h1>
      {orderHistory.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-bold mb-4">No Orders Found</h2>
          <p className="mb-8">You have not placed any orders yet.</p>
          <Link to="/">
            <Button className="bg-fruit-green hover:bg-green-300 text-black">
              Browse Products
            </Button>
          </Link>
        </div>
      )}

      {/* Order History List */}
      <div className="space-y-4 mb-10">
        {orderHistory.map((order) => (
          <div
            key={order.id} // Assuming `id` is the unique identifier in the backend
            className="bg-fruit-pink bg-opacity-30 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              {/* Displaying first item from the items object in the order */}
              <h3 className="text-lg font-medium">{order.items[0]?.name || "Unknown Product"}</h3>
              <p className="text-gray-500">{order.createdAt}</p> {/* Displaying order creation date */}
            </div>
            <span className="text-xl font-bold">{order.totalPrice}Rs</span> {/* Displaying total price */}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link to="/">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
