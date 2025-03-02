import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">EcoShop</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">Home</Link>
              <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">Products</Link>
              <div className="relative group">
                <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                  Resources
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                  <Link to="/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Certifications</Link>
                  <Link to="/care-instructions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Care Instructions</Link>
                  <Link to="/sustainability-guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sustainability Guides</Link>
                  <Link to="/troubleshooting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Troubleshooting</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link to="/cart" className="p-2 rounded-full hover:bg-green-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <div className="ml-4 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Home</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Products</Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">FAQ</Link>
            <Link to="/certifications" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Certifications</Link>
            <Link to="/care-instructions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Care Instructions</Link>
            <Link to="/sustainability-guides" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Sustainability Guides</Link>
            <Link to="/troubleshooting" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">Troubleshooting</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;