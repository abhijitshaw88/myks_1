import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
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
  const [selectedYear, setSelectedYear] = useState('2024-25'); // Default to current FY
  const [incomeData, setIncomeData] = useState({
    salary: 0,
    business: 0,
    capitalGains: 0,
    otherSources: 0,
    age: 'below60',
    regime: 'new',
    deductions: {
      hra: 0,
      lta: 0,
      medical: 0,
      nps: 0,
      elss: 0,
      homeLoan: 0,
      insurance: 0,
      other: 0,
    },
  });

  const [gstData, setGstData] = useState({
    turnover: 0,
    category: 'regular',
    state: 'interstate',
  });

  const [tdsData, setTdsData] = useState({
    payment: 0,
    category: 'salary',
    pan: 'individual',
  });

  const [results, setResults] = useState({});

  // Tax slabs for different years (Indian Tax System)
  const taxSlabs = {
    '2024-25': {
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 600000, rate: 0.05 },
        { min: 600000, max: 900000, rate: 0.10 },
        { min: 900000, max: 1200000, rate: 0.15 },
        { min: 1200000, max: 1500000, rate: 0.20 },
        { min: 1500000, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 0.05 },
        { min: 500000, max: 1000000, rate: 0.20 },
        { min: 1000000, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 50000
    },
    '2023-24': {
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 600000, rate: 0.05 },
        { min: 600000, max: 900000, rate: 0.10 },
        { min: 900000, max: 1200000, rate: 0.15 },
        { min: 1200000, max: 1500000, rate: 0.20 },
        { min: 1500000, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 0.05 },
        { min: 500000, max: 1000000, rate: 0.20 },
        { min: 1000000, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 50000
    },
    '2022-23': {
      new: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 0.05 },
        { min: 500000, max: 750000, rate: 0.10 },
        { min: 750000, max: 1000000, rate: 0.15 },
        { min: 1000000, max: 1250000, rate: 0.20 },
        { min: 1250000, max: 1500000, rate: 0.25 },
        { min: 1500000, max: Infinity, rate: 0.30 }
      ],
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 0.05 },
        { min: 500000, max: 1000000, rate: 0.20 },
        { min: 1000000, max: Infinity, rate: 0.30 }
      ],
      standardDeduction: 50000
    }
  };

  // Calculate Income Tax based on selected year
  const calculateIncomeTax = () => {
    const totalIncome = 
      incomeData.salary + 
      incomeData.business + 
      incomeData.capitalGains + 
      incomeData.otherSources;

    const currentSlabs = taxSlabs[selectedYear];
    const totalDeductions = Object.values(incomeData.deductions).reduce((sum, val) => sum + val, 0);
    
    let taxableIncome;
    if (incomeData.regime === 'new') {
      // New Tax Regime - No deductions except standard deduction for salary
      const standardDeduction = incomeData.salary > 0 ? currentSlabs.standardDeduction : 0;
      taxableIncome = Math.max(0, totalIncome - standardDeduction);
    } else {
      // Old Tax Regime - All deductions allowed
      const standardDeduction = incomeData.salary > 0 ? currentSlabs.standardDeduction : 0;
      taxableIncome = Math.max(0, totalIncome - totalDeductions - standardDeduction);
    }

    let tax = 0;
    const slabs = incomeData.regime === 'new' ? currentSlabs.new : currentSlabs.old;

    for (let i = 0; i < slabs.length; i++) {
      const slab = slabs[i];
      if (taxableIncome > slab.min) {
        const slabAmount = Math.min(taxableIncome - slab.min, slab.max - slab.min);
        tax += slabAmount * slab.rate;
      }
    }

    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    const effectiveRate = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;

    return {
      totalIncome,
      totalDeductions,
      standardDeduction: incomeData.salary > 0 ? currentSlabs.standardDeduction : 0,
      taxableIncome,
      tax,
      cess,
      totalTax,
      effectiveRate,
      year: selectedYear,
    };
  };

  // Calculate GST
  const calculateGST = () => {
    const turnover = gstData.turnover;
    let gstRate = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;

    if (gstData.category === 'regular') {
      gstRate = 0.18; // 18% GST
    } else if (gstData.category === 'composition') {
      gstRate = 0.01; // 1% for composition
    }

    const gstAmount = turnover * gstRate;

    if (gstData.state === 'intrastate') {
      cgst = gstAmount / 2;
      sgst = gstAmount / 2;
    } else {
      igst = gstAmount;
    }

    return {
      turnover,
      gstRate: gstRate * 100,
      gstAmount,
      cgst,
      sgst,
      igst,
    };
  };

  // Calculate TDS
  const calculateTDS = () => {
    const payment = tdsData.payment;
    let tdsRate = 0;

    if (tdsData.category === 'salary') {
      tdsRate = 0.10; // 10% for salary
    } else if (tdsData.category === 'professional') {
      tdsRate = 0.10; // 10% for professional services
    } else if (tdsData.category === 'rent') {
      tdsRate = 0.10; // 10% for rent
    } else if (tdsData.category === 'contractor') {
      tdsRate = 0.01; // 1% for contractor
    }

    const tdsAmount = payment * tdsRate;

    return {
      payment,
      tdsRate: tdsRate * 100,
      tdsAmount,
      netAmount: payment - tdsAmount,
    };
  };

  // Update results when data changes
  useEffect(() => {
    const incomeTaxResult = calculateIncomeTax();
    const gstResult = calculateGST();
    const tdsResult = calculateTDS();

    setResults({
      incomeTax: incomeTaxResult,
      gst: gstResult,
      tds: tdsResult,
    });
  }, [incomeData, gstData, tdsData, selectedYear]);

  // Chart data for income tax breakdown
  const incomeTaxChartData = {
    labels: ['Basic Tax', 'Cess', 'Net Tax'],
    datasets: [
      {
        data: [
          results.incomeTax?.tax || 0,
          results.incomeTax?.cess || 0,
          results.incomeTax?.totalTax || 0,
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
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
            Calculate your Indian taxes with precision. Based on official Indian Income Tax Act and updated for FY 2024-25.
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
            { id: 'gst', label: 'GST Calculator', icon: '🏢' },
            { id: 'tds', label: 'TDS Calculator', icon: '💼' },
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
              {activeTab === 'gst' && '🏢 GST Calculator'}
              {activeTab === 'tds' && '💼 TDS Calculator'}
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

                {/* Deductions (only for old regime) */}
                {incomeData.regime === 'old' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Deductions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          HRA
                        </label>
                        <input
                          type="number"
                          value={incomeData.deductions.hra}
                          onChange={(e) => setIncomeData({
                            ...incomeData, 
                            deductions: {...incomeData.deductions, hra: parseFloat(e.target.value) || 0}
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LTA
                        </label>
                        <input
                          type="number"
                          value={incomeData.deductions.lta}
                          onChange={(e) => setIncomeData({
                            ...incomeData, 
                            deductions: {...incomeData.deductions, lta: parseFloat(e.target.value) || 0}
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Medical Insurance
                        </label>
                        <input
                          type="number"
                          value={incomeData.deductions.medical}
                          onChange={(e) => setIncomeData({
                            ...incomeData, 
                            deductions: {...incomeData.deductions, medical: parseFloat(e.target.value) || 0}
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          NPS
                        </label>
                        <input
                          type="number"
                          value={incomeData.deductions.nps}
                          onChange={(e) => setIncomeData({
                            ...incomeData, 
                            deductions: {...incomeData.deductions, nps: parseFloat(e.target.value) || 0}
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                        />
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

            {/* GST Inputs */}
            {activeTab === 'gst' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Turnover Amount
                  </label>
                  <input
                    type="number"
                    value={gstData.turnover}
                    onChange={(e) => setGstData({...gstData, turnover: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={gstData.category}
                    onChange={(e) => setGstData({...gstData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="regular">Regular (18%)</option>
                    <option value="composition">Composition (1%)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Type
                  </label>
                  <select
                    value={gstData.state}
                    onChange={(e) => setGstData({...gstData, state: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="intrastate">Intra-state</option>
                    <option value="interstate">Inter-state</option>
                  </select>
                </div>
              </div>
            )}

            {/* TDS Inputs */}
            {activeTab === 'tds' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Amount
                  </label>
                  <input
                    type="number"
                    value={tdsData.payment}
                    onChange={(e) => setTdsData({...tdsData, payment: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Category
                  </label>
                  <select
                    value={tdsData.category}
                    onChange={(e) => setTdsData({...tdsData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="salary">Salary</option>
                    <option value="professional">Professional Services</option>
                    <option value="rent">Rent</option>
                    <option value="contractor">Contractor</option>
                  </select>
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

              {activeTab === 'gst' && results.gst && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">GST Rate</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {results.gst.gstRate}%
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">GST Amount</div>
                      <div className="text-2xl font-bold text-green-900">
                        {formatCurrency(results.gst.gstAmount)}
                      </div>
                    </div>
                    {gstData.state === 'intrastate' ? (
                      <>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-sm text-purple-600 font-medium">CGST</div>
                          <div className="text-2xl font-bold text-purple-900">
                            {formatCurrency(results.gst.cgst)}
                          </div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="text-sm text-orange-600 font-medium">SGST</div>
                          <div className="text-2xl font-bold text-orange-900">
                            {formatCurrency(results.gst.sgst)}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="bg-indigo-50 p-4 rounded-lg col-span-2">
                        <div className="text-sm text-indigo-600 font-medium">IGST</div>
                        <div className="text-2xl font-bold text-indigo-900">
                          {formatCurrency(results.gst.igst)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'tds' && results.tds && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">TDS Rate</div>
                      <div className="text-2xl font-bold text-blue-900">
                        {results.tds.tdsRate}%
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-red-600 font-medium">TDS Amount</div>
                      <div className="text-2xl font-bold text-red-900">
                        {formatCurrency(results.tds.tdsAmount)}
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg col-span-2">
                      <div className="text-sm text-green-600 font-medium">Net Amount</div>
                      <div className="text-2xl font-bold text-green-900">
                        {formatCurrency(results.tds.netAmount)}
                      </div>
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
          <p className="text-yellow-700 text-sm">
            This calculator is based on Indian Income Tax Act and is for estimation purposes only. 
            Actual tax liability may vary based on specific circumstances, exemptions, and deductions. 
            Please consult a qualified tax professional for accurate tax planning and filing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator; 