
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="fruit-container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Fruit Ninja</h1>
        <p className="text-lg mb-4">Fastest solution to healthy cravings</p>
        
        <div className="my-8 space-y-4">
          <p>
            Fruit Ninja was born from a simple idea: make healthy eating convenient 
            and delicious. We started in 2020 with just a small kitchen and a big dream 
            - to deliver perfectly cut, ready-to-eat fresh fruit to your doorstep.
          </p>
          
          <p>
            Our team of fruit enthusiasts carefully selects the freshest seasonal fruits, 
            preparing them with precision and care. Every fruit bowl is crafted just 
            hours before delivery, ensuring peak freshness and flavor.
          </p>
          
          <p>
            We believe that eating healthy shouldn't be a chore. That's why we've 
            designed our service to be as simple as possible - just a few taps and 
            your fruit bowl is on its way, prepared with the same attention to detail 
            as if you had cut it yourself, but without any of the hassle.
          </p>
          
          <p>
            Today, we serve thousands of customers across the city, delivering 
            nature's candy to homes, offices, and schools. Join us in our mission 
            to make healthy snacking the easiest choice you'll make all day.
          </p>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/">
            <Button className="bg-fruit-green hover:bg-green-300 text-black fruit-button">
              Order Now
            </Button>
          </Link>
        </div>
        
       
      </div>
    </div>
  );
};

export default AboutPage;
