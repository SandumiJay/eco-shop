import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Mail className="h-8 w-8 mr-3 text-green-300" />
              <h2 className="text-3xl font-bold">Stay Updated</h2>
            </div>
            <p className="text-lg text-green-100 mb-4">
              Subscribe to our newsletter for eco-friendly tips, new product announcements, and exclusive offers.
            </p>
            <ul className="text-green-100">
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-green-300 rounded-full mr-2"></span>
                Get sustainable living tips and tricks
              </li>
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-green-300 rounded-full mr-2"></span>
                Be the first to know about new products
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-green-300 rounded-full mr-2"></span>
                Receive exclusive subscriber-only discounts
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            {subscribed ? (
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
                <p>
                  You've been added to our mailing list. Get ready for sustainable inspiration in your inbox!
                </p>
                <button 
                  onClick={() => setSubscribed(false)}
                  className="mt-4 text-green-300 hover:text-white"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
                <p className="text-xs mt-4 text-green-100">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from EcoShop.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;