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
      </div>
    </div>
  );
};

export default TDSServices; 