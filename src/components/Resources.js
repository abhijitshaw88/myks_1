import React, { useState } from 'react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('itr');

  const tabs = [
    { id: 'itr', label: 'ITR Filing', icon: '📅' },
    { id: 'gst', label: 'GST Compliance', icon: '📊' },
    { id: 'tds', label: 'TDS Compliance', icon: '📌' }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📚 Tax Compliance Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with all important due dates, compliance requirements, and filing deadlines for FY 2025-26. 
            Never miss a deadline again with our comprehensive resource center.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200 flex flex-col gap-2 w-64">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white scale-105 shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}
                `}
              >
                <span className={`text-2xl ${activeTab === tab.id ? 'text-white' : tab.id === 'gst' ? 'text-pink-500' : tab.id === 'tds' ? 'text-pink-500' : 'text-blue-500'}`}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ITR Filing Section */}
        {activeTab === 'itr' && (
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">📅 ITR Filing Due Dates - FY 2024–25 (AY 2025–26)</h2>
              <p className="text-xl text-blue-100">Stay compliant. File on time. Maximize your tax refund.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
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
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🗓</span>
                  Latest ITR Filing Due Dates
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
        )}

        {/* GST Compliance Section */}
        {activeTab === 'gst' && (
          <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">📊 GST Compliance Calendar - FY 2025–26</h2>
              <p className="text-xl text-green-100">Stay on top of your GST compliance with complete filing deadlines.</p>
            </div>
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔹</span>
                Monthly & Quarterly GST Return Filing Due Dates
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔹</span>
                One-Time or Periodic GST Compliance Forms
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
                      <td className="py-3 px-4">Job work details (Turnover &gt; 95 Cr)</td>
                      <td className="py-3 px-4 font-semibold">25th April 2025</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">ITC-04 (Yearly)</td>
                      <td className="py-3 px-4">Job work details (Turnover  95 Cr)</td>
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
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🟨</span>
                Advance Tax Payment (Composition Taxpayers)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📝</span>
                Tips to Stay Compliant
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="mr-2 mt-1">💡</span>
                  <span className="text-green-100">Enable auto-reminders and digital filing tools.</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">🔁</span>
                  <span className="text-green-100">Always reconcile GSTR-2B before claiming ITC in GSTR-3B.</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">🧾</span>
                  <span className="text-green-100">Issue TDS certificates within the due dates.</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">🔍</span>
                  <span className="text-green-100">Monitor PAN errors to avoid default notices.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TDS Compliance Section */}
        {activeTab === 'tds' && (
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">📌 TDS Compliance Due Dates - FY 2025–26</h2>
              <p className="text-xl text-purple-100">Complete TDS Calendar for payment and return filing deadlines.</p>
            </div>
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔹</span>
                TDS Payment Due Dates
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">Month</th>
                      <th className="text-left py-3 px-4 font-semibold">Due Date for TDS Payment</th>
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
                      <td className="py-3 px-4 font-semibold">30th April 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📌</span>
                TDS Return Filing Due Dates (Form 26Q/24Q/27Q)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
            </div>
            <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔸</span>
                Form 16 & Form 16A Issuance Due Dates
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources; 