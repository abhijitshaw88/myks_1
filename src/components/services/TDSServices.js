import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const ServiceSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const services = [
    { key: 'tds', label: 'TDS', path: '/services/tds' },
    { key: 'itr', label: 'ITR', path: '/services/itr' },
    { key: 'gst', label: 'GST', path: '/services/gst' },
    { key: 'other', label: 'Other', path: '/services/other' },
  ];
  const current = services.find(s => location.pathname.startsWith(s.path))?.key || 'tds';

  return (
    <div className="mb-10">
      {/* Desktop tabs */}
      <div className="hidden sm:flex justify-center gap-4 mb-4">
        {services.map(s => (
          <button
            key={s.key}
            onClick={() => navigate(s.path)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm border-2 ${current === s.key ? 'bg-blue-600 text-white border-blue-600 scale-105' : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {/* Mobile custom dropdown */}
      <div className="sm:hidden flex justify-center">
        <div className="relative w-56">
          <button
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-200 bg-white shadow-md text-lg font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            onClick={e => {
              e.preventDefault();
              const menu = document.getElementById('service-mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            {services.find(s => s.key === current)?.label || 'Select Service'}
            <svg className="ml-2 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <ul
            id="service-mobile-menu"
            className="hidden absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-20"
            style={{ minWidth: '100%' }}
            tabIndex={-1}
            role="listbox"
          >
            {services.map(s => (
              <li key={s.key} role="option" aria-selected={current === s.key}>
                <button
                  onClick={() => { navigate(s.path); document.getElementById('service-mobile-menu').classList.add('hidden'); }}
                  className={`w-full text-left px-6 py-3 flex items-center gap-3 text-base font-medium transition hover:bg-blue-50 rounded-xl ${current === s.key ? 'bg-blue-100 text-blue-700' : ''}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const TDSServices = () => {
  const services = [
    { key: 'tds', label: 'TDS', path: '/services/tds' },
    { key: 'itr', label: 'ITR', path: '/services/itr' },
    { key: 'gst', label: 'GST', path: '/services/gst' },
    { key: 'other', label: 'Other', path: '/services/other' },
  ];
  const current = 'tds';

  const tdsPlans = [
    {
      title: 'TDS Return Filing - Basic',
      price: '₹1,999/quarter',
      description: 'Quarterly TDS return filing for small businesses',
      features: [
        'Form 24Q Filing (Salary)',
        'Form 26Q Filing (Non-Salary)',
        'TDS Payment Support',
        'TDS Certificate Generation',
        'Basic TDS Advisory',
        'Return Filing Reminders'
      ],
      recommended: false
    },
    {
      title: 'TDS Return Filing - Premium',
      price: '₹2,999/quarter',
      description: 'Comprehensive TDS return filing with additional services',
      features: [
        'Everything in Basic Plan',
        'Form 27Q Filing (NRI)',
        'TDS Reconciliation',
        'Monthly TDS Reports',
        'TDS Audit Support',
        'Dedicated TDS Expert'
      ],
      recommended: true
    },
    {
      title: 'TDS Compliance Package',
      price: '₹9,999/year',
      description: 'Complete TDS compliance solution',
      features: [
        'All TDS Return Filings',
        'TDS Software License',
        'TDS Training',
        'Compliance Calendar',
        'Regular TDS Advisory',
        'Audit Support'
      ],
      recommended: false
    },
    {
      title: 'TDS Assessment Support',
      price: '₹4,999',
      description: 'Support during TDS assessment',
      features: [
        'Assessment Preparation',
        'Document Collection',
        'Representation Support',
        'Compliance Review',
        'Expert Consultation',
        'Follow-up Support'
      ],
      recommended: false
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">TDS Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive TDS solutions to ensure accurate tax deduction and timely compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tdsPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                plan.recommended ? 'border-blue-500' : 'border-gray-100'
              } hover:shadow-xl transition relative`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                  Recommended
                </div>
              )}
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
                <a 
                  href="#contact" 
                  className={`block w-full ${
                    plan.recommended 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  } text-white py-3 rounded-lg font-medium transition text-center`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our TDS Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of TDS experts ensures accurate deduction and timely filing of all TDS returns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                From deduction to filing, we handle all aspects of TDS compliance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Timely Filing</h3>
              <p className="text-gray-600">
                Never miss a TDS deadline with our proactive filing reminders and support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized assistance for all your TDS-related queries and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDSServices; 