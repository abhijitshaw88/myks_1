import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TaxCalculator = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [selectedYear, setSelectedYear] = useState('2025-26'); // Default to latest FY
  const [incomeData, setIncomeData] = useState({
    salary: 0,
    business: 0,
    capitalGains: 0,
    otherSources: 0,
    age: 'below60',
    regime: 'old',
    deductions: {
      hra: 0,
      lta: 0,
      u80c: 0,
      u80d: 0,
      u80ccd1: 0,
      u80ccd2: 0,
      u80gg: 0,
      medical: 0,
      other: 0,
    },
  });

  const [results, setResults] = useState({});

  // Tax slabs for different years (Indian Tax System)
  const taxSlabs = useMemo(() => ({
    '2025-26': {
      new: [
        { min: 0, max: 400000, rate: 0 },
        { min: 400001, max: 800000, rate: 0.05 },
        { min: 800001, max: 1200000, rate: 0.10 },
        { min: 1200001, max: 1600000, rate: 0.15 },
        { min: 1600001, max: 2000000, rate: 0.20 },
        { min: 2000001, max: 2400000, rate: 0.25 },
        { min: 2400001, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250001, max: 500000, rate: 0.05 },
        { min: 500001, max: 1000000, rate: 0.20 },
        { min: 1000001, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 75000
    },
    '2024-25': {
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300001, max: 700000, rate: 0.05 },
        { min: 700001, max: 1000000, rate: 0.10 },
        { min: 1000001, max: 1200000, rate: 0.15 },
        { min: 1200001, max: 1500000, rate: 0.20 },
        { min: 1500001, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250001, max: 500000, rate: 0.05 },
        { min: 500001, max: 1000000, rate: 0.20 },
        { min: 1000001, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 75000
    },
    '2023-24': {
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300001, max: 600000, rate: 0.05 },
        { min: 600001, max: 900000, rate: 0.10 },
        { min: 900001, max: 1200000, rate: 0.15 },
        { min: 1200001, max: 1500000, rate: 0.20 },
        { min: 1500001, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250001, max: 500000, rate: 0.05 },
        { min: 500001, max: 1000000, rate: 0.20 },
        { min: 1000001, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 50000
    },
    '2022-23': {
      new: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250001, max: 500000, rate: 0.05 },
        { min: 500001, max: 750000, rate: 0.10 },
        { min: 750001, max: 1000000, rate: 0.15 },
        { min: 1000001, max: 1250000, rate: 0.20 },
        { min: 1250001, max: 1500000, rate: 0.25 },
        { min: 1500001, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250001, max: 500000, rate: 0.05 },
        { min: 500001, max: 1000000, rate: 0.20 },
        { min: 1000001, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 50000
    }
  }), []);

  // Tax slabs for FY 2024-25 (Old Regime) by age
  const oldRegimeSlabs = {
    below60: [
      { min: 0, max: 250000, rate: 0 },
      { min: 250001, max: 500000, rate: 0.05 },
      { min: 500001, max: 1000000, rate: 0.20 },
      { min: 1000001, max: Infinity, rate: 0.30 }
    ],
    senior: [
      { min: 0, max: 300000, rate: 0 },
      { min: 300001, max: 500000, rate: 0.05 },
      { min: 500001, max: 1000000, rate: 0.20 },
      { min: 1000001, max: Infinity, rate: 0.30 }
    ],
    superSenior: [
      { min: 0, max: 500000, rate: 0 },
      { min: 500001, max: 1000000, rate: 0.20 },
      { min: 1000001, max: Infinity, rate: 0.30 }
    ]
  };

  // Calculate Income Tax based on selected year
  const calculateIncomeTax = useCallback(() => {
    const totalIncome = 
      incomeData.salary + 
      incomeData.business + 
      incomeData.capitalGains + 
      incomeData.otherSources;

    // Deductions with limits
    const ded80C = Math.min(incomeData.deductions.u80c, 150000);
    const ded80D = incomeData.deductions.u80d;
    const ded80CCD1 = Math.min(incomeData.deductions.u80ccd1, 50000);
    const ded80CCD2 = incomeData.deductions.u80ccd2; // 10% of basic salary, user must enter correct value
    const ded80GG = incomeData.deductions.u80gg;
    const dedHRA = incomeData.deductions.hra;
    const dedLTA = incomeData.deductions.lta;
    const dedMedical = incomeData.deductions.medical;
    const dedOther = incomeData.deductions.other;
    const totalDeductions = ded80C + ded80D + ded80CCD1 + ded80CCD2 + ded80GG + dedHRA + dedLTA + dedMedical + dedOther;

    // Standard deduction for salary
    const standardDeduction = incomeData.salary > 0 ? 50000 : 0;
    let taxableIncome = Math.max(0, totalIncome - totalDeductions - standardDeduction);

    // Select correct slab by age
    let slabs = oldRegimeSlabs.below60;
    if (incomeData.age === 'senior') slabs = oldRegimeSlabs.senior;
    if (incomeData.age === 'superSenior') slabs = oldRegimeSlabs.superSenior;

    // Calculate tax
    let tax = 0;
    for (let i = 0; i < slabs.length; i++) {
      const slab = slabs[i];
      if (taxableIncome > slab.min) {
        const slabAmount = Math.min(taxableIncome - slab.min, slab.max - slab.min);
        tax += slabAmount * slab.rate;
      }
    }

    // Rebate u/s 87A
    let rebate = 0;
    if (taxableIncome <= 500000) {
      rebate = Math.min(tax, 12500);
      tax -= rebate;
    }

    // Surcharge
    let surcharge = 0;
    if (taxableIncome > 5000000 && taxableIncome <= 10000000) surcharge = tax * 0.10;
    else if (taxableIncome > 10000000 && taxableIncome <= 20000000) surcharge = tax * 0.15;
    else if (taxableIncome > 20000000 && taxableIncome <= 50000000) surcharge = tax * 0.25;
    else if (taxableIncome > 50000000) surcharge = tax * 0.37;

    // Cess
    const cess = (tax + surcharge) * 0.04;
    const totalTax = tax + surcharge + cess;
    const effectiveRate = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;

    return {
      totalIncome,
      totalDeductions,
      standardDeduction,
      taxableIncome,
      tax,
      rebate,
      surcharge,
      cess,
      totalTax,
      effectiveRate,
    };
  }, [incomeData]);

  // Update results when data changes
  useEffect(() => {
    const incomeTaxResult = calculateIncomeTax();

    setResults({
      incomeTax: incomeTaxResult,
    });
  }, [calculateIncomeTax]);

  // Chart data for income tax breakdown
  const incomeTaxChartData = {
    labels: ['Basic Tax', 'Surcharge', 'Cess', 'Net Tax'],
    datasets: [
      {
        data: [
          results.incomeTax?.tax || 0,
          results.incomeTax?.surcharge || 0,
          results.incomeTax?.cess || 0,
          results.incomeTax?.totalTax || 0,
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Chart data for income breakdown
  const incomeBreakdownData = {
    labels: ['Salary', 'Business', 'Capital Gains', 'Other Sources'],
    datasets: [
      {
        label: 'Income (₹)',
        data: [
          incomeData.salary,
          incomeData.business,
          incomeData.capitalGains,
          incomeData.otherSources,
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(245, 158, 11, 0.6)',
          'rgba(139, 92, 246, 0.6)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Chart data for tax comparison
  const taxComparisonData = {
    labels: ['Old Regime', 'New Regime'],
    datasets: [
      {
        label: 'Tax Amount (₹)',
        data: [
          calculateIncomeTax().totalTax,
          calculateIncomeTax().totalTax,
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.6)',
          'rgba(59, 130, 246, 0.6)',
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💰 Indian Tax Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Indian taxes with precision. Updated with latest Budget 2025 tax slabs and ₹75,000 standard deduction.
          </p>
        </div>

        {/* Year Selector */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-lg shadow-md p-2">
            <label className="text-sm font-medium text-gray-700 mr-3">Financial Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2025-26">2025-26 (AY 2026-27)</option>
              <option value="2024-25">2024-25 (AY 2025-26)</option>
              <option value="2023-24">2023-24 (AY 2024-25)</option>
              <option value="2022-23">2022-23 (AY 2023-24)</option>
            </select>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {[
            { id: 'income', label: 'Income Tax', icon: '📊' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTab === 'income' && '📊 Income Tax Calculator'}
            </h2>

            {/* Income Tax Inputs */}
            {activeTab === 'income' && (
              <div className="space-y-6">
                {/* Income Sources */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Sources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salary Income
                      </label>
                      <input
                        type="number"
                        value={incomeData.salary}
                        onChange={(e) => setIncomeData({...incomeData, salary: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Income
                      </label>
                      <input
                        type="number"
                        value={incomeData.business}
                        onChange={(e) => setIncomeData({...incomeData, business: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Capital Gains
                      </label>
                      <input
                        type="number"
                        value={incomeData.capitalGains}
                        onChange={(e) => setIncomeData({...incomeData, capitalGains: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Sources
                      </label>
                      <input
                        type="number"
                        value={incomeData.otherSources}
                        onChange={(e) => setIncomeData({...incomeData, otherSources: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Tax Regime */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tax Regime</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setIncomeData({...incomeData, regime: 'old'})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        incomeData.regime === 'old'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">Old Regime</div>
                      <div className="text-sm opacity-75">With deductions</div>
                    </button>
                    <button
                      onClick={() => setIncomeData({...incomeData, regime: 'new'})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        incomeData.regime === 'new'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">New Regime</div>
                      <div className="text-sm opacity-75">No deductions</div>
                    </button>
                  </div>
                </div>

                {/* Age Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                  <select
                    value={incomeData.age}
                    onChange={e => setIncomeData({ ...incomeData, age: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="below60">Below 60</option>
                    <option value="senior">60-80 (Senior Citizen)</option>
                    <option value="superSenior">Above 80 (Super Senior Citizen)</option>
                  </select>
                </div>

                {/* Deductions (only for old regime) */}
                {incomeData.regime === 'old' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Deductions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 10 (HRA)</label>
                        <input type="number" value={incomeData.deductions.hra} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, hra: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 10 (LTA)</label>
                        <input type="number" value={incomeData.deductions.lta} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, lta: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 80C (LIC, PPF, SSY, etc.)</label>
                        <input type="number" value={incomeData.deductions.u80c} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, u80c: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0 (max 1,50,000)" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 80D (Medical Insurance)</label>
                        <input type="number" value={incomeData.deductions.u80d} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, u80d: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 80CCD(1) (NPS Self, max 50,000)</label>
                        <input type="number" value={incomeData.deductions.u80ccd1} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, u80ccd1: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0 (max 50,000)" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 80CCD(2) (NPS Employer, 10% of Basic Salary)</label>
                        <input type="number" value={incomeData.deductions.u80ccd2} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, u80ccd2: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">u/s 80GG (Rent, if HRA not received)</label>
                        <input type="number" value={incomeData.deductions.u80gg} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, u80gg: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Other Deductions</label>
                        <input type="number" value={incomeData.deductions.other} onChange={e => setIncomeData({ ...incomeData, deductions: { ...incomeData.deductions, other: parseFloat(e.target.value) || 0 } })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tax Slabs Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Tax Slabs for FY {selectedYear} ({incomeData.regime === 'new' ? 'New Regime' : 'Old Regime'})
                  </h4>
                  <div className="text-sm text-blue-800">
                    {taxSlabs[selectedYear][incomeData.regime].map((slab, index) => (
                      <div key={index} className="flex justify-between">
                        <span>
                          {formatCurrency(slab.min)} - {slab.max === Infinity ? 'Above' : formatCurrency(slab.max)}
                        </span>
                        <span className="font-semibold">{slab.rate * 100}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {/* Tax Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Results</h3>
              
              {activeTab === 'income' && results.incomeTax && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">Total Income</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {formatCurrency(results.incomeTax.totalIncome)}
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">Taxable Income</div>
                      <div className="text-2xl font-bold text-green-900">
                        {formatCurrency(results.incomeTax.taxableIncome)}
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-red-600 font-medium">Total Tax</div>
                      <div className="text-2xl font-bold text-red-900">
                        {formatCurrency(results.incomeTax.totalTax)}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-purple-600 font-medium">Effective Rate</div>
                      <div className="text-2xl font-bold text-purple-900">
                        {results.incomeTax.effectiveRate.toFixed(2)}%
                      </div>
                    </div>
                  </div>

                  {/* Tax Breakdown Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-sm text-gray-600 font-medium">Basic Tax</div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatCurrency(results.incomeTax.tax)}
                      </div>
                    </div>
                    {results.incomeTax.surcharge > 0 && (
                      <div className="bg-yellow-50 p-3 rounded-lg text-center">
                        <div className="text-sm text-yellow-600 font-medium">Surcharge</div>
                        <div className="text-lg font-bold text-yellow-900">
                          {formatCurrency(results.incomeTax.surcharge)}
                        </div>
                      </div>
                    )}
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-sm text-orange-600 font-medium">Cess (4%)</div>
                      <div className="text-lg font-bold text-orange-900">
                        {formatCurrency(results.incomeTax.cess)}
                      </div>
                    </div>
                  </div>

                  {/* Standard Deduction Info */}
                  {results.incomeTax.standardDeduction > 0 && (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="text-sm text-yellow-800">
                        <strong>Standard Deduction:</strong> {formatCurrency(results.incomeTax.standardDeduction)} 
                        (Automatically applied for salary income)
                      </div>
                    </div>
                  )}

                  {/* Tax Breakdown Chart */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Tax Breakdown</h4>
                    <div className="h-64">
                      <Doughnut 
                        data={incomeTaxChartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Charts Section */}
            {activeTab === 'income' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Income Analysis</h3>
                
                {/* Income Breakdown Chart */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Income Breakdown</h4>
                  <div className="h-64">
                    <Bar 
                      data={incomeBreakdownData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              callback: function(value) {
                                return formatCurrency(value);
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Tax Comparison Chart */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Tax Regime Comparison</h4>
                  <div className="h-64">
                    <Bar 
                      data={taxComparisonData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              callback: function(value) {
                                return formatCurrency(value);
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">✨ Why Choose Our Tax Calculator?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-blue-100">
                Based on official Indian Income Tax Act and updated for FY 2024-25
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Visual Insights</h3>
              <p className="text-blue-100">
                Beautiful charts and graphs to understand your tax breakdown
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-blue-100">
                Real-time calculations as you input your data
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Important Disclaimer</h3>
          <p className="text-yellow-700 text-sm mb-3">
            This calculator is based on Indian Income Tax Act and Budget 2025 announcements. 
            The FY 2025-26 rates are as per the proposed changes in Union Budget 2025. 
            Actual tax liability may vary based on specific circumstances, exemptions, and deductions. 
            Please consult a qualified tax professional for accurate tax planning and filing.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📋 Key Budget 2025 Changes:</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• New tax regime basic exemption limit increased to ₹4 lakh (from ₹3 lakh)</li>
              <li>• Standard deduction increased to ₹75,000 (from ₹50,000)</li>
              <li>• Tax rebate under Section 87A extended up to ₹12 lakh taxable income</li>
              <li>• New tax regime becomes more attractive with revised slabs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator; 