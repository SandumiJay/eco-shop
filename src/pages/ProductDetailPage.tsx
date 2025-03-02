import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Award, ChevronRight, Star, Info, Truck, Package, RefreshCw } from 'lucide-react';
import { allProducts } from '../data';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
          Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <span className="text-gray-900">{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-96">
            <img 
              src={product.images ? product.images[activeImage] : product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {product.images && product.images.length > 1 && (
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-green-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating || 0) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {product.certifications && product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center" title={cert}>
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="ml-1 text-xs text-gray-600">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-green-700">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-green-700">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className={`h-3 w-3 rounded-full mr-2 ${
                  product.stock > 10 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-medium">
                  {product.stock > 10 
                    ? 'In Stock' 
                    : product.stock > 0 
                      ? `Low Stock (${product.stock} left)` 
                      : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-y border-gray-300 py-1 focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
              <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                Save
              </button>
              <button className="sm:flex-none border border-gray-300 text-gray-700 p-3 rounded-md hover:bg-gray-100">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Truck className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Carbon-Neutral Shipping</h4>
                  <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Package className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Plastic-Free Packaging</h4>
                  <p className="text-sm text-gray-600">All orders shipped in recyclable or compostable materials</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <RefreshCw className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">30-Day Returns</h4>
                  <p className="text-sm text-gray-600">Hassle-free returns for unused items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product details tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'details'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab('sustainability')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'sustainability'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Sustainability
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'care'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Care Instructions
            </button>
          </nav>
        </div>
        
        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.description || product.shortDescription}</p>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {product.materials && (
                      <tr className="border-t border-gray-200">
                        <th className="py-3 text-left text-gray-500">Materials</th>
                        <td className="py-3 text-gray-900">{product.materials}</td>
                      </tr>
                    )}
                    {product.dimensions && (
                      <tr className="border-t border-gray-200">
                        <th className="py-3 text-left text-gray-500">Dimensions</th>
                        <td className="py-3 text-gray-900">{product.dimensions}</td>
                      </tr>
                    )}
                    {product.weight && (
                      <tr className="border-t border-gray-200">
                        <th className="py-3 text-left text-gray-500">Weight</th>
                        <td className="py-3 text-gray-900">{product.weight}</td>
                      </tr>
                    )}
                    {product.origin && (
                      <tr className="border-t border-gray-200">
                        <th className="py-3 text-left text-gray-500">Origin</th>
                        <td className="py-3 text-gray-900">{product.origin}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">What's Included</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>{product.name}</li>
                  <li>Usage instructions</li>
                  <li>Care guide</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'sustainability' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Environmental Impact</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Why This Product is Eco-Friendly</h4>
                    <p className="text-gray-700">
                      This product is made from sustainable materials and manufactured using environmentally responsible processes. 
                      By choosing this product, you're helping reduce plastic waste and supporting ethical production practices.
                    </p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-4 mb-6">
                {product.certifications && product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-gray-200">
                    <Award className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/certifications" 
                className="text-green-600 font-medium hover:text-green-800"
              >
                Learn more about our eco-friendly certifications →
              </Link>
            </div>
          )}
          
          {activeTab === 'care' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Care & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Proper care extends the life of your eco-friendly products, reducing waste and maximizing your investment.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Care Instructions:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Clean with mild soap and water</li>
                  <li>Avoid harsh chemicals</li>
                  <li>Store in a dry place away from direct sunlight</li>
                  <li>Follow specific care instructions included with your product</li>
                </ul>
              </div>
              
              <Link 
                to="/care-instructions" 
                className="text-green-600 font-medium hover:text-green-800"
              >
                View detailed care instructions for all products →
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Related products section would go here */}
    </div>
  );
};

export default ProductDetailPage;