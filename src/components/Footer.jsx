import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">PeopleDesk<span className="logo-dot">.</span></a>
          <p className="brand-bio">
            PeopleDesk is an HR and payroll software designed to help growing companies manage employees, run accurate payroll, and stay compliant with labor laws.
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
            <a href="#features">Payroll &amp; Direct Deposit</a>
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
            <a href="#integrations">Software Integrations</a>
            <a href="#security">Security &amp; SOC 2</a>
          </div>

          <div className="link-column">
            <h4>Resources</h4>
            <a href="#faq">Help Center &amp; FAQ</a>
            <a href="#">2025 Labor Law Guide</a>
            <a href="#">State Tax Calculator</a>
            <a href="#">Employee Handbook Guide</a>
            <a href="#">API Documentation</a>
          </div>

          <div className="link-column">
            <h4>Company &amp; Legal</h4>
            <a href="#">About PeopleDesk</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Overview</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PeopleDesk Systems, Inc. All rights reserved.</p>
        <div className="footer-bottom-badges">
          <span>SOC 2 Type II Certified</span> &bull; <span>GDPR Compliant</span> &bull; <span>ISO 27001</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
