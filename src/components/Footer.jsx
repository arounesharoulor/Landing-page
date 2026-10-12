import React from 'react';

const Footer = ({ openModal }) => {
  return (
    <footer className="footer-wrap">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">PeopleDesk<span className="logo-dot">.</span></a>
          <p className="brand-bio">
            PeopleDesk is an Indian HR and payroll software designed to help growing companies manage employees, run accurate PF/ESI payroll, and stay compliant with central and state labour laws.
          </p>
          <div className="system-status-indicator">
            <span className="status-dot-pulse"></span>
            <span>All systems operational &bull; 99.99% Uptime</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>HRMS Modules</h4>
            <a href="#features">Employee Directory</a>
            <a href="#features">Payroll &amp; Tax (PF, ESI)</a>
            <a href="#features">Time &amp; Attendance</a>
            <a href="#features">Paid Time Off (PTO)</a>
            <a href="#features">Hiring &amp; Job Openings</a>
            <a href="#features">New Hire Onboarding</a>
            <a href="#features">Performance Reviews</a>
            <a href="#features">Expense Claims</a>
          </div>

          <div className="link-column">
            <h4>Solutions</h4>
            <a href="#solutions">Small Businesses (1–50)</a>
            <a href="#solutions">Growing Teams (50–250)</a>
            <a href="#solutions">Enterprises (250+)</a>
            <a href="#integrations">Tally &amp; Software Integrations</a>
            <a href="#security">Security &amp; ISO 27001</a>
          </div>

          <div className="link-column">
            <h4>Resources</h4>
            <a href="#faq">Help Center &amp; FAQ</a>
            <a href="#security">Indian Labour Law Guide</a>
            <a href="#pricing">State PT &amp; TDS Calculator</a>
            <a href="#interactive-preview">Live Interactive Tour</a>
            <a href="#integrations">Developer &amp; Accounting APIs</a>
          </div>

          <div className="link-column">
            <h4>Company &amp; Legal</h4>
            <a href="#solutions">About PeopleDesk</a>
            <a href="#interactive-preview">Careers (Chennai &amp; BLR)</a>
            <button
              type="button"
              className="footer-link-btn"
              onClick={() => (openModal ? openModal('demo') : (window.location.hash = '#pricing'))}
            >
              Schedule 15-Min Demo
            </button>
            <a href="#security">Privacy Policy (DPDP Act)</a>
            <a href="#security">Security &amp; Compliance</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2026 PeopleDesk Technologies India Pvt. Ltd. All rights reserved.</p>
        <div className="footer-bottom-badges">
          <span className="footer-badge">ISO 27001 Certified</span>
          <span className="badge-divider">&bull;</span>
          <span className="footer-badge">DPDP Act 2023 Compliant</span>
          <span className="badge-divider">&bull;</span>
          <span className="footer-badge">SOC 2 Type II</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
