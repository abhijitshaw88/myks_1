import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Services from './components/services/Services';
import Features from './components/home/Features';
import Team from './components/team/Team';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans bg-gray-50">
      <Header />
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

export default App;