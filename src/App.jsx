import React from 'react';
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
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <InteractiveModules />
        <Solutions />
        <Integrations />
        <Highlight />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

