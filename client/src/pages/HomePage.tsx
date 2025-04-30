import React, { useEffect, useState } from "react";
import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fruit-ninja-7tju.onrender.com/api/menu")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const bestSellers = products.slice(0, 6);
  const fruitBowls = products.filter((p) => p.category === "Fruit Bowls");
  const drinks = products.filter((p) => p.category === "Drinks");

  return (
    <div className="fruit-container py-6">
      {/* Hero section */}
      <section className="mb-12">
        <div className="rounded-3xl bg-fruit-pink p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh Fruit, Delivered Fast
            </h1>
            <p className="text-lg mb-6">
              Enjoy nature's candy, sliced and ready to eat!
            </p>
            <Link to="/about">
              <Button className="bg-fruit-green hover:bg-green-300 text-black fruit-button">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-60 md:h-60 rounded-full flex items-center justify-center shadow-lg drop-shadow-lg sm:hidden md:block">
                <img
                  src="/assets/heroImg.png" // Corrected path
                  alt="Fruit Bowl"
                  className="w-full h-full object-cover md:rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <ProductCarousel products={bestSellers} title="Bestsellers" />

      {/* Categories */}
      <section className="my-12">
        <h2 className="text-2xl font-mono mb-4">Categories</h2>

        <div className="mt-8">
          <h3 className="text-xl font-mono mb-4">Fruit Bowls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fruitBowls.map((product) => (
              <ProductCard key={product._id} product={product} variant="list" />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-mono mb-4">Drinks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drinks.map((product) => (
              <ProductCard key={product._id} product={product} variant="list" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
