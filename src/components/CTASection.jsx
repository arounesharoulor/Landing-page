import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';

const CTASection = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Get Started</div>
        <h2 className="cta-title">Simplify your HR and payroll today.</h2>
        <p className="cta-subtitle">
          Start your 14-day free trial. See how easy it is to manage employee records, pay your team on time, and keep your company organized.
        </p>

        <div className="cta-actions">
          <a href="#pricing" className="btn btn-primary btn-large">Start 14-Day Free Trial</a>
          <a href="#faq" className="btn btn-secondary btn-large">Schedule a 15-Minute Demo &gt;</a>
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
