import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import SustainabilityFeatures from '../components/SustainabilityFeatures';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { featuredProducts, categories, testimonials } from '../data';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <CategorySection categories={categories} />
      <SustainabilityFeatures />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
};

export default HomePage;