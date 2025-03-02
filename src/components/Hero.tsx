import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-green-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Eco-friendly products" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <div className="flex items-center mb-6">
            <Leaf className="h-10 w-10 mr-3 text-green-300" />
            <h1 className="text-4xl md:text-5xl font-bold">Sustainable Living Made Simple</h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Discover our curated collection of eco-friendly products that help reduce waste and protect our planet.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-white text-green-700 px-6 py-3 rounded-md font-medium text-lg hover:bg-green-100 transition-colors inline-block text-center"
            >
              Shop Now
            </Link>
            <Link 
              to="/sustainability-guides" 
              className="border-2 border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors inline-block text-center"
            >
              Learn More
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                alt="Eco certification" 
                className="h-16 w-16 object-contain bg-white p-2 rounded-full"
              />
            </div>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Eco certification" 
                className="h-16 w-16 object-contain bg-white p-2 rounded-full"
              />
            </div>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Eco certification" 
                className="h-16 w-16 object-contain bg-white p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;