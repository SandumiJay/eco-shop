import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">EcoShop</span>
            </div>
            <p className="text-green-200 mb-4">
              Sustainable products for a better planet. Join us in making a difference, one eco-friendly purchase at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-green-200 hover:text-white">All Products</Link></li>
              <li><Link to="/products?category=home" className="text-green-200 hover:text-white">Home & Kitchen</Link></li>
              <li><Link to="/products?category=personal" className="text-green-200 hover:text-white">Personal Care</Link></li>
              <li><Link to="/products?category=fashion" className="text-green-200 hover:text-white">Eco Fashion</Link></li>
              <li><Link to="/products?category=gifts" className="text-green-200 hover:text-white">Sustainable Gifts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-green-200 hover:text-white">FAQ</Link></li>
              <li><Link to="/certifications" className="text-green-200 hover:text-white">Eco-Friendly Certifications</Link></li>
              <li><Link to="/care-instructions" className="text-green-200 hover:text-white">Usage & Care Instructions</Link></li>
              <li><Link to="/sustainability-guides" className="text-green-200 hover:text-white">Sustainability Guides</Link></li>
              <li><Link to="/troubleshooting" className="text-green-200 hover:text-white">Troubleshooting & Common Issues</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-200" />
                <a href="mailto:info@ecoshop.com" className="text-green-200 hover:text-white">info@ecoshop.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-200" />
                <a href="tel:+1234567890" className="text-green-200 hover:text-white">+1 (234) 567-890</a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-900 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 px-4 py-2 rounded-r hover:bg-green-500 focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-green-200">© 2025 EcoShop. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-green-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;