import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Sparkles } from 'lucide-react';

const Pricing = ({ openModal }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const addToRefs = useScrollReveal();

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Plans &amp; Pricing</div>
        <h2 className="apple-header">Simple, predictable pricing.<br />No hidden setup fees.</h2>
        <p className="section-desc">
          Transparent per-employee monthly pricing in INR. Switch tiers or cancel anytime with prorated billing.
        </p>

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
        <div className="pricing-card scroll-reveal" ref={addToRefs}>
          <div className="card-tier-title">Starter</div>
          <p className="tier-tagline">Essential HR records and onboarding for small teams.</p>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">{isAnnual ? '249' : '299'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> Employee Directory &amp; Org Chart</li>
            <li><Check size={16} /> Digital Onboarding &amp; E-Signatures</li>
            <li><Check size={16} /> Paid Time Off (PTO) &amp; Leave Approvals</li>
            <li><Check size={16} /> Employee Mobile &amp; Web Self-Service</li>
            <li><Check size={16} /> Standard Email Support (24h response)</li>
          </ul>
          <button
            type="button"
            onClick={() => (openModal ? openModal('trial') : (window.location.hash = '#cta'))}
            className="btn btn-secondary card-btn"
          >
            Start 14-Day Free Trial
          </button>
        </div>
        
        <div className="pricing-card featured scroll-reveal" ref={addToRefs}>
          <div className="badge"><Sparkles size={13} /> Most Popular</div>
          <div className="card-tier-title">Professional</div>
          <p className="tier-tagline">Complete HR and payroll suite for growing Indian businesses.</p>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">{isAnnual ? '499' : '599'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> <strong>Everything in Starter, plus:</strong></li>
            <li><Check size={16} /> Automated Payroll, PF, ESI, PT &amp; TDS Filing</li>
            <li><Check size={16} /> Geo-Verified Time &amp; Attendance Tracking</li>
            <li><Check size={16} /> Job Postings &amp; Applicant Tracking (ATS)</li>
            <li><Check size={16} /> Performance Reviews &amp; Goal Setting</li>
            <li><Check size={16} /> Slack, Teams &amp; WhatsApp Notifications</li>
            <li><Check size={16} /> Priority Phone &amp; Live Chat Support</li>
          </ul>
          <button
            type="button"
            onClick={() => (openModal ? openModal('trial') : (window.location.hash = '#cta'))}
            className="btn btn-primary card-btn"
          >
            Start 14-Day Free Trial
          </button>
        </div>

        <div className="pricing-card scroll-reveal" ref={addToRefs}>
          <div className="card-tier-title">Enterprise</div>
          <p className="tier-tagline">Advanced controls and custom setup for larger companies.</p>
          <div className="price">
            <span className="currency">₹</span>
            <span className="amount">{isAnnual ? '899' : '1,099'}</span>
            <span className="period">/employee/mo</span>
          </div>
          <ul className="tier-features">
            <li><Check size={16} /> <strong>Everything in Professional, plus:</strong></li>
            <li><Check size={16} /> Multi-Entity &amp; Pan-India Payroll Management</li>
            <li><Check size={16} /> Custom Role-Based Permissions &amp; Audit Logs</li>
            <li><Check size={16} /> Single Sign-On (SAML 2.0 with Okta &amp; Google)</li>
            <li><Check size={16} /> Dedicated Account Manager in India</li>
            <li><Check size={16} /> Custom 99.99% Service Level Agreement (SLA)</li>
          </ul>
          <button
            type="button"
            onClick={() => (openModal ? openModal('demo') : (window.location.hash = '#cta'))}
            className="btn btn-secondary card-btn"
          >
            Contact Sales &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
