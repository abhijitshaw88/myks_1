import React from 'react';
import { ServiceSelector } from './TDSServices';

const TaxPlanningServices = () => {
  const taxPlanningFeatures = [
    {
      title: "Expert-Driven Assessment",
      description: "Get personalized guidance from experienced tax professionals who analyze your income structure, investments, deductions, and exemptions.",
      icon: "✅"
    },
    {
      title: "Customized Tax Plan",
      description: "Receive a detailed tax planning report tailored to your financial goals, employment structure, and eligible deductions under both Old and New Tax Regimes.",
      icon: "📑"
    },
    {
      title: "Optimize Savings",
      description: "Uncover legitimate and strategic tax-saving opportunities across various sections like 80C, 80D, 80CCD(1B), HRA, capital gains, home loans, and more.",
      icon: "💰"
    },
    {
      title: "Advance Tax Planning",
      description: "Plan your advance tax payments proactively based on your projected income, minimizing last-minute penalties or interest.",
      icon: "📅"
    }
  ];

  const idealFor = [
    {
      title: "Salaried Individuals",
      description: "Salary restructuring, HRA calculation, tax regime comparison, bonus planning, deductions maximization.",
      icon: "👤"
    },
    {
      title: "Business Owners & Professionals",
      description: "Profit optimization, capital asset planning, business expense deductions.",
      icon: "🏢"
    },
    {
      title: "NRIs",
      description: "DTAA implications, NRO/NRE income, investment repatriation, and residential status considerations.",
      icon: "🌍"
    },
    {
      title: "Investors",
      description: "Capital gains tax planning, tax loss harvesting, mutual fund & real estate-related strategies.",
      icon: "📈"
    }
  ];

  const taxPlanningSolutions = [
    "Individual Tax Planning",
    "Business & Self-Employed Tax Structuring",
    "Capital Gains & Property Sale Tax Planning",
    "NRI & Foreign Asset Tax Advisory",
    "Regime Comparison (Old vs. New)",
    "Advance Tax Calculation & Schedule",
    "HRA Bifurcation & Rent Optimization"
  ];

  const faqData = [
    {
      question: "When should I start tax planning?",
      answer: "Tax planning should ideally start at the beginning of the financial year (April) to maximize benefits throughout the year."
    },
    {
      question: "What are the main tax-saving investment options?",
      answer: "Popular options include ELSS, PPF, EPF, NPS, tax-saving FDs, and various insurance products under Section 80C."
    },
    {
      question: "How can businesses optimize their tax liability?",
      answer: "Businesses can optimize taxes through proper expense planning, depreciation strategies, and taking advantage of business deductions."
    },
    {
      question: "What is the difference between tax planning and tax evasion?",
      answer: "Tax planning is legal optimization of taxes through legitimate means, while tax evasion is illegal non-payment of taxes."
    },
    {
      question: "Do you provide year-round tax planning support?",
      answer: "Yes, we provide comprehensive year-round tax planning support with regular reviews and updates."
    },
    {
      question: "How often should I review my tax planning strategy?",
      answer: "We recommend quarterly reviews for businesses and at least twice a year for individuals to ensure optimal tax planning."
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📊 Tax Planning Services</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Smart Planning for Maximum Savings – Backed by Experts</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-6">
            At myKarSahayak, we provide comprehensive tax planning solutions for individuals, salaried professionals, businesses, and NRIs. 
            Our goal is simple — to help you strategically reduce your tax liability while staying fully compliant with current laws.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Our tax planning service isn't just about saving money — it's about creating a personalized roadmap for financial efficiency, 
            future planning, and peace of mind.
          </p>
        </div>

        {/* What You Get Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🎯 What You Get with myks Tax Planning</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {taxPlanningFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who is this Service Ideal For */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🧾 Who is this Service Ideal For?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {idealFor.map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h4 className="text-lg font-semibold text-gray-800">{category.title}</h4>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Tax Planning Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🗂 Types of Tax Planning Solutions We Offer:</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {taxPlanningSolutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700 font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">📩 Request a Custom Quote</h3>
          <p className="text-lg mb-6">
            Our pricing is customized based on the nature and complexity of your tax profile. 
            Share a few details, and our experts will reach out with a quote and timeline—within 24 hours.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Custom Quote
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Tax Planning Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Advisors</h3>
              <p className="text-gray-600">
                Our team of certified tax professionals provides personalized tax planning strategies tailored to your needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Comprehensive Approach</h3>
              <p className="text-gray-600">
                We take a holistic approach to tax planning, considering all aspects of your financial situation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                Stay informed about the latest tax laws and regulations with our regular updates and advisory services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our tax planning strategies have helped numerous clients save significant amounts on their tax liability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPlanningServices; 