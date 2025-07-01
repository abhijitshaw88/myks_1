import React from "react";

const plans = [
  {
    title: "Salary + 1 House Property Plan",
    price: "₹1,499",
    features: [
      "Income from Single or Multiple Employers",
      "One House Property",
      "Income from Other Sources",
      "Agricultural Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Salary + Multiple House Properties Plan",
    price: "₹1,799",
    features: [
      "Income from Single or Multiple Employers",
      "More than One House Property",
      "Income from Other Sources",
      "Agricultural Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Business & Professional Plan",
    price: "₹3,499",
    features: [
      "Salary + Multiple House Properties",
      "Business or Professional Income (Non-Audit, without B/S & P&L)",
      "Income from Other Sources",
      "Agricultural Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Capital Gains Plan",
    price: "₹3,999",
    features: [
      "Capital Gains (Shares, Mutual Funds, Property, etc.)",
      "Salary + Multiple House Properties",
      "Business or Professional Income (Non-Audit)",
      "Income from Other Sources & Agriculture",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Futures & Options (F&O) Plan",
    price: "₹5,999",
    features: [
      "F&O Trading Income/Loss (Non-Audit)",
      "Speculative Income",
      "Salary + Multiple House Properties",
      "Capital Gains",
      "Business/Professional Income",
      "Crypto & Agricultural Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Cryptocurrency Income Plan",
    price: "₹5,999",
    features: [
      "Crypto Income",
      "F&O & Speculative Income",
      "Salary + Multiple House Properties",
      "Capital Gains",
      "Business/Professional Income",
      "Other & Agricultural Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "NRI Plan – Indian Income",
    price: "₹5,999",
    features: [
      "NRIs with Indian Income (Salary, Rent, Capital Gains)",
      "RSU/ESOP, Crypto, F&O, Speculative Income",
      "Business/Professional Income",
      "Agricultural & Other Income",
    ],
    cta: "Get Started Now"
  },
  {
    title: "Resident with Foreign Income Plan",
    price: "₹8,999",
    features: [
      "Foreign Salary with DTAA & Tax Relief",
      "RSU/ESOP",
      "Crypto, F&O, Speculative Income",
      "Salary + Multiple House Properties",
      "Capital Gains + Business/Professional Income",
      "Agricultural & Other Income",
    ],
    cta: "Get Started Now"
  },
];

const ITRFilingPlans = () => {
  return (
    <section className="py-20 bg-gray-50" id="itr-filing-plans">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ITR Filing Plans – Based on Your Income Profile
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Pricing starts from the amount mentioned below.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-green-700 rounded-xl p-6 shadow hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  {plan.title}
                </h3>
                <div className="text-2xl font-bold text-black mb-4">{plan.price} <span className="text-base font-normal text-gray-500">onwards</span></div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Ideal For:</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITRFilingPlans;
