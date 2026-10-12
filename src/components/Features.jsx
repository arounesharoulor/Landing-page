import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Users, CreditCard, PlaneTakeoff, HeartPulse, FileText, Briefcase, TrendingUp, Receipt, Clock, Smartphone } from 'lucide-react';

const Features = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="features" className="features-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">HR Management Features</div>
        <h2 className="apple-header">Everything your HR team<br />needs to manage staff.</h2>
        <p className="section-desc">
          From the first job interview to retirement, manage every stage of employment in a clean, organized database.
        </p>
      </div>
      
      <div className="bento-grid">
        <div className="bento-card bento-large fade-in-left" ref={addToRefs}>
          <div className="bento-content">
            <div className="bento-icon-wrapper"><Users size={22} /></div>
            <h3>Employee Directory &amp; Org Chart</h3>
            <p>Keep an up-to-date staff directory, interactive company organizational chart, office locations, and emergency contacts in one secure database.</p>
          </div>
          <div className="mini-directory-widget">
            <div className="dir-node executive">
              <div className="dir-avatar">SB</div>
              <div className="dir-info">
                <span className="dir-name">Saravanan Balaji</span>
                <span className="dir-role">Chief Executive Officer</span>
              </div>
              <span className="dir-status">Active</span>
            </div>
            <div className="dir-branches">
              <div className="dir-node">
                <div className="dir-avatar blue">VM</div>
                <div className="dir-info">
                  <span className="dir-name">Vignesh Murugan</span>
                  <span className="dir-role">VP of Engineering</span>
                </div>
              </div>
              <div className="dir-node">
                <div className="dir-avatar green">MS</div>
                <div className="dir-info">
                  <span className="dir-name">Meenakshi Sundaram</span>
                  <span className="dir-role">VP of Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bento-card bento-medium fade-in-right" ref={addToRefs}>
          <div className="bento-content">
            <div className="bento-icon-wrapper"><CreditCard size={22} /></div>
            <h3>Payroll &amp; Direct Deposit</h3>
            <p>Calculate federal, state, and local taxes, handle 401(k) deductions, and disburse paychecks via ACH direct deposit on schedule.</p>
          </div>
          <div className="mini-payroll-widget">
            <div className="pay-row">
              <span>Gross Wages</span>
              <span className="pay-val">$24,500.00</span>
            </div>
            <div className="pay-row muted">
              <span>Taxes &amp; Deductions</span>
              <span className="pay-val">-$5,820.00</span>
            </div>
            <div className="pay-row net">
              <span>Net Pay</span>
              <span className="pay-val highlight">$18,680.00</span>
            </div>
            <div className="pay-status-tag">Direct Deposit: Processed</div>
          </div>
        </div>
        
        <div className="bento-card bento-small fade-in-right" ref={addToRefs}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><Clock size={22} /></div>
            <h3>Time &amp; Attendance</h3>
            <p className="small-text">Track hourly shifts, remote work hours, and overtime with web clock-in and mobile verification.</p>
          </div>
          <div className="mini-widget-tag green">
            <span className="dot pulse"></span> Clocked In: 08:58 AM &bull; On Time
          </div>
        </div>
        
        <div className="bento-card bento-small fade-in-right" ref={addToRefs} style={{transitionDelay: '0.1s'}}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><PlaneTakeoff size={22} /></div>
            <h3>Paid Time Off (PTO)</h3>
            <p className="small-text">Manage vacation time, sick leave, and holidays with one-click manager approvals.</p>
          </div>
          <div className="mini-widget-tag blue">PTO Balance: 14 Days Remaining</div>
        </div>
        
        <div className="bento-card bento-small scroll-reveal" ref={addToRefs}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><Briefcase size={22} /></div>
            <h3>Hiring &amp; Job Applications</h3>
            <p className="small-text">Post open roles, track applicant resumes through hiring stages, and record interview feedback.</p>
          </div>
          <div className="mini-widget-tag">Applicant Stage: Technical Review</div>
        </div>
        
        <div className="bento-card bento-small scroll-reveal" ref={addToRefs} style={{transitionDelay: '0.1s'}}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><FileText size={22} /></div>
            <h3>New Hire Onboarding</h3>
            <p className="small-text">Send digital welcome packets, collect W-4 and I-9 forms, and get handbook agreements signed online.</p>
          </div>
          <div className="mini-widget-tag green">Checklist: All 4 Steps Completed</div>
        </div>
        
        <div className="bento-card bento-small scroll-reveal" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><TrendingUp size={22} /></div>
            <h3>Performance Reviews</h3>
            <p className="small-text">Set quarterly team goals, run review cycles, and keep notes from manager one-on-ones.</p>
          </div>
          <div className="mini-widget-tag purple">Annual Review: 4.8 / 5.0 Rating</div>
        </div>
        
        <div className="bento-card bento-small scroll-reveal" ref={addToRefs} style={{transitionDelay: '0.3s'}}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><Receipt size={22} /></div>
            <h3>Expense Claims</h3>
            <p className="small-text">Employees submit photos of business receipts from their phones for manager review and payout.</p>
          </div>
          <div className="mini-widget-tag">Reimbursed: $148.50 Client Travel</div>
        </div>

        <div className="bento-card bento-small scroll-reveal" ref={addToRefs}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><HeartPulse size={22} /></div>
            <h3>Benefits &amp; Health Plans</h3>
            <p className="small-text">Manage company health, dental, and vision insurance policies alongside 401(k) matching.</p>
          </div>
          <div className="mini-widget-tag blue">401(k) Match Active</div>
        </div>

        <div className="bento-card bento-large scroll-reveal" ref={addToRefs} style={{transitionDelay: '0.15s'}}>
           <div className="bento-content">
            <div className="bento-icon-wrapper"><Smartphone size={22} /></div>
            <h3>Employee Mobile &amp; Web Portal</h3>
            <p>Employees can log in on their phones or web browsers to view historical pay stubs, check PTO days, submit expense receipts, and update their bank or address details without contacting HR.</p>
          </div>
          <div className="ess-preview-bar">
            <span>24/7 Employee Portal</span> &bull; <span>Download W-2 Forms</span> &bull; <span>Mobile Check-In</span> &bull; <span>Update Profile</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
