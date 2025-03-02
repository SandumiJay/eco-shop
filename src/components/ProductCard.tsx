import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          {product.certifications.map((cert, index) => (
            <div key={index} className="mr-1" title={cert}>
              <Award className="h-4 w-4 text-green-600" />
            </div>
          ))}
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-green-600">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-2">{product.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-bold text-green-700">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;