import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'Products',
    question: 'What makes your products eco-friendly?',
    answer: 'Our products are made from sustainable, renewable, or recycled materials. We prioritize biodegradable, compostable, and plastic-free alternatives. Our manufacturing processes minimize water usage, energy consumption, and carbon emissions. We also ensure ethical labor practices throughout our supply chain.'
  },
  {
    id: 2,
    category: 'Products',
    question: 'Are your products tested on animals?',
    answer: 'No, we are proudly cruelty-free. None of our products or ingredients are tested on animals at any stage of product development. We believe in ethical practices that respect all living beings and the environment.'
  },
  {
    id: 3,
    category: 'Products',
    question: 'Do you offer refills for your products?',
    answer: 'Yes, we offer refill options for many of our products to reduce packaging waste. Check individual product pages for refill availability. We\'re continuously expanding our refill program to cover more products.'
  },
  {
    id: 4,
    category: 'Shipping',
    question: 'What kind of packaging do you use for shipping?',
    answer: 'We use plastic-free, recyclable or compostable packaging materials. This includes recycled cardboard boxes, paper tape, and compostable mailers. We avoid plastic fillers and instead use paper-based alternatives when needed.'
  },
  {
    id: 5,
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping times vary depending on location. We offset carbon emissions from all our shipments through verified environmental projects.'
  },
  {
    id: 6,
    category: 'Shipping',
    question: 'How long will my order take to arrive?',
    answer: 'Domestic orders typically arrive within 3-5 business days. International orders may take 7-14 business days depending on the destination country and customs processing. You\'ll receive tracking information once your order ships.'
  },
  {
    id: 7,
    category: 'Returns & Exchanges',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unused items in their original packaging. If you\'re not satisfied with your purchase, please contact our customer service team to initiate a return. We aim to process refunds within 5-7 business days after receiving the returned items.'
  },
  {
    id: 8,
    category: 'Returns & Exchanges',
    question: 'How do I exchange a product?',
    answer: 'To exchange a product, please contact our customer service team with your order number and the item you wish to exchange. We\'ll guide you through the process and help you select a replacement item.'
  },
  {
    id: 9,
    category: 'Sustainability',
    question: 'How do you offset your carbon footprint?',
    answer: 'We partner with verified carbon offset programs that invest in renewable energy, reforestation, and conservation projects. We calculate the carbon footprint of our operations, including manufacturing and shipping, and purchase offsets accordingly. We also continuously work to reduce our emissions at the source.'
  },
  {
    id: 10,
    category: 'Sustainability',
    question: 'Are your products biodegradable?',
    answer: 'Many of our products are biodegradable or compostable, but this varies by product category. We clearly label each product with its end-of-life disposal recommendations. We\'re committed to developing more biodegradable alternatives as sustainable materials become available.'
  },
  {
    id: 11,
    category: 'Account & Orders',
    question: 'How do I track my order?',
    answer: 'Once your order ships, you\'ll receive a confirmation email with tracking information. You can also log into your account on our website to view order status and tracking details. If you have any issues tracking your order, please contact our customer service team.'
  },
  {
    id: 12,
    category: 'Account & Orders',
    question: 'Can I modify or cancel my order?',
    answer: 'We process orders quickly to ensure fast shipping. If you need to modify or cancel your order, please contact us immediately. We can usually accommodate changes if the order has\'t been processed yet. Once shipped, the order cannot be modified, but you can return it according to our return policy.'
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const toggleFaq = (id: number) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our products, shipping, returns, and sustainability practices.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for questions..."
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
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openFaqs.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openFaqs.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer you were looking for, please contact our customer support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:support@ecoshop.com" 
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 text-center"
            >
              Email Us
            </a>
            <a 
              href="tel:+1234567890" 
              className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;