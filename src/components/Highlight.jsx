import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ShieldCheck, Lock, FileCheck2, KeyRound } from 'lucide-react';

const SecuritySection = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="security" className="security-section">
      <div className="security-container">
        <div className="section-header scroll-reveal" ref={addToRefs}>
          <div className="section-pill">Security &amp; Compliance</div>
          <h2 className="apple-header">Protecting your sensitive<br />employee records.</h2>
          <p className="section-desc">
            Employee identity records, bank account details, salary compensation, and benefits elections are safeguarded with strict encryption and access controls.
          </p>
        </div>

        <div className="security-grid scroll-reveal" ref={addToRefs}>
          <div className="security-card">
            <div className="security-icon-wrap"><ShieldCheck size={28} /></div>
            <h4>ISO 27001 &amp; SOC 2 Type II</h4>
            <p>Audited to verify Indian cloud infrastructure, tier-4 datacenter safety in Mumbai/Chennai, and strict operational controls.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><Lock size={28} /></div>
            <h4>256-Bit Data Encryption</h4>
            <p>All employee records, Aadhaar/PAN tokens, and financial documents are encrypted in transit with TLS 1.3 and at rest with AES-256 standards.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><KeyRound size={28} /></div>
            <h4>Role-Based Access Controls</h4>
            <p>Custom permission levels ensure managers only see the records they need, while confidential salary details stay restricted.</p>
          </div>
          <div className="security-card">
            <div className="security-icon-wrap"><FileCheck2 size={28} /></div>
            <h4>Indian Labour Law &amp; Tax Compliance</h4>
            <p>Built-in statutory compliance checks for EPFO (PF), ESIC, Professional Tax across all Indian states, and automated Form 16 / TDS generation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
