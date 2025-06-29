import React from 'react';
import SEO from '../SEO';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import FAQ from '../faq/FAQ';
import Contact from '../contact/Contact';

const Home = () => {
  const seoData = {
    title: 'MyKS - Professional Tax Filing Services | ITR, GST, TDS Filing in India',
    description: 'Professional tax filing services in India. Expert ITR filing, GST registration & filing, TDS compliance, tax planning & notice handling. Get your taxes filed accurately by certified professionals.',
    keywords: 'tax filing, ITR filing, GST filing, income tax return, GST registration, TDS filing, tax planning, tax consultant, CA services, tax compliance, online tax filing, e-filing, tax return filing, GST return, TDS return, tax services India',
    url: 'https://myks.co.in',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "MyKS - Professional Tax Filing Services",
      "description": "Professional tax filing services in India. Expert ITR filing, GST registration & filing, TDS compliance, tax planning & notice handling.",
      "url": "https://myks.co.in",
      "mainEntity": {
        "@type": "AccountingService",
        "name": "MyKS - myKarSahayak",
        "description": "Professional tax filing services in India",
        "serviceType": [
          "Income Tax Return Filing",
          "GST Registration and Filing",
          "TDS/TCS Compliance",
          "Tax Planning Services"
        ]
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50">
      <SEO {...seoData} />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home; 