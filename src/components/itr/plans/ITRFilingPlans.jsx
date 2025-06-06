import React from "react";

const plans = [
  {
    title: "Salary & House Property Plan",
    price: "₹499",
    originalPrice: "₹999",
    features: [
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
  {
    title: "Business & Professional Plan",
    price: "₹1,299",
    originalPrice: "₹1,999",
    features: [
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Business & Professional Income (Non Audit)",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
  {
    title: "Capital Gain Plan",
    price: "₹1,499",
    originalPrice: "₹2,249",
    features: [
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Capital Gain Income",
      "✓ Business & Professional Income (Non Audit)",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
  {
    title: "Future & Options Plan",
    price: "₹2,499",
    originalPrice: "₹3,499",
    features: [
      "✓ F&O Income/Loss (Non Audit)",
      "✓ Speculative Income",
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Capital Gain Income",
      "✓ Business & Professional Income (Non Audit)",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
  {
    title: "Crypto Currency Plan",
    price: "₹3,499",
    originalPrice: "₹4,999",
    features: [
      "✓ Crypto Income",
      "✓ F&O Income/Loss (Non Audit)",
      "✓ Speculative Income",
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Capital Gain Income",
      "✓ Business & Professional Income (Non Audit)",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
  {
    title: "NRI/Resident Having Foreign Income",
    price: "₹3,999",
    originalPrice: "₹5,999",
    features: [
      "✓ Foreign Salary (Including Foreign Tax relief)",
      "✓ DTAA Tax Relief",
      "✓ Salaried Income",
      "✓ House Property Income",
      "✓ Capital Gain Income",
      "✓ RSU/ESOP",
      "✓ Business & Professional Income (Non Audit)",
      "✓ Crypto Income",
      "✓ F&O Income/Loss (Non Audit)",
      "✓ Speculative Income",
      "✓ Income from Other Sources",
      "✓ Agriculture Income",
    ],
  },
];

const ITRFilingPlans = () => {
  return (
    <section className="py-20 bg-gray-50" id="itr-filing-plans">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-green-700 rounded-xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-green-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-sm line-through text-gray-500">
                {plan.originalPrice}
              </p>
              <p className="text-xl font-bold text-black mb-4">{plan.price} onwards</p>
              <p className="text-sm font-semibold text-gray-700 mb-2">Appropriate for</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITRFilingPlans;
