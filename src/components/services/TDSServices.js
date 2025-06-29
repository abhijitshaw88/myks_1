import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const ServiceSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const services = [
    { key: 'itr', label: 'ITR Filing', path: '/services/itr' },
    { key: 'tax-planning', label: 'Tax Planning', path: '/services/tax-planning' },
    { key: 'gst', label: 'GST Services', path: '/services/gst' },
    { key: 'tds', label: 'TDS/TCS Compliance', path: '/services/tds' },
    { key: 'notice', label: 'Notice Handling', path: '/services/notice' },
  ];
  const current = services.find(s => location.pathname.startsWith(s.path))?.key || 'itr';

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
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-200 bg-white dark:bg-navy shadow-md text-lg font-semibold text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
            className="hidden absolute left-0 right-0 mt-2 bg-white dark:bg-navy rounded-xl shadow-lg border border-gray-100 dark:border-gold z-20"
            style={{ minWidth: '100%' }}
            tabIndex={-1}
            role="listbox"
          >
            {services.map(s => (
              <li key={s.key} role="option" aria-selected={current === s.key}>
                <button
                  onClick={() => { navigate(s.path); document.getElementById('service-mobile-menu').classList.add('hidden'); }}
                  className={`w-full text-left px-6 py-3 flex items-center gap-3 text-base font-medium transition hover:bg-blue-50 dark:hover:bg-navy rounded-xl ${current === s.key ? 'bg-blue-100 text-blue-700 dark:bg-gold dark:text-navy' : 'text-navy dark:text-white'}`}
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
  const tdsServices = [
    {
      title: "TDS on Salary Payments (Form 24Q)",
      description: "We manage quarterly returns for salaries paid to employees, including tax computation, challan mapping, and Form 16 generation.",
      icon: "📑"
    },
    {
      title: "TDS on Property Transactions (Section 194IA / Form 26QB)",
      description: "If you're buying immovable property worth more than ₹50 lakhs, you're liable to deduct 1% TDS. We assist with Form 26QB filing, challan payment, PAN verification, and correction or revision in case of wrong PAN/details.",
      icon: "🏠"
    },
    {
      title: "TDS on Rent Payments (Section 194I / 26QC)",
      description: "Applicable on rent paid for commercial/residential properties exceeding ₹2.4 lakhs annually. We help with Form 26QC preparation and filing, HUF/individual deduction compliance, and generation of Form 16C for landlords.",
      icon: "🏢"
    },
    {
      title: "TDS on Commission or Brokerage (Section 194H)",
      description: "If you're paying commission, referral fees, or brokerage exceeding ₹15,000 per annum, we assist in TDS deduction and return filing under 26Q, Form 16A generation, and vendor PAN validation and challan tracking.",
      icon: "💼"
    },
    {
      title: "TDS on Professional & Contractual Services (Section 194J / 194C)",
      description: "We handle TDS return filing for service payments to professionals, freelancers, contractors, etc., under applicable sections.",
      icon: "🧾"
    }
  ];

  const keyFeatures = [
    "Quarterly Return Filing – Forms 24Q, 26Q, 27Q, 27EQ",
    "Form 16/16A Generation – Professionally formatted and auto-emailed",
    "Correction & Rectification – File revised statements and fix past errors",
    "TAN Registration Assistance – Apply and track your TAN online",
    "Bulk PAN Verification – Eliminate mismatches with TRACES validation",
    "TRACES Integration – Auto-import data from previously filed returns",
    "Dashboard Access – View all deductor information in one place",
    "Early Warning System – Get alerts for potential defaults and notices"
  ];

  const whoShouldUse = [
    "Individuals buying property",
    "Landlords collecting high-value rent",
    "Startups and MSMEs with vendor payments",
    "HR or payroll teams in mid-to-large enterprises",
    "CAs managing clients' TDS portfolios",
    "Real estate professionals and brokers",
    "Business owners with contractual/commission payments"
  ];

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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📥 TDS Return Filing Services</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Accurate Filing. Full Compliance. Expert Handling.</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            At myKarSahayak, we provide expert-led TDS Return Filing and compliance solutions for businesses, property buyers, 
            landlords, professionals, and NRIs. Whether you're deducting tax on salaries, property transactions, rent, or commissions, 
            we ensure timely and error-free filing – helping you avoid penalties and notices from the IT department.
          </p>
        </div>

        {/* Our TDS Services Cover */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">💼 Our TDS Services Cover:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {tdsServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🧮 Key Features of Our TDS Filing Services</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 mt-1">✅</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who Should Use This Service */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">👥 Who Should Use This Service?</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoShouldUse.map((user, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">✔</span>
                  <span className="text-gray-700 font-medium">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our TDS Service Plans</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tdsPlans.map((plan, index) => (
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
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">📩 Get a Personalized Quote Now</h3>
          <p className="text-lg mb-6">
            TDS requirements vary depending on transaction type, frequency, and compliance history. 
            Share your requirements, and our experts will provide a detailed proposal within 24 hours.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Personalized Quote
          </a>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technology Driven</h3>
              <p className="text-gray-600">
                We use advanced software and tools to ensure efficient TDS compliance.
              </p>
            </div>
          </div>
        </div>

        {/* TDS Compliance Dates and Information Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">📌 TDS Compliance Due Dates – FY 2025–26</h2>
            <p className="text-xl text-purple-100">Tax Deducted at Source (TDS) compliance is critical to avoid interest, penalties, and disallowance of expenses under the Income Tax Act. Below is the complete TDS Calendar for the Financial Year 2025–26, including payment and return filing deadlines.</p>
          </div>

          {/* TDS Payment Due Dates */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔹</span>
              TDS Payment Due Dates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Month</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date for TDS Payment (Non-Government Deductors)</th>
                  </tr>
                </thead>
                <tbody className="text-purple-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">April 2025</td>
                    <td className="py-3 px-4 font-semibold">7th May 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">May 2025</td>
                    <td className="py-3 px-4 font-semibold">7th June 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">June 2025</td>
                    <td className="py-3 px-4 font-semibold">7th July 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">July 2025</td>
                    <td className="py-3 px-4 font-semibold">7th August 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">August 2025</td>
                    <td className="py-3 px-4 font-semibold">7th September 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">September 2025</td>
                    <td className="py-3 px-4 font-semibold">7th October 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">October 2025</td>
                    <td className="py-3 px-4 font-semibold">7th November 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">November 2025</td>
                    <td className="py-3 px-4 font-semibold">7th December 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">December 2025</td>
                    <td className="py-3 px-4 font-semibold">7th January 2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">January 2026</td>
                    <td className="py-3 px-4 font-semibold">7th February 2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">February 2026</td>
                    <td className="py-3 px-4 font-semibold">7th March 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">March 2026</td>
                    <td className="py-3 px-4 font-semibold">30th April 2026 (for deductions made in March)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="text-purple-100 text-sm">
                <strong>📌 Note:</strong> For government deductors depositing without challan – due date is same day; with challan – within 7 days from end of month.
              </p>
            </div>
          </div>

          {/* TDS Return Filing Due Dates */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📌</span>
              TDS Return Filing Due Dates (Form 26Q/24Q/27Q)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Quarter</th>
                    <th className="text-left py-3 px-4 font-semibold">Period</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody className="text-purple-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Q1</td>
                    <td className="py-3 px-4">April – June 2025</td>
                    <td className="py-3 px-4 font-semibold">31st July 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Q2</td>
                    <td className="py-3 px-4">July – September 2025</td>
                    <td className="py-3 px-4 font-semibold">31st October 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Q3</td>
                    <td className="py-3 px-4">October – December 2025</td>
                    <td className="py-3 px-4 font-semibold">31st January 2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Q4</td>
                    <td className="py-3 px-4">January – March 2026</td>
                    <td className="py-3 px-4 font-semibold">31st May 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-purple-100 text-sm">
                  <strong>📄 Form 26Q:</strong> TDS on payments other than salaries
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-purple-100 text-sm">
                  <strong>📄 Form 24Q:</strong> TDS on salaries
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-purple-100 text-sm">
                  <strong>📄 Form 27Q:</strong> TDS on payments to non-residents
                </p>
              </div>
            </div>
          </div>

          {/* Form 16 & Form 16A Issuance Due Dates */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔸</span>
              Form 16 & Form 16A Issuance Due Dates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/10 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Certificate</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Applicable For</th>
                  </tr>
                </thead>
                <tbody className="text-purple-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Form 16</td>
                    <td className="py-3 px-4 font-semibold">15th June 2026</td>
                    <td className="py-3 px-4">Salaried employees (Form 24Q)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Form 16A</td>
                    <td className="py-3 px-4 font-semibold">Within 15 days from filing TDS return</td>
                    <td className="py-3 px-4">Non-salary TDS (Form 26Q/27Q)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Penalties for Delay */}
          <div className="mb-8 bg-red-500/20 rounded-lg p-6 border border-red-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🛑</span>
              Penalties for Delay
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">Default</th>
                    <th className="text-left py-3 px-4 font-semibold">Penalty/Interest</th>
                  </tr>
                </thead>
                <tbody className="text-purple-100">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Late TDS Payment</td>
                    <td className="py-3 px-4">Interest @1.5% per month</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Late TDS Return Filing</td>
                    <td className="py-3 px-4">₹200 per day (u/s 234E), up to the TDS amount</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Non-filing or incorrect filing</td>
                    <td className="py-3 px-4">Penalty u/s 271H – Min ₹10,000 up to ₹1,00,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Disallowance of expense</td>
                    <td className="py-3 px-4">30% of the expense may be disallowed under IT Act</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TDS Compliance Best Practices */}
          <div className="mb-8 bg-green-500/20 rounded-lg p-6 border border-green-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">✅</span>
              TDS Compliance Best Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="mr-2 mt-1">💡</span>
                <span className="text-purple-100">Deduct TDS at applicable rates at the time of credit or payment, whichever is earlier.</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">🔁</span>
                <span className="text-purple-100">Reconcile challans with TRACES regularly.</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">🧾</span>
                <span className="text-purple-100">Issue TDS certificates within the due dates.</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">🔍</span>
                <span className="text-purple-100">Monitor PAN errors to avoid default notices.</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
              <span className="mr-2">💼</span>
              Need Help With TDS Filing, TRACES Corrections, or Form 16 Generation?
            </h3>
            <p className="text-purple-100 mb-4">
              Our expert team is here to help you stay compliant and avoid penalties. Get in touch for personalized TDS solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDSServices; 