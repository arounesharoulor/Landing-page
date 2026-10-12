import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does PeopleDesk compute monthly payroll and statutory deductions?',
    a: 'PeopleDesk calculates gross salary, basic pay, allowances, and statutory deductions like Provident Fund (PF), ESI, and tax withholdings based on attendance and leave records. Once reviewed, direct bank disbursement files and detailed payslips are generated.'
  },
  {
    q: 'Can we import our existing employee records from Excel or CSV spreadsheets?',
    a: 'Yes. You can upload an Excel or CSV file containing your staff directory, department mappings, bank details, and opening leave balances. The system validates the file to prevent duplicates or formatting mistakes before importing.'
  },
  {
    q: 'Can employees view payslips and apply for leave on their phones?',
    a: 'Yes. Employees can access the PeopleDesk self-service portal on mobile or web browsers to view payslips, check leave balances, track shift check-in times, and submit time-off requests directly to their reporting manager.'
  },
  {
    q: 'How is confidential salary and banking information protected?',
    a: 'All employee records and financial data are encrypted at rest and during transit. Granular role-based permissions ensure that only authorized HR managers and payroll administrators can view salary figures and bank account details.'
  },
  {
    q: 'Can we configure custom leave types, approval workflows, and holiday lists?',
    a: 'Yes. You can set up company-specific leave types (such as Casual Leave, Sick Leave, and Earned Leave), configure multi-level manager approvals, and assign branch-specific holiday calendars for different office locations.'
  },
  {
    q: 'How long does onboarding and rollout take for a new company?',
    a: 'Most teams get up and running within one to two business days. Simply set up your company profile, upload your employee directory, configure your pay structure, and your team is ready for the upcoming pay cycle.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const addToRefs = useScrollReveal();

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Common Questions</div>
        <h2 className="apple-header">Frequently asked questions.</h2>
        <p className="section-desc">
          Clear answers about payroll, data setup, mobile access, and security.
        </p>
      </div>

      <div className="faq-accordion-container scroll-reveal" ref={addToRefs}>
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
              </button>
              <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '300px' : '0' }}>
                <p className="faq-answer-text">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
