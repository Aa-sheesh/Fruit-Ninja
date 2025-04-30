
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300; // Adjust as needed
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    
    let newPosition = 
      direction === "left" 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);
    
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-mono mb-4">{title}</h2>
      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={() => handleScroll("left")}
            disabled={scrollPosition === 0}
            className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              variant="carousel"
            />
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
