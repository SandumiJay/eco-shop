import React from 'react';
import { Leaf, Recycle, Droplet, Wind } from 'lucide-react';

const SustainabilityFeatures = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: 'Eco-Friendly Materials',
      description: 'All our products are made from sustainable, renewable, or recycled materials that minimize environmental impact.'
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-600" />,
      title: 'Zero Waste Packaging',
      description: 'We use minimal, plastic-free packaging that is either compostable, recyclable, or reusable.'
    },
    {
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      title: 'Water Conservation',
      description: 'Our production processes are designed to minimize water usage and prevent water pollution.'
    },
    {
      icon: <Wind className="h-10 w-10 text-green-600" />,
      title: 'Carbon Neutral',
      description: 'We offset our carbon emissions through verified environmental projects and sustainable practices.'
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainability Commitment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making eco-friendly choices accessible to everyone. Here's how we make a difference:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFeatures;