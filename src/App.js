import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Services from './components/services/Services';
import GSTServices from './components/services/GSTServices';
import TDSServices from './components/services/TDSServices';
import ITRServices from './components/services/ITRServices';
import Contact from './components/contact/Contact';
import Team from './components/team/Team';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/gst" element={<GSTServices />} />
          <Route path="/services/tds" element={<TDSServices />} />
          <Route path="/services/itr" element={<ITRServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;