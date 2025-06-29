import React from 'react';
import SEO from '../SEO';
import { ServiceSelector } from './TDSServices';

const GSTServices = () => {
  const seoData = {
    title: 'GST Services | GST Registration & Filing | MyKS',
    description: 'Professional GST services in India. GST registration, GST return filing, GST compliance services. Expert GST consultants for businesses. Starting from ₹999.',
    keywords: 'GST services, GST registration, GST filing, GST return, GST compliance, GST consultant, GST registration online, GST return filing, GST services India, GST registration cost, GST filing services',
    url: 'https://myks.co.in/services/gst',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "GST Services",
      "description": "Professional GST registration, filing, and compliance services in India",
      "provider": {
        "@type": "Organization",
        "name": "MyKS - myKarSahayak"
      },
      "areaServed": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GST Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "GST Registration - New",
            "price": "999",
            "priceCurrency": "INR",
            "description": "New GST registration for businesses"
          },
          {
            "@type": "Offer",
            "name": "GST Return Filing - Basic",
            "price": "799",
            "priceCurrency": "INR",
            "description": "Monthly GST return filing for small businesses"
          }
        ]
      }
    }
  };

  const gstPlans = [
    {
      title: 'GST Registration - New',
      price: 'Starting from ₹999',
      description: 'New GST registration for businesses',
      features: [
        'GST Registration Application',
        'Document Collection & Verification',
        'Application Filing with GST Department',
        'GSTIN Generation',
        'Post Registration Support',
        'Basic GST Advisory'
      ]
    },
    {
      title: 'GST Registration - Premium',
      price: 'Starting from ₹1,999',
      description: 'Complete GST registration with additional benefits',
      features: [
        'Everything in Basic Plan',
        'Priority Processing',
        'Digital Signature Certificate (DSC)',
        'GST Software Training',
        '3 Months Free GST Return Filing',
        'Extended Support Period'
      ]
    },
    {
      title: 'GST Return Filing - Basic',
      price: 'Starting from ₹799/month',
      description: 'Monthly GST return filing for small businesses',
      features: [
        'GSTR-1 Filing',
        'GSTR-3B Filing',
        'Input Tax Credit Reconciliation',
        'GST Payment Support',
        'Return Filing Reminders',
        'Basic GST Advisory'
      ]
    },
    {
      title: 'GST Return Filing - Premium',
      price: 'Starting from ₹1,499/month',
      description: 'Comprehensive GST return filing with additional services',
      features: [
        'Everything in Basic Plan',
        'GSTR-2A Reconciliation',
        'Monthly GST Reports',
        'GST Audit Support',
        'Priority Filing',
        'Dedicated GST Expert'
      ]
    },
    {
      title: 'GST Annual Return',
      price: 'Starting from ₹3,999',
      description: 'Annual GST return filing (GSTR-9)',
      features: [
        'GSTR-9 Preparation & Filing',
        'Annual Reconciliation',
        'Audit Support',
        'Compliance Review',
        'Annual GST Report',
        'Expert Consultation'
      ]
    },
    {
      title: 'GST Audit',
      price: 'Starting from ₹7,999',
      description: 'Complete GST audit services',
      features: [
        'GSTR-9C Preparation',
        'Detailed Reconciliation',
        'Audit Report Generation',
        'Compliance Review',
        'Expert Consultation',
        'Representation Support'
      ]
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO {...seoData} />
      <div className="container mx-auto px-6">
        <ServiceSelector />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GST Registration & Filing Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional <strong>GST services</strong> in India. Expert <strong>GST registration</strong>, <strong>GST return filing</strong>, and <strong>GST compliance services</strong>. 
            Get your <strong>GST registration</strong> and <strong>GST returns filed</strong> accurately by certified professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gstPlans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our GST Registration & Filing Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of GST experts ensures accurate and timely filing of all your GST returns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technology Driven</h3>
              <p className="text-gray-600">
                We use advanced software and tools to ensure efficient GST compliance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Timely Support</h3>
              <p className="text-gray-600">
                Get prompt assistance for all your GST-related queries and concerns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Compliance Focus</h3>
              <p className="text-gray-600">
                Stay compliant with all GST regulations and avoid penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTServices; 