import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Before PeopleDesk, our two-person HR team spent three full days each month calculating tax withholdings across our Chennai and Coimbatore branches. Now the entire payroll run takes under 20 minutes, and direct deposits go through without any calculation errors.",
    author: "Dr. K. Senthilvelan",
    role: "Director of Human Resources",
    company: "Sundaram Health & Care (340 employees)",
    metric: "Saved 18 Hours per Pay Run"
  },
  {
    quote: "The employee self-service portal made an immediate difference for our operations. Our warehouse staff and transport drivers now check their pay stubs, request time off, and update their bank details directly on their phones.",
    author: "M. Radhakrishnan",
    role: "VP of People Operations",
    company: "Annamalai Logistics (820 employees)",
    metric: "65% Fewer HR Tickets"
  },
  {
    quote: "New hire onboarding used to mean mailing paper packets and chasing down signed forms. With PeopleDesk, candidates sign their offer letter, fill out tax documents, and submit bank info before day one.",
    author: "Jayashree Venkatraman",
    role: "Head of People",
    company: "Kavery Software Labs (210 employees)",
    metric: "4 Days Faster Onboarding"
  }
];

const Testimonials = () => {
  const addToRefs = useScrollReveal();

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Customer Stories</div>
        <h2 className="apple-header">Used by HR managers<br />and operations teams daily.</h2>
        <p className="section-desc">
          See how growing companies use PeopleDesk to pay employees accurately and keep team records organized.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card scroll-reveal" ref={addToRefs} style={{transitionDelay: `${idx * 0.1}s`}}>
            <div className="card-top">
              <div className="metric-pill">{t.metric}</div>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="star-fill" />
                ))}
              </div>
            </div>
            <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
            <div className="author-info">
              <div className="author-avatar">{t.author.replace(/^(Dr\.|M\.)\s*/, '').split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
              <div>
                <div className="author-name">{t.author}</div>
                <div className="author-role">{t.role}</div>
                <div className="author-company">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
