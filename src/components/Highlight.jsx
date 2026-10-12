import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ShieldCheck, Lock, FileCheck2, KeyRound } from 'lucide-react';

const SecuritySection = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="security" className="security-section">
      <div className="security-container scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Security &amp; Compliance</div>
        <h2 className="apple-header">Protecting your sensitive<br />employee records.</h2>
        <p className="section-desc">
          Social Security numbers, bank routing information, salary histories, and medical elections are safeguarded with strict encryption and access controls.
        </p>

        <div className="security-grid">
          <div className="security-card">
            <div className="security-icon-wrap"><ShieldCheck size={28} /></div>
            <h4>SOC 2 Type II Certified</h4>
            <p>Audited annually by independent security compliance auditors to verify our infrastructure and operational safety controls.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><Lock size={28} /></div>
            <h4>256-Bit Data Encryption</h4>
            <p>All employee records and financial documents are encrypted in transit with TLS 1.3 and at rest with AES-256 standards.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><KeyRound size={28} /></div>
            <h4>Role-Based Access Controls</h4>
            <p>Custom permission levels ensure managers only see the records they need, while confidential salary details stay restricted.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><FileCheck2 size={28} /></div>
            <h4>Labor Law &amp; Tax Compliance</h4>
            <p>Built-in compliance checks for multi-state payroll, statutory tax filings (W-2 and 1099), and standard labor regulations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
