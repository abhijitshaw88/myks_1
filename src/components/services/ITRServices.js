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

        {/* ITR Filing Dates and Information Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">📅 ITR Filing Last Date for FY 2024–25 (AY 2025–26)</h2>
            <p className="text-xl text-blue-100">Stay compliant. File on time. Maximize your tax refund.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What is ITR Filing */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">✅</span>
                What Is ITR Filing?
              </h3>
              <p className="text-blue-100 mb-4">
                Filing your Income Tax Return (ITR) is a vital annual obligation for every taxpayer in India. It involves declaring all sources of income, claiming eligible deductions, reporting tax liabilities, and ensuring compliance with the Income Tax Act.
              </p>
              <p className="text-blue-100 mb-4">
                Whether you are a salaried employee, self-employed, business owner, or investor, filing your return on time helps you:
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Avoid penalties and interest
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Claim refunds faster
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Carry forward losses
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Maintain a clean tax record
                </li>
              </ul>
            </div>

            {/* Due Dates Table */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🗓</span>
                Latest ITR Filing Due Dates (FY 2024–25 / AY 2025–26)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 font-semibold">Category of Taxpayer</th>
                      <th className="text-left py-2 font-semibold">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-100">
                    <tr className="border-b border-white/10">
                      <td className="py-2">Individuals / HUF / AOP / BOI (Non-Audit Cases)</td>
                      <td className="py-2 font-semibold">15th September 2025 (Extended)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Businesses Requiring Audit</td>
                      <td className="py-2 font-semibold">31st October 2025</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Businesses with Transfer Pricing Reports</td>
                      <td className="py-2 font-semibold">30th November 2025</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Belated / Revised Return</td>
                      <td className="py-2 font-semibold">31st December 2025</td>
                    </tr>
                    <tr>
                      <td className="py-2">Updated Return (ITR-U)</td>
                      <td className="py-2 font-semibold">31st March 2030</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Penalties Section */}
          <div className="mt-8 bg-red-500/20 rounded-lg p-6 border border-red-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🚨</span>
              Missed the Deadline? Here's What Happens
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Interest under Section 234A:</h4>
                <p className="text-blue-100">1% per month on unpaid tax.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Late Filing Fee under Section 234F:</h4>
                <ul className="text-blue-100 space-y-1">
                  <li>• ₹5,000 if total income &gt; ₹5 lakh</li>
                  <li>• ₹1,000 if total income ≤ ₹5 lakh</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Loss Adjustment Denied:</h4>
              <p className="text-blue-100">
                You cannot carry forward losses from business, property, capital gains, etc., if you miss the original due date.
              </p>
            </div>
          </div>

          {/* Filing Start Date and Forms */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📤</span>
                When Did ITR Filing Start for FY 2024–25?
              </h3>
              <p className="text-blue-100 mb-4">
                Although ITR filing usually begins on April 1st, this year the Excel utilities for ITR-1 & ITR-4 were released on 30th May 2025 due to changes in return forms and backend systems.
              </p>
              <p className="text-blue-100">
                As of June 2025, taxpayers can start e-filing their returns for the assessment year 2025–26.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Which Forms Are Available?
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <strong>ITR-1 (Sahaj)</strong> – For salaried individuals with income up to ₹50 lakh
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <strong>ITR-4 (Sugam)</strong> – For individuals, HUFs, and firms under presumptive taxation
                  </div>
                </li>
              </ul>
              <p className="text-blue-100 mt-4">
                More ITR utilities will be released in phases by the Income Tax Department.
              </p>
            </div>
          </div>

          {/* Options if Missed Deadline */}
          <div className="mt-8 bg-yellow-500/20 rounded-lg p-6 border border-yellow-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔁</span>
              Missed the Due Date? Here Are Your Options
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">✳</span>
                  Belated Return (U/s 139(4))
                </h4>
                <p className="text-blue-100 text-sm">
                  You can still file your return after the due date, up to 31st December 2025, with applicable late fee and interest. Deductions can still be claimed, but losses cannot be carried forward.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">✏</span>
                  Revised Return (U/s 139(5))
                </h4>
                <p className="text-blue-100 text-sm">
                  If you've made a mistake in your original ITR, you can revise it until 31st December 2025.
                </p>
                <p className="text-blue-100 text-sm mt-2">
                  <strong>Example:</strong> Mr. X filed ITR on 30th June 2025. On 1st August, he noticed he missed claiming HRA. He can file a revised return by 31st December 2025 to fix this.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">🔄</span>
                  Updated Return (ITR-U)
                </h4>
                <p className="text-blue-100 text-sm">
                  Even if you miss the belated deadline, you can file an Updated Return within 2 years (up to 31st March 2030 for AY 2025–26), provided it complies with Section 139(8A) conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Advance Tax Payment */}
          <div className="mt-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">💰</span>
              Advance Tax Payment Due Dates (FY 2025–26)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 font-semibold">Due Date</th>
                    <th className="text-left py-2 font-semibold">Installment</th>
                    <th className="text-left py-2 font-semibold">Tax to Be Paid</th>
                  </tr>
                </thead>
                <tbody className="text-blue-100">
                  <tr className="border-b border-white/10">
                    <td className="py-2">15th June 2025</td>
                    <td className="py-2">First Instalment</td>
                    <td className="py-2 font-semibold">15% of tax liability</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2">15th September 2025</td>
                    <td className="py-2">Second Instalment</td>
                    <td className="py-2 font-semibold">45% of tax liability</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2">15th December 2025</td>
                    <td className="py-2">Third Instalment</td>
                    <td className="py-2 font-semibold">75% of tax liability</td>
                  </tr>
                  <tr>
                    <td className="py-2">15th March 2026</td>
                    <td className="py-2">Final Instalment / Presumptive</td>
                    <td className="py-2 font-semibold">100% of tax liability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FY vs AY Explanation */}
          <div className="mt-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📚</span>
              Understanding FY vs AY
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Financial Year (FY):</h4>
                <p className="text-blue-100">
                  Year when income is earned – e.g., FY 2024–25 (1 April 2024 to 31 March 2025)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Assessment Year (AY):</h4>
                <p className="text-blue-100">
                  Year when income is assessed and taxed – e.g., AY 2025–26 (1 April 2025 to 31 March 2026)
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose myKarSahayak */}
          <div className="mt-8 bg-green-500/20 rounded-lg p-6 border border-green-400/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">💼</span>
              Why File with myKarSahayak?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="mr-2">🚀</span>
                <span className="text-blue-100">100% Accuracy</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📄</span>
                <span className="text-blue-100">Zero Data Entry Hassle</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🙌</span>
                <span className="text-blue-100">No Stress from Tax Notices</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🧾</span>
                <span className="text-blue-100">Claim Maximum Refunds</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💬</span>
                <span className="text-blue-100">Real Experts, Real Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITRServices; 