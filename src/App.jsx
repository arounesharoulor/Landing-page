import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveModules from './components/InteractiveModules';
import Solutions from './components/Solutions';
import Integrations from './components/Integrations';
import Highlight from './components/Highlight';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import './index.css';

function App() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, mode: 'trial' });

  const openModal = (mode = 'trial') => {
    setModalConfig({ isOpen: true, mode });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="app-container">
      <Navbar openModal={openModal} />
      <main id="main-content">
        <Hero openModal={openModal} />
        <Features />
        <InteractiveModules />
        <Solutions />
        <Integrations />
        <Highlight />
        <Testimonials />
        <Pricing openModal={openModal} />
        <FAQ />
        <CTASection openModal={openModal} />
      </main>
      <Footer openModal={openModal} />
      <TrialModal
        isOpen={modalConfig.isOpen}
        mode={modalConfig.mode}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;

