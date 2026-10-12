import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageSquare, Calendar, ShieldCheck, Database, Briefcase, CreditCard } from 'lucide-react';

const integrationsList = [
  {
    icon: MessageSquare,
    name: 'Slack & Microsoft Teams',
    desc: 'Approve vacation requests, view company announcements, and receive daily team reminders directly in Slack or Teams.'
  },
  {
    icon: Calendar,
    name: 'Google & Outlook Calendars',
    desc: 'Sync approved vacation days and company holidays automatically to shared team calendars so everyone knows who is out.'
  },
  {
    icon: Database,
    name: 'QuickBooks, Xero & NetSuite',
    desc: 'Export completed pay runs, tax withholdings, and employee reimbursements directly into your general ledger.'
  },
  {
    icon: ShieldCheck,
    name: 'Okta & Google Workspace',
    desc: 'Automatically create company accounts when new employees start and revoke system access immediately when an employee departs.'
  },
  {
    icon: Briefcase,
    name: 'LinkedIn & Indeed',
    desc: 'Publish job openings directly to top job boards with one click and gather applicant resumes into your hiring pipeline.'
  },
  {
    icon: CreditCard,
    name: 'Corporate Cards & Receipts',
    desc: 'Import credit card transactions, snap photos of receipts from mobile phones, and approve expense claims without paper forms.'
  }
];

const Integrations = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-container">
        <div className="section-header scroll-reveal" ref={addToRefs}>
          <div className="section-pill">Software Integrations</div>
          <h2 className="apple-header">Connects with the software<br />your team already uses.</h2>
          <p className="section-desc">
            PeopleDesk connects directly to your accounting software, team chat tools, calendars, and identity providers.
          </p>
        </div>
        
        <div className="integrations-grid">
          {integrationsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="integration-card scroll-reveal" ref={addToRefs} style={{transitionDelay: `${idx * 0.08}s`}}>
                <div className="integration-icon-wrap">
                  <Icon size={28} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
