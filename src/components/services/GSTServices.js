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
      title: 'GST Registration',
      price: 'Starting from ₹3,499',
      description: 'GST Application Filing, Clarification Response, One-time Modification',
      features: [
        'GST Application Filing',
        'Clarification Response',
        'One-time Modification',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'GST Compliance – Composition Dealer',
      price: 'Starting from ₹6,000',
      description: 'Quarterly CMP-08 Filing (Excludes Annual Return GSTR-4)',
      features: [
        'Quarterly CMP-08 Filing',
        'Excludes Annual Return (GSTR-4)',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'Annual Return – Composition Dealer (GSTR-4)',
      price: 'Starting from ₹8,000',
      description: 'Filing of GSTR-4',
      features: [
        'Filing of GSTR-4',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'GST Compliance – Freelancers',
      price: 'Starting from ₹12,000 yearly / ₹1,500 monthly',
      description: 'GSTR-1 Filing, GSTR-3B Filing, ITC Reconciliation (Purchase Register vs GSTR-2A), Annual Return excluded',
      features: [
        'GSTR-1 Filing',
        'GSTR-3B Filing',
        'ITC Reconciliation (Purchase Register vs GSTR-2A)',
        'Annual Return excluded',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'GST Compliance – Traders & Online Sellers',
      price: 'Starting from ₹24,000 yearly / ₹2,500 monthly',
      description: 'GSTR-1 Filing, GSTR-3B Filing, ITC Reconciliation, Annual Return excluded',
      features: [
        'GSTR-1 Filing',
        'GSTR-3B Filing',
        'ITC Reconciliation',
        'Annual Return excluded',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'Annual Return – Regular Dealer',
      price: 'Starting from ₹15,000',
      description: 'GSTR-9 Filing, GSTR-9C (Reconciliation Statement)',
      features: [
        'GSTR-9 Filing',
        'GSTR-9C (Reconciliation Statement)',
      ],
      cta: 'Activate Now',
    },
    {
      title: 'LUT Filing (Letter of Undertaking)',
      price: 'Starting from ₹2,699',
      description: 'Filing of LUT for Export/Zero-rated supply',
      features: [
        'Filing of LUT for Export/Zero-rated supply',
      ],
      cta: 'Activate Now',
    },
  ];

  const additionalGSTRServices = [
    'GSTR-5 – For Non-Resident Taxable Persons',
    'GSTR-6 – For Input Service Distributors (ISD)',
    'GSTR-7 – TDS Return under GST',
    'GSTR-8 – TCS Return under GST',
    'GSTR-10 – Final Return (upon GST Registration Cancellation)',
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-6">{plan.price}</div>
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
                <a
                  href="/contact"
                  className="inline-block mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow text-center"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional GSTR Filing Services */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📦 Additional GSTR Filing Services (Quotation Based)</h3>
          <p className="text-gray-600 mb-4">The following services are offered on a custom quotation depending on volume and complexity:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {additionalGSTRServices.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow text-center"
          >
            Contact us directly for a personalized quote
          </a>
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