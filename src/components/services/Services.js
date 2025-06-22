import React, { useState, useRef, useEffect } from 'react';
import ITRServices from './ITRServices';
import GSTServices from './GSTServices';
import TDSServices from './TDSServices';
import Team from '../team/Team';
import Testimonials from '../home/Testimonials';
import { ServiceSelector } from './TDSServices';

const TABS = [
  { key: 'itr', label: 'Income Tax (ITR)' },
  { key: 'gst', label: 'GST' },
  { key: 'tds', label: 'TDS' },
  { key: 'other', label: 'Other Services' }
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our full range of tax, compliance, and business services. Select a category below.
          </p>
        </div>
        <ServiceSelector />
        <div className="py-20 bg-gray-50 animate-fade-in-up">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Other Services</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Additional business and compliance services to help you grow and stay compliant.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Company Registration</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">₹6,999</div>
                <ul className="space-y-3 mb-6">
                  <li>Name Approval</li>
                  <li>DSC & DIN Application</li>
                  <li>MOA & AOA Drafting</li>
                  <li>Company Incorporation</li>
                  <li>Post Registration Compliance</li>
                </ul>
                <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Advisory</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">₹4,999</div>
                <ul className="space-y-3 mb-6">
                  <li>Business Planning</li>
                  <li>Financial Strategy</li>
                  <li>Compliance Review</li>
                  <li>Growth Consulting</li>
                </ul>
                <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Audit Services</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">₹7,999</div>
                <ul className="space-y-3 mb-6">
                  <li>Internal Audit</li>
                  <li>Statutory Audit</li>
                  <li>Tax Audit</li>
                  <li>Compliance Audit</li>
                </ul>
                <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 