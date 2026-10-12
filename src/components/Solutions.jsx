import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, Rocket, Globe2, Check } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    title: 'Small Businesses (1 – 50 Employees)',
    desc: 'Get started without manual paperwork. Set up direct deposits, standard time-off policies, and digital onboarding for new hires.',
    points: [
      'Digital employee onboarding completed in under 15 minutes',
      'Payroll tax calculations and scheduled direct deposits',
      'Paid time off (PTO) and sick leave tracking'
    ]
  },
  {
    icon: Building2,
    title: 'Growing Companies (50 – 250 Employees)',
    desc: 'Organize growing departments, manage multi-state payroll, and run structured hiring and quarterly performance reviews.',
    points: [
      'Manager approval workflows for vacation and expense claims',
      'Job applicant tracking system (ATS) with interview notes',
      'Quarterly goal tracking and structured employee reviews'
    ]
  },
  {
    icon: Globe2,
    title: 'Established Enterprises (250+ Employees)',
    desc: 'Custom role-based permissions, multi-entity payroll, single sign-on (SSO), and direct integrations with enterprise accounting tools.',
    points: [
      'Custom user permissions and complete audit activity logs',
      'Single Sign-On (SAML 2.0 with Okta, Azure AD, or Google)',
      'Dedicated account manager and priority phone support'
    ]
  }
];

const Solutions = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="solutions" className="solutions-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Solutions by Company Size</div>
        <h2 className="apple-header">Built for companies<br />at every stage of growth.</h2>
        <p className="section-desc">
          Whether you are running your first 10-person payroll or managing hundreds of employees across multiple locations.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="solution-card scroll-reveal" ref={addToRefs} style={{transitionDelay: `${idx * 0.1}s`}}>
              <div className="solution-icon-wrapper">
                <Icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p className="solution-desc">{item.desc}</p>
              <ul className="solution-points">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <Check size={16} className="check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
