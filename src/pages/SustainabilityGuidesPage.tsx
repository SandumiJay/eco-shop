import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Droplet, Wind, Home, ShoppingBag, Utensils, Gift } from 'lucide-react';

const guides = [
  {
    id: 'zero-waste-kitchen',
    title: 'Zero Waste Kitchen Guide',
    icon: <Utensils className="h-8 w-8 text-green-600" />,
    excerpt: 'Transform your kitchen into a zero-waste zone with these practical tips and product recommendations.',
    image: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    readTime: '8 min read'
  },
  {
    id: 'sustainable-home',
    title: 'Creating a Sustainable Home',
    icon: <Home className="h-8 w-8 text-green-600" />,
    excerpt: 'Simple changes to make your home more energy-efficient, less wasteful, and more environmentally friendly.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    readTime: '10 min read'
  },
  {
    id: 'ethical-shopping',
    title: 'Guide to Ethical Shopping',
    icon: <ShoppingBag className="h-8 w-8 text-green-600" />,
    excerpt: 'How to make conscious consumer choices that align with your values and reduce environmental impact.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    readTime: '7 min read'
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation at Home',
    icon: <Droplet className="h-8 w-8 text-green-600" />,
    excerpt: 'Practical ways to reduce water usage and protect this precious resource in your daily life.',
    image: 'https://images.unsplash.com/photo-1534937951057-f2d1a5a6e5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    readTime: '6 min read'
  },
  {
    id: 'plastic-free-living',
    title: 'Beginners Guide to Plastic-Free Living',
    icon: <Recycle className="h-8 w-8 text-green-600" />,
    excerpt: 'Start your journey to reducing plastic with these beginner-friendly steps and product alternatives.',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    readTime: '9 min read'
  },
  {
    id: 'sustainable-gifts',
    title: 'Eco-Friendly Gift Guide',
    icon: <Gift className="h-8 w-8 text-green-600" />,
    excerpt: 'Thoughtful, sustainable gift ideas for every occasion that won\'t harm the planet.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    readTime: '5 min read'
  },
  {
    id: 'carbon-footprint',
    title: 'Understanding & Reducing Your Carbon Footprint',
    icon: <Wind className="h-8 w-8 text-green-600" />,
    excerpt: 'Learn what contributes to your carbon footprint and actionable steps to reduce your impact.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    readTime: '12 min read'
  },
  {
    id: 'seasonal-living',
    title: 'Guide to Seasonal Living',
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    excerpt: 'How to align your lifestyle with natural seasons for a more sustainable and connected life.',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    readTime: '8 min read'
  }
];

const SustainabilityGuidesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Guides</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our collection of guides to help you live more sustainably. From zero-waste tips to ethical shopping advice, 
          we've got resources to support your eco-friendly journey.
        </p>
      </div>
      
      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <div className="md:flex items-center">
          <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Sustainable Living Matters</h2>
            <p className="text-gray-700 mb-4">
              Every small change in our daily habits can contribute to a healthier planet. Sustainable living isn't about 
              perfection—it's about making conscious choices that reduce our environmental impact while improving our quality of life.
            </p>
            <p className="text-gray-700">
              Our guides provide practical, accessible advice for people at all stages of their sustainability journey. 
              Whether you're just starting out or looking to deepen your commitment, you'll find valuable information here.
            </p>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Sustainable living" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map(guide => (
          <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                {guide.icon}
                <span className="ml-auto text-sm text-gray-500">{guide.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.excerpt}</p>
              <Link 
                to={`/sustainability-guides/${guide.id}`} 
                className="text-green-600 font-medium hover:text-green-800"
              >
                Read full guide →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Sustainability Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">For Beginners</h3>
            <p className="text-gray-700 mb-4">
              New to sustainable living? Start with small, manageable changes that fit easily into your lifestyle.
            </p>
            <Link 
              to="/sustainability-guides/plastic-free-living" 
              className="text-green-600 font-medium hover:text-green-800"
            >
              Begin here →
            </Link>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Going Deeper</h3>
            <p className="text-gray-700 mb-4">
              Ready to take your commitment to the next level? Explore more comprehensive lifestyle changes.
            </p>
            <Link 
              to="/sustainability-guides/sustainable-home" 
              className="text-green-600 font-medium hover:text-green-800"
            >
              Explore more →
            </Link>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Community Action</h3>
            <p className="text-gray-700 mb-4">
              Individual changes matter, but collective action creates the biggest impact. Learn how to get involved.
            </p>
            <Link 
              to="/sustainability-guides/carbon-footprint" 
              className="text-green-600 font-medium hover:text-green-800"
            >
              Take action →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityGuidesPage;