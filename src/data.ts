import { Product } from './types';

export const categories = [
  {
    id: 'kitchen',
    name: 'Kitchen & Dining',
    image: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Sustainable alternatives for a zero-waste kitchen and plastic-free dining experience.'
  },
  {
    id: 'bathroom',
    name: 'Bathroom & Personal Care',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'Plastic-free, natural personal care products that are better for you and the planet.'
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    description: 'Eco-friendly home essentials made from sustainable materials and ethical production.'
  },
  {
    id: 'travel',
    name: 'Travel & On-the-Go',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80',
    description: 'Reusable essentials for sustainable travel and reducing waste while on the move.'
  },
  {
    id: 'gifts',
    name: 'Eco-Friendly Gifts',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'Thoughtful, sustainable gift ideas for every occasion that won\'t harm the planet.'
  },
  {
    id: 'starter',
    name: 'Sustainability Starter Kits',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Everything you need to start your eco-friendly journey, conveniently bundled together.'
  }
];

export const allProducts: Product[] = [
  {
    id: '1',
    name: 'Bamboo Toothbrush Set',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    images: [
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      'https://images.unsplash.com/photo-1572035958398-8ab78f0a2484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    shortDescription: 'Set of 4 biodegradable bamboo toothbrushes with charcoal-infused bristles',
    description: 'Our bamboo toothbrushes are made from sustainably harvested bamboo with charcoal-infused bristles for natural whitening. Each toothbrush is biodegradable and comes in plastic-free packaging. The ergonomic handle provides a comfortable grip, and the medium-soft bristles are effective yet gentle on gums. By switching to our bamboo toothbrushes, you\'re preventing plastic toothbrushes from ending up in landfills and oceans.',
    category: 'bathroom',
    stock: 45,
    isNew: false,
    discount: 0,
    rating: 4.8,
    reviews: 124,
    certifications: ['Plastic-Free', 'Biodegradable'],
    materials: 'Sustainably harvested bamboo, charcoal-infused nylon bristles (BPA-free)',
    dimensions: '7.5 inches length',
    weight: '0.5 oz each',
    origin: 'Ethically made in China with sustainable practices'
  },
  {
    id: '2',
    name: 'Organic Cotton Produce Bags',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'Set of 6 reusable organic cotton mesh bags for plastic-free grocery shopping',
    category: 'kitchen',
    stock: 32,
    isNew: false,
    discount: 15,
    rating: 4.6,
    reviews: 89,
    certifications: ['GOTS Certified', 'Plastic-Free']
  },
  {
    id: '3',
    name: 'Stainless Steel Water Bottle',
    price: 24.95,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    shortDescription: 'Double-walled insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours',
    category: 'travel',
    stock: 78,
    isNew: false,
    discount: 0,
    rating: 4.9,
    reviews: 203,
    certifications: ['BPA-Free', 'Plastic-Free']
  },
  {
    id: '4',
    name: 'Beeswax Food Wraps',
    price: 16.50,
    image: 'https://images.unsplash.com/photo-1621460248083-1e2f2125f211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'Reusable food wraps made from organic cotton, beeswax, and tree resin',
    category: 'kitchen',
    stock: 54,
    isNew: false,
    discount: 0,
    rating: 4.7,
    reviews: 156,
    certifications: ['Organic', 'Plastic-Free']
  },
  {
    id: '5',
    name: 'Recycled Glass Soap Dispenser',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    shortDescription: 'Elegant soap dispenser made from recycled glass with stainless steel pump',
    category: 'bathroom',
    stock: 42,
    isNew: true,
    discount: 0,
    rating: 4.5,
    reviews: 67,
    certifications: ['Recycled Materials']
  },
  {
    id: '6',
    name: 'Organic Cotton Bath Towel',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583845112239-290938c0576e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    shortDescription: 'Soft, absorbent bath towel made from 100% organic cotton',
    category: 'home',
    stock: 35,
    isNew: false,
    discount: 10,
    rating: 4.8,
    reviews: 92,
    certifications: ['GOTS Certified', 'Fair Trade']
  },
  {
    id: '7',
    name: 'Bamboo Cutlery Set',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1584346133934-a3a4db9b28e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'Portable cutlery set with knife, fork, spoon, and chopsticks in a cotton pouch',
    category: 'travel',
    stock: 68,
    isNew: false,
    discount: 0,
    rating: 4.6,
    reviews: 118,
    certifications: ['Plastic-Free', 'Biodegradable']
  },
  {
    id: '8',
    name: 'Recycled Paper Notebook',
    price: 9.95,
    image: 'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'A5 notebook with 100% recycled paper pages and a seed paper cover that can be planted',
    category: 'home',
    stock: 120,
    isNew: false,
    discount: 0,
    rating: 4.7,
    reviews: 85,
    certifications: ['FSC Certified', 'Recycled Materials']
  },
  {
    id: '9',
    name: 'Zero Waste Starter Kit',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    shortDescription: 'Complete kit with essentials to start your zero waste journey',
    category: 'starter',
    stock: 25,
    isNew: true,
    discount: 0,
    rating: 4.9,
    reviews: 47,
    certifications: ['Plastic-Free', 'Organic']
  },
  {
    id: '10',
    name: 'Organic Lavender Soap Bar',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'Handmade soap with organic lavender essential oil and moisturizing shea butter',
    category: 'bathroom',
    stock: 85,
    isNew: false,
    discount: 0,
    rating: 4.8,
    reviews: 132,
    certifications: ['Organic', 'Cruelty-Free']
  },
  {
    id: '11',
    name: 'Reusable Silicone Food Bags',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1611269072499-264a7cb53614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    shortDescription: 'Set of 4 leakproof silicone bags for food storage, freezer-safe and dishwasher-safe',
    category: 'kitchen',
    stock: 62,
    isNew: false,
    discount: 0,
    rating: 4.6,
    reviews: 94,
    certifications: ['BPA-Free', 'Plastic-Free']
  },
  {
    id: '12',
    name: 'Sustainable Gift Box',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    shortDescription: 'Curated gift box with eco-friendly essentials, perfect for introducing someone to sustainable living',
    category: 'gifts',
    stock: 30,
    isNew: true,
    discount: 0,
    rating: 4.9,
    reviews: 38,
    certifications: ['Plastic-Free', 'Organic']
  }
];

export const featuredProducts = allProducts.filter(product => 
  ['1', '3', '4', '9'].includes(product.id)
);

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    role: 'Sustainability Advocate',
    content: 'The Zero Waste Starter Kit completely transformed my daily habits. The quality of each item is exceptional, and the customer service was outstanding when I had questions about composting.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    role: 'Environmental Engineer',
    content: 'I\'ve tried many reusable water bottles, but the stainless steel one from EcoShop is by far the best. It keeps my water cold all day, even in hot weather, and has survived countless drops.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
    role: 'Parent & Blogger',
    content: 'The beeswax wraps have been a game-changer for our family. We\'ve eliminated plastic wrap completely, and I love that I can wash and reuse them. My kids enjoy the colorful patterns too!'
  }
];