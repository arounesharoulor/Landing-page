import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does PeopleDesk handle taxes across different states?',
    a: 'PeopleDesk calculates state and local tax withholdings based on where each employee lives and works. At the end of the year, we generate Form W-2 and 1099-NEC documents and submit them to federal and state tax agencies automatically.'
  },
  {
    q: 'Can we import our existing employee records from spreadsheets?',
    a: 'Yes. You can upload an Excel or CSV file containing your employee directory, historical payroll figures, and vacation balances. Our support team also reviews your files to ensure data is imported accurately without duplicates.'
  },
  {
    q: 'Can employees access their pay stubs and request leave on their phones?',
    a: 'Yes. Employees can download the PeopleDesk mobile app on iOS and Android to view payslips, check PTO days, submit vacation requests, and clock in for shifts.'
  },
  {
    q: 'How do you protect sensitive salary and Social Security information?',
    a: 'All data is encrypted with 256-bit encryption. Administrators can set role-based permissions so only designated HR and payroll managers can view salary numbers or Social Security numbers.'
  },
  {
    q: 'Does PeopleDesk support both full-time employees and 1099 contractors?',
    a: 'Yes. You can manage full-time hourly and salaried staff alongside 1099 independent contractors. Contractors can submit invoices and receive payments via direct deposit.'
  },
  {
    q: 'What customer support do you provide during setup and beyond?',
    a: 'Every plan includes email support with replies within one business day. Professional and Enterprise plans also include live chat support and a dedicated onboarding representative to assist with your first payroll run.'
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
