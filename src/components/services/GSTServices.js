import React from 'react';

const GSTServices = () => {
  const gstPlans = [
    {
      title: 'GST Registration - New',
      price: '₹1,499',
      description: 'New GST registration for businesses',
      features: [
        'GST Registration Application',
        'Document Collection & Verification',
        'Application Filing with GST Department',
        'GSTIN Generation',
        'Post Registration Support',
        'Basic GST Advisory'
      ],
      recommended: false
    },
    {
      title: 'GST Registration - Premium',
      price: '₹2,999',
      description: 'Complete GST registration with additional benefits',
      features: [
        'Everything in Basic Plan',
        'Priority Processing',
        'Digital Signature Certificate (DSC)',
        'GST Software Training',
        '3 Months Free GST Return Filing',
        'Extended Support Period'
      ],
      recommended: true
    },
    {
      title: 'GST Return Filing - Basic',
      price: '₹999/month',
      description: 'Monthly GST return filing for small businesses',
      features: [
        'GSTR-1 Filing',
        'GSTR-3B Filing',
        'Input Tax Credit Reconciliation',
        'GST Payment Support',
        'Return Filing Reminders',
        'Basic GST Advisory'
      ],
      recommended: false
    },
    {
      title: 'GST Return Filing - Premium',
      price: '₹1,999/month',
      description: 'Comprehensive GST return filing with additional services',
      features: [
        'Everything in Basic Plan',
        'GSTR-2A Reconciliation',
        'Monthly GST Reports',
        'GST Audit Support',
        'Priority Filing',
        'Dedicated GST Expert'
      ],
      recommended: false
    },
    {
      title: 'GST Annual Return',
      price: '₹4,999',
      description: 'Annual GST return filing (GSTR-9)',
      features: [
        'GSTR-9 Preparation & Filing',
        'Annual Reconciliation',
        'Audit Support',
        'Compliance Review',
        'Annual GST Report',
        'Expert Consultation'
      ],
      recommended: false
    },
    {
      title: 'GST Audit',
      price: '₹9,999',
      description: 'Complete GST audit services',
      features: [
        'GSTR-9C Preparation',
        'Detailed Reconciliation',
        'Audit Report Generation',
        'Compliance Review',
        'Expert Consultation',
        'Representation Support'
      ],
      recommended: false
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GST Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive GST solutions for businesses of all sizes. Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gstPlans.map((plan, index) => (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our GST Services?</h2>
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