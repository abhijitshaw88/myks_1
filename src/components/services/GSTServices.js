import React from 'react';
import { ServiceSelector } from './TDSServices';

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
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
                <a 
                  href="#contact" 
                  className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition text-center"
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

        {/* GST Compliance Dates and Information Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">📅 Important GST Dates & Compliance Calendar for FY 2025–26</h2>
            <p className="text-xl text-green-100">Stay on top of your GST compliance! Here is a complete list of important GST due dates and filing deadlines for various returns and forms under the Goods and Services Tax regime for the Financial Year 2025–26.</p>
          </div>

          {/* Monthly & Quarterly GST Return Filing Due Dates */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔹</span>
              Monthly & Quarterly GST Return Filing Due Dates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Form</th>
                    <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold">Filing Frequency</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody className="text-green-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-1</td>
                    <td className="py-3 px-4">Details of outward supplies (sales)</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">11th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-1</td>
                    <td className="py-3 px-4">Quarterly outward supplies (QRMP)</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 font-semibold">13th of month after quarter ends</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">IFF</td>
                    <td className="py-3 px-4">Upload B2B invoices (QRMP users)</td>
                    <td className="py-3 px-4">Monthly (Opt-in)</td>
                    <td className="py-3 px-4 font-semibold">13th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-3B</td>
                    <td className="py-3 px-4">Summary return & tax payment</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">20th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-3B</td>
                    <td className="py-3 px-4">Summary return (QRMP – Category X States/UTs)</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 font-semibold">22nd of month after quarter ends</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-3B</td>
                    <td className="py-3 px-4">Summary return (QRMP – Category Y States/UTs)</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 font-semibold">24th of month after quarter ends</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">CMP-08</td>
                    <td className="py-3 px-4">Composition scheme tax payment</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 font-semibold">18th of month after quarter ends</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-4</td>
                    <td className="py-3 px-4">Annual return for composition taxpayers</td>
                    <td className="py-3 px-4">Annual</td>
                    <td className="py-3 px-4 font-semibold">30th June 2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-5</td>
                    <td className="py-3 px-4">Return by non-resident taxable persons</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">13th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-5A</td>
                    <td className="py-3 px-4">OIDAR service providers return</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">20th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-6</td>
                    <td className="py-3 px-4">ISD return (Input Service Distributor)</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">13th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-7</td>
                    <td className="py-3 px-4">TDS under GST</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">10th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-8</td>
                    <td className="py-3 px-4">TCS by e-commerce operators</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 font-semibold">10th of next month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">GSTR-9</td>
                    <td className="py-3 px-4">Annual return for regular taxpayers</td>
                    <td className="py-3 px-4">Annual</td>
                    <td className="py-3 px-4 font-semibold">31st December 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">GSTR-9C</td>
                    <td className="py-3 px-4">Self-certified reconciliation statement</td>
                    <td className="py-3 px-4">Annual</td>
                    <td className="py-3 px-4 font-semibold">31st December 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* One-Time or Periodic GST Compliance Forms */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔹</span>
              One-Time or Periodic GST Compliance Forms
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Form</th>
                    <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody className="text-green-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">CMP-02</td>
                    <td className="py-3 px-4">Opt into composition scheme</td>
                    <td className="py-3 px-4 font-semibold">31st March 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">ITC-03</td>
                    <td className="py-3 px-4">ITC reversal on opting into composition scheme</td>
                    <td className="py-3 px-4 font-semibold">31st May 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">CMP-03</td>
                    <td className="py-3 px-4">Declaration of stock held on opting into composition</td>
                    <td className="py-3 px-4 font-semibold">Within 90 days of CMP-02</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">ITC-04 (Half-yearly)</td>
                    <td className="py-3 px-4">Job work details (Turnover &gt; ₹5 Cr)</td>
                    <td className="py-3 px-4 font-semibold">25th April 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">ITC-04 (Yearly)</td>
                    <td className="py-3 px-4">Job work details (Turnover ≤ ₹5 Cr)</td>
                    <td className="py-3 px-4 font-semibold">25th April 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">TRAN-01</td>
                    <td className="py-3 px-4">Transfer of pre-GST credit</td>
                    <td className="py-3 px-4 font-semibold">As notified</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">TRAN-02</td>
                    <td className="py-3 px-4">Transitional input tax credit (no invoice)</td>
                    <td className="py-3 px-4 font-semibold">Within 1 month of TRAN-01</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">RFD-11 (LUT)</td>
                    <td className="py-3 px-4">Export without payment of IGST</td>
                    <td className="py-3 px-4 font-semibold">31st March 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Advance Tax Payment */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🟨</span>
              Advance Tax Payment (Composition Taxpayers)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Quarter</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody className="text-green-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">April – June 2025</td>
                    <td className="py-3 px-4 font-semibold">18th July 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">July – September 2025</td>
                    <td className="py-3 px-4 font-semibold">18th October 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">October – December 2025</td>
                    <td className="py-3 px-4 font-semibold">18th January 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">January – March 2026</td>
                    <td className="py-3 px-4 font-semibold">18th April 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Filing Reminders */}
          <div className="mb-8 bg-yellow-500/20 rounded-lg p-6 border border-yellow-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">✅</span>
              Filing Reminders
            </h3>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                File GSTR-1 and GSTR-3B monthly by the 11th and 20th respectively, if not under QRMP.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                QRMP taxpayers must submit quarterly returns and optionally use IFF for B2B invoices.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Composition taxpayers must file CMP-08 quarterly and GSTR-4 annually.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Annual returns (GSTR-9/9C) are due by 31st December 2026 for FY 2025–26.
              </li>
            </ul>
          </div>

          {/* Tips to Stay Compliant */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📝</span>
              Tips to Stay Compliant
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span className="text-green-100">Enable auto-reminders and digital filing tools.</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span className="text-green-100">Always reconcile GSTR-2B before claiming ITC in GSTR-3B.</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span className="text-green-100">File NIL returns even if there is no business activity.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTServices; 