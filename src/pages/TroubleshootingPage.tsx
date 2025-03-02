import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const troubleshootingItems = [
  {
    id: 'bamboo-cracking',
    category: 'Bamboo Products',
    problem: 'Bamboo Utensils Cracking',
    solution: 'Bamboo can dry out over time, leading to cracks. To prevent this, regularly oil your bamboo utensils with food-grade mineral oil or coconut oil. Apply a thin layer, let it soak in for a few hours, then wipe off any excess. Keep bamboo away from extreme heat and avoid soaking in water for extended periods.',
    preventionTips: [
      'Oil bamboo items every 1-2 months',
      'Hand wash only and dry immediately',
      'Store in a dry place away from heat sources',
      'Never put bamboo in the dishwasher'
    ]
  },
  {
    id: 'beeswax-not-sticking',
    category: 'Food Storage',
    problem: 'Beeswax Wraps Not Sticking',
    solution: 'When beeswax wraps lose their stickiness, it\'s usually because the wax has worn off or the wrap is cold. Warm the wrap between your hands for a few seconds to activate the wax. If that doesn\'t work, the wrap may need refreshing. Place it on a baking sheet in an oven at very low heat (around 150°F/65°C) for 1-2 minutes until the wax melts slightly, then remove and hang to dry.',
    preventionTips: [
      'Wash in cold water only with mild soap',
      'Air dry completely after each use',
      'Avoid using with hot foods or liquids',
      'Store flat or rolled, not crumpled'
    ]
  },
  {
    id: 'stainless-steel-stains',
    category: 'Kitchen Items',
    problem: 'Stains on Stainless Steel',
    solution: 'For stubborn stains on stainless steel, make a paste with baking soda and water. Apply to the stained area and let sit for 15-20 minutes. Scrub gently with a soft cloth in the direction of the grain, then rinse thoroughly. For tougher stains, white vinegar can be effective. Apply, let sit briefly, then rinse and dry completely.',
    preventionTips: [
      'Clean spills immediately, especially from acidic foods',
      'Dry thoroughly after washing to prevent water spots',
      'Use soft cloths for cleaning to avoid scratches',
      'Apply stainless steel polish occasionally for protection'
    ]
  },
  {
    id: 'compost-odor',
    category: 'Composting',
    problem: 'Compost Bin Odor',
    solution: 'A smelly compost bin usually indicates too much moisture or not enough air circulation. Add dry, carbon-rich materials like shredded paper, dry leaves, or cardboard. Make sure your compost has adequate drainage and aeration. For countertop bins, empty more frequently and clean the bin with vinegar and water solution. Keeping a small container of baking soda near your compost bin can also help absorb odors.',
    preventionTips: [
      'Balance green (nitrogen-rich) and brown (carbon-rich) materials',
      'Avoid putting meat, dairy, or oily foods in home compost',
      'Turn outdoor compost regularly to aerate',
      'Use a compost bin with a good seal and filter for indoor use'
    ]
  },
  {
    id: 'natural-deodorant',
    category: 'Personal Care',
    problem: 'Natural Deodorant Not Working',
    solution: 'When switching to natural deodorant, your body may go through a detox period of 2-4 weeks. During this time, you might experience more odor than usual. Stick with it! To help the transition, exfoliate underarms gently, apply deodorant to clean, dry skin, and reapply as needed throughout the day. Some people find that using a probiotic spray before applying natural deodorant helps balance skin bacteria.',
    preventionTips: [
      'Apply to clean, dry underarms',
      'Allow deodorant to warm slightly on skin before dressing',
      'Consider using an armpit detox mask once a month',
      'Stay hydrated and maintain a balanced diet'
    ]
  },
  {
    id: 'wool-dryer-balls',
    category: 'Laundry',
    problem: 'Wool Dryer Balls Not Reducing Drying Time',
    solution: 'For wool dryer balls to work effectively, you need to use enough of them (typically 3-6 depending on load size) and make sure your dryer isn\'t overloaded. The balls need room to bounce around and create separation between clothes. If clothes are still taking too long to dry, check that your dryer vent isn\'t clogged, as this is a common cause of extended drying times regardless of what you use in the dryer.',
    preventionTips: [
      'Use at least 3-6 wool dryer balls per load',
      'Don\'t overload the dryer',
      'Clean the lint trap before each use',
      'Have your dryer vent cleaned annually'
    ]
  },
  {
    id: 'soap-bars-soft',
    category: 'Personal Care',
    problem: 'Soap Bars Becoming Soft and Mushy',
    solution: 'Natural soap bars need to dry out between uses to last longer. Use a soap dish that allows water to drain away from the soap. After use, rinse the soap briefly to remove any lather, then place it on a soap dish where air can circulate around it. Cutting larger bars in half allows you to use one portion while the other stays dry and firm.',
    preventionTips: [
      'Always use a draining soap dish',
      'Store soap in a cool, dry area of your bathroom',
      'Allow soap to dry completely between uses',
      'Consider rotating between two bars to allow complete drying'
    ]
  },
  {
    id: 'reusable-bags-mold',
    category: 'Shopping',
    problem: 'Mold or Mildew on Reusable Bags',
    solution: 'Reusable shopping bags, especially those made from natural fibers, can develop mold if stored damp. If you notice mold, wash cotton or canvas bags in hot water with a plant-based detergent and a cup of white vinegar. Dry thoroughly in the sun if possible, as UV light helps kill mold spores. For non-washable bags, wipe with a cloth dampened with white vinegar, then let dry completely in a well-ventilated area.',
    preventionTips: [
      'Wash bags regularly, especially those used for produce or meat',
      'Ensure bags are completely dry before storing',
      'Store in a dry, well-ventilated area',
      'Consider designating specific bags for meat, produce, and other items'
    ]
  }
];

const TroubleshootingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const categories = ['All', ...Array.from(new Set(troubleshootingItems.map(item => item.category)))];
  
  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };
  
  const filteredItems = troubleshootingItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.solution.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting & Common Issues</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Encountering issues with your eco-friendly products? Find solutions to common problems and learn how to prevent them in the future.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for problems or solutions..."
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
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No troubleshooting guides found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredItems.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <div>
                    <span className="text-lg font-medium text-gray-900">{item.problem}</span>
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
                      <h4 className="font-medium text-gray-900 mb-3">Solution:</h4>
                      <p className="text-gray-700 mb-4">{item.solution}</p>
                      
                      <h4 className="font-medium text-gray-900 mb-3">Prevention Tips:</h4>
                      <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                        {item.preventionTips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Still Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If you're experiencing an issue not covered here, or if the suggested solutions didn't resolve your problem, 
            please contact our customer support team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:support@ecoshop.com" 
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 text-center"
            >
              Email Support
            </a>
            <a 
              href="#" 
              className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 text-center"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingPage;