import React from 'react';
import Hero from './Hero';
import Services from '../services/Services';
import Features from './Features';
import Team from '../team/Team';
import Testimonials from './Testimonials';
import FAQ from '../faq/FAQ';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Hero />
      <Services />
      <Features />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home; 