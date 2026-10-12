import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';

const CTASection = ({ openModal }) => {
  const addToRefs = useScrollReveal();

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Get Started</div>
        <h2 className="cta-title">Simplify your HR and payroll today.</h2>
        <p className="cta-subtitle">
          Start your 14-day free trial. See how easy it is to manage employee records, calculate PF &amp; TDS accurately, and pay your team on time.
        </p>

        <div className="cta-actions">
          <button
            type="button"
            onClick={() => (openModal ? openModal('trial') : (window.location.hash = '#pricing'))}
            className="btn btn-primary btn-large"
          >
            Start 14-Day Free Trial
          </button>
          <button
            type="button"
            onClick={() => (openModal ? openModal('demo') : (window.location.hash = '#faq'))}
            className="btn btn-secondary btn-large"
          >
            Schedule a 15-Minute Demo &gt;
          </button>
        </div>

        <div className="cta-guarantees">
          <span><CheckCircle size={15} /> 14-day free trial</span>
          <span><CheckCircle size={15} /> No credit card required</span>
          <span><CheckCircle size={15} /> Free data migration from spreadsheets</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
