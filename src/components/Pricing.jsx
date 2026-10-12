import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const addToRefs = useScrollReveal();

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Plans &amp; Pricing</div>
        <h2 className="apple-header">Simple, predictable pricing.<br />No hidden setup fees.</h2>
        <p className="section-desc">
          Transparent per-employee monthly pricing. Switch tiers or cancel anytime with prorated billing.
        </p>

        {/* Billing Switcher Toggle */}
        <div className="billing-toggle-wrap">
          <span className={!isAnnual ? 'active-label' : 'inactive-label'}>Monthly Billing</span>
          <button
            className={`toggle-switch ${isAnnual ? 'toggled' : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle annual or monthly billing"
          >
            <div className="toggle-thumb"></div>
          </button>
          <span className={isAnnual ? 'active-label' : 'inactive-label'}>
            Annual Billing <span className="discount-pill">Save 20%</span>
          </span>
        </div>
      </div>
      
      <div className="pricing-grid">
        {/* Tier 1: Starter */}
        <div className="pricing-card scroll-reveal" ref={addToRefs}>
          <div className="card-tier-title">Starter</div>
          <p className="tier-tagline">Essential HR records and onboarding for small teams.</p>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{isAnnual ? '7' : '9'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> Employee Directory &amp; Org Chart</li>
            <li><Check size={16} /> Digital Onboarding &amp; E-Signatures</li>
            <li><Check size={16} /> Paid Time Off (PTO) Tracking &amp; Approvals</li>
            <li><Check size={16} /> Employee Mobile &amp; Web App</li>
            <li><Check size={16} /> Standard Email Support (24h response)</li>
          </ul>
          <a href="#cta" className="btn btn-secondary card-btn">Start 14-Day Free Trial</a>
        </div>
        
        {/* Tier 2: Professional (Featured) */}
        <div className="pricing-card featured scroll-reveal" ref={addToRefs}>
          <div className="badge"><Sparkles size={13} /> Most Popular</div>
          <div className="card-tier-title">Professional</div>
          <p className="tier-tagline">Complete HR and payroll suite for growing businesses.</p>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{isAnnual ? '12' : '15'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> <strong>Everything in Starter, plus:</strong></li>
            <li><Check size={16} /> Multi-State Payroll &amp; Tax Filings</li>
            <li><Check size={16} /> Verified Time &amp; Attendance Tracking</li>
            <li><Check size={16} /> Job Postings &amp; Applicant Tracking (ATS)</li>
            <li><Check size={16} /> Performance Reviews &amp; Goal Setting</li>
            <li><Check size={16} /> Slack &amp; Microsoft Teams Integration</li>
            <li><Check size={16} /> Priority Phone &amp; Live Chat Support</li>
          </ul>
          <a href="#cta" className="btn btn-primary card-btn">Start 14-Day Free Trial</a>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="pricing-card scroll-reveal" ref={addToRefs}>
          <div className="card-tier-title">Enterprise</div>
          <p className="tier-tagline">Advanced controls and custom setup for larger companies.</p>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{isAnnual ? '20' : '25'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> <strong>Everything in Professional, plus:</strong></li>
            <li><Check size={16} /> Multi-Entity &amp; Global Payroll Management</li>
            <li><Check size={16} /> Custom Role-Based Permissions &amp; Audit Logs</li>
            <li><Check size={16} /> Single Sign-On (SAML 2.0 with Okta &amp; Azure)</li>
            <li><Check size={16} /> Dedicated Onboarding Specialist</li>
            <li><Check size={16} /> Custom Service Level Agreement (SLA)</li>
          </ul>
          <a href="#cta" className="btn btn-secondary card-btn">Contact Sales &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
