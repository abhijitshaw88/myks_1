import React from 'react';
import { ServiceSelector } from './TDSServices';

const ITRServices = () => {
  const itrPlans = [
    {
      title: 'Individual ITR - Basic',
      price: 'Starting from ₹799',
      description: 'Income Tax Return filing for salaried individuals',
      features: [
        'Income from Salary',
        'Income from House Property',
        'Income from Other Sources',
        'Tax Saving Investments',
        'Form 16 Processing',
        'Basic Tax Advisory'
      ]
    },
    {
      title: 'Individual ITR - Premium',
      price: 'Starting from ₹1,499',
      description: 'Comprehensive ITR filing for individuals with multiple income sources',
      features: [
        'Everything in Basic Plan',
        'Capital Gains Income',
        'Foreign Income',
        'Business Income',
        'Tax Planning Support',
        'Dedicated Tax Expert'
      ]
    },
    {
      title: 'Business ITR - Basic',
      price: 'Starting from ₹2,499',
      description: 'Income Tax Return filing for small businesses',
      features: [
        'Business Income',
        'Professional Income',
        'Book Keeping Support',
        'Business Deductions',
        'Tax Audit Support',
        'Basic Business Advisory'
      ]
    },
    {
      title: 'Business ITR - Premium',
      price: 'Starting from ₹3,999',
      description: 'Complete ITR solution for businesses with complex requirements',
      features: [
        'Everything in Basic Plan',
        'Multiple Business Units',
        'International Transactions',
        'Transfer Pricing',
        'Tax Planning & Strategy',
        'Dedicated Business Expert'
      ]
    },
    {
      title: 'Tax Planning Package',
      price: 'Starting from ₹7,999/year',
      description: 'Comprehensive tax planning and compliance solution',
      features: [
        'Year-round Tax Planning',
        'Investment Advisory',
        'Business Tax Strategy',
        'Regular Tax Reviews',
        'Compliance Calendar',
        'Priority Support'
      ]
    },
    {
      title: 'Tax Assessment Support',
      price: 'Starting from ₹3,999',
      description: 'Support during income tax assessment',
      features: [
        'Assessment Preparation',
        'Document Collection',
        'Representation Support',
        'Compliance Review',
        'Expert Consultation',
        'Follow-up Support'
      ]
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Income Tax Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive income tax solutions for individuals and businesses. Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itrPlans.map((plan, index) => (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Income Tax Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of tax experts ensures accurate and timely filing of your income tax returns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tax Planning</h3>
              <p className="text-gray-600">
                Get expert advice on tax-saving investments and strategies to minimize your tax liability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Compliance Focus</h3>
              <p className="text-gray-600">
                Stay compliant with all tax regulations and avoid penalties with our comprehensive services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized assistance for all your tax-related queries and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITRServices; 