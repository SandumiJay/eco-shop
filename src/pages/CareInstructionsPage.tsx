import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const careInstructions = [
  {
    id: 'bamboo',
    category: 'Materials',
    title: 'Bamboo Products',
    instructions: [
      'Clean with mild soap and water',
      'Avoid soaking bamboo items for extended periods',
      'Apply food-grade mineral oil occasionally to maintain bamboo kitchenware',
      'Keep away from extreme heat sources',
      'Allow to air dry completely before storing'
    ],
    additionalInfo: 'Bamboo is naturally antimicrobial but can warp or crack if exposed to excessive moisture or heat. Regular oiling of bamboo kitchenware helps prevent drying and cracking.'
  },
  {
    id: 'stainless-steel',
    category: 'Materials',
    title: 'Stainless Steel Items',
    instructions: [
      'Wash with warm soapy water',
      'For stubborn stains, use a paste of baking soda and water',
      'Avoid harsh abrasives that can scratch the surface',
      'Dry thoroughly to prevent water spots',
      'Polish occasionally with a microfiber cloth to maintain shine'
    ],
    additionalInfo: 'Stainless steel is highly durable and recyclable. To maintain its appearance, avoid leaving acidic foods on the surface for extended periods and clean promptly after use.'
  },
  {
    id: 'organic-cotton',
    category: 'Textiles',
    title: 'Organic Cotton Textiles',
    instructions: [
      'Machine wash in cold water with mild, eco-friendly detergent',
      'Avoid bleach and fabric softeners',
      'Tumble dry on low heat or line dry to reduce energy consumption',
      'Iron on medium heat if necessary',
      'Store in a cool, dry place away from direct sunlight'
    ],
    additionalInfo: 'Organic cotton is grown without synthetic pesticides or fertilizers. It may shrink slightly after the first wash, so consider sizing accordingly. Colors may fade gradually with washing, which is natural for products free from harsh chemical dyes.'
  },
  {
    id: 'beeswax-wraps',
    category: 'Kitchen',
    title: 'Beeswax Food Wraps',
    instructions: [
      'Clean with cold water and mild soap if needed',
      'Never use hot water as it can melt the wax',
      'Air dry completely before storing',
      'Avoid using with raw meat or fish',
      'Refresh with gentle heat when wax begins to wear off'
    ],
    additionalInfo: 'Beeswax wraps typically last 6-12 months with proper care. When they no longer stick effectively, they can be composted or used as fire starters. To refresh, place on a baking sheet in a low-temperature oven for a few minutes until the wax melts slightly.'
  },
  {
    id: 'silicone',
    category: 'Kitchen',
    title: 'Silicone Products',
    instructions: [
      'Wash with warm soapy water or in dishwasher',
      'For stubborn stains or odors, soak in vinegar solution',
      'Ensure completely dry before storing',
      'Store flat or hanging to maintain shape',
      'Avoid direct contact with heating elements'
    ],
    additionalInfo: 'Silicone is highly heat-resistant but can be damaged by direct flame. It\'s non-porous, which makes it resistant to bacterial growth, but can sometimes retain odors from strongly flavored foods.'
  },
  {
    id: 'natural-cleaners',
    category: 'Cleaning',
    title: 'Natural Cleaning Products',
    instructions: [
      'Store in original containers away from direct sunlight',
      'Keep out of reach of children and pets',
      'Do not mix different cleaning products',
      'Use within the recommended shelf life',
      'Follow dilution instructions carefully'
    ],
    additionalInfo: 'Natural cleaning products often have shorter shelf lives than conventional ones due to the absence of synthetic preservatives. They may separate over time - shake well before use. Many can be safely disposed of down the drain as they\'re biodegradable.'
  },
  {
    id: 'wooden-items',
    category: 'Materials',
    title: 'Wooden Items',
    instructions: [
      'Clean with damp cloth and mild soap',
      'Never soak or put in dishwasher',
      'Oil regularly with food-safe oil (for kitchenware)',
      'Avoid extreme temperature changes',
      'Sand lightly if surface becomes rough'
    ],
    additionalInfo: 'Wood is a natural material that may change appearance over time. Small cracks may develop as the wood expands and contracts with humidity changes. This is normal and doesn\'t affect functionality. Regular oiling helps prevent this.'
  },
  {
    id: 'wool',
    category: 'Textiles',
    title: 'Wool Products',
    instructions: [
      'Hand wash in cool water with wool-specific detergent',
      'Lay flat to dry to maintain shape',
      'Store folded with cedar blocks to deter moths',
      'Air out occasionally rather than washing',
      'Remove pills gently with a wool comb'
    ],
    additionalInfo: 'Wool is naturally odor-resistant and often needs less frequent washing than synthetic fabrics. It\'s biodegradable and provides excellent insulation. Some wool items can be refreshed simply by hanging in humid air or steam from a shower.'
  }
];

const CareInstructionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const categories = ['All', ...Array.from(new Set(careInstructions.map(item => item.category)))];
  
  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };
  
  const filteredInstructions = careInstructions.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instructions.some(instr => instr.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Usage & Care Instructions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proper care extends the life of your eco-friendly products, reducing waste and maximizing your investment. 
          Follow these guidelines to keep your items in excellent condition.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for care instructions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
        {filteredInstructions.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No care instructions found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredInstructions.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <div>
                    <span className="text-lg font-medium text-gray-900">{item.title}</span>
                    <span className="ml-3 text-sm text-gray-500">{item.category}</span>
                  </div>
                  {expandedItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="pt-3 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Care Instructions:</h4>
                      <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                        {item.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                      
                      <div className="bg-green-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-900 mb-2">Additional Information:</h4>
                        <p className="text-gray-700">{item.additionalInfo}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">General Care Tips for Eco-Friendly Products</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Use natural, biodegradable cleaning products whenever possible</li>
            <li>Avoid harsh chemicals that can damage materials and harm the environment</li>
            <li>Repair items when possible instead of replacing them</li>
            <li>Store products properly to extend their lifespan</li>
            <li>Follow manufacturer's specific instructions for specialized items</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareInstructionsPage;