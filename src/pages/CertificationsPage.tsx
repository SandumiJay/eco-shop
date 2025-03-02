import React from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 'organic',
    name: 'USDA Organic',
    logo: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
    description: 'The USDA Organic certification ensures that products are grown and processed according to federal guidelines addressing soil quality, animal raising practices, pest and weed control, and use of additives.',
    criteria: [
      'No synthetic pesticides or fertilizers',
      'No genetically modified organisms (GMOs)',
      'No irradiation or sewage sludge',
      'Organic farming practices that promote ecological balance'
    ],
    website: 'https://www.usda.gov/topics/organic'
  },
  {
    id: 'fairtrade',
    name: 'Fairtrade Certified',
    logo: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Fairtrade certification ensures that products meet social, economic and environmental standards. The standards are designed to support the sustainable development of small producer organizations and agricultural workers in the poorest countries in the world.',
    criteria: [
      'Fair prices and wages for producers',
      'Safe working conditions',
      'No child labor',
      'Environmental protection',
      'Community development funds'
    ],
    website: 'https://www.fairtrade.net/'
  },
  {
    id: 'gots',
    name: 'Global Organic Textile Standard (GOTS)',
    logo: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'GOTS is recognized as the world\'s leading processing standard for textiles made from organic fibers. It defines high-level environmental criteria along the entire organic textiles supply chain and requires compliance with social criteria as well.',
    criteria: [
      'Minimum 70% organic fibers',
      'No toxic heavy metals, formaldehyde, or GMOs',
      'Water treatment for wet processing',
      'Fair labor conditions according to ILO',
      'Separate storage and clear identification of organic products'
    ],
    website: 'https://global-standard.org/'
  },
  {
    id: 'fsc',
    name: 'Forest Stewardship Council (FSC)',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'FSC certification ensures that products come from responsibly managed forests that provide environmental, social and economic benefits. The FSC system provides a way to track forest products from the forest to the consumer.',
    criteria: [
      'Protection of indigenous peoples\' rights',
      'Maintenance of high conservation value forests',
      'Prohibition of hazardous chemicals',
      'No conversion of natural forests to plantations',
      'No genetically modified trees'
    ],
    website: 'https://fsc.org/'
  },
  {
    id: 'bcorp',
    name: 'B Corporation',
    logo: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'B Corps are for-profit companies certified by the nonprofit B Lab to meet rigorous standards of social and environmental performance, accountability, and transparency. B Corps form a community of leaders and drive a global movement of people using business as a force for good.',
    criteria: [
      'Environmental performance',
      'Worker treatment and compensation',
      'Community engagement',
      'Governance and transparency',
      'Customer impact'
    ],
    website: 'https://bcorporation.net/'
  }
];

const CertificationsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Eco-Friendly Certifications</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding eco-friendly certifications helps you make informed choices about the products you buy. 
          Here's a guide to the certifications you'll find on our products.
        </p>
      </div>
      
      <div className="space-y-12">
        {certifications.map(cert => (
          <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-50">
                <div className="h-64 flex items-center justify-center p-6">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h2>
                <p className="text-gray-700 mb-6">{cert.description}</p>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">Key Criteria:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  {cert.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
                
                <a 
                  href={cert.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-800"
                >
                  Learn more on official website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-green-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Why Certifications Matter</h2>
        <div className="md:flex">
          <div className="md:w-2/3 md:pr-8">
            <p className="text-gray-700 mb-4">
              Third-party certifications provide independent verification that products meet specific environmental and social standards. 
              They help cut through greenwashing and ensure that products truly deliver on their sustainability claims.
            </p>
            <p className="text-gray-700">
              At EcoShop, we carefully vet all products to ensure they carry legitimate certifications from respected organizations. 
              We believe in transparency and want to make it easy for you to understand exactly what you're buying.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-900 mb-3">Our Commitment</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                  <span>We verify all certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                  <span>We prioritize multi-criteria certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                  <span>We regularly review our standards</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                  <span>We educate about certification meaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;