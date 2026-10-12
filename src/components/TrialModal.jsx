import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, Building2, Mail, User, Users, MapPin, Loader2, ArrowRight } from 'lucide-react';

const TrialModal = ({ isOpen, onClose, mode = 'trial' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '16-50',
    location: 'Chennai'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = useCallback(() => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <div className="modal-pill">
                {mode === 'demo' ? 'Schedule a 15-Min Walkthrough' : '14-Day Free Trial • No Card Required'}
              </div>
              <h3 className="modal-title">
                {mode === 'demo' ? 'See PeopleDesk in Action' : 'Create your PeopleDesk account'}
              </h3>
              <p className="modal-subtitle">
                {mode === 'demo'
                  ? 'Connect with our Chennai specialist for a tailored tour of attendance, leave rules, and PF/ESI payroll.'
                  : 'Instant access to your sandbox pre-configured for Indian attendance, leave policies, and statutory payroll.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="modal-name">
                  <User size={14} /> Full Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Senthil Nathan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">
                  <Mail size={14} /> Work Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="senthil@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-company">
                  <Building2 size={14} /> Company Name
                </label>
                <input
                  id="modal-company"
                  type="text"
                  required
                  placeholder="e.g. Kaveri Systems Pvt Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-team-size">
                    <Users size={14} /> Team Size
                  </label>
                  <select
                    id="modal-team-size"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option value="1-15">1 – 15 employees</option>
                    <option value="16-50">16 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-location">
                    <MapPin size={14} /> Primary Hub
                  </label>
                  <select
                    id="modal-location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="Chennai">Chennai, TN</option>
                    <option value="Bengaluru">Bengaluru, KA</option>
                    <option value="Coimbatore">Coimbatore, TN</option>
                    <option value="Hyderabad">Hyderabad, TS</option>
                    <option value="Mumbai">Mumbai / Pune</option>
                    <option value="Other">Other Pan-India</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary modal-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spinner" /> Provisioning Sandbox...
                  </>
                ) : (
                  <>
                    {mode === 'demo' ? 'Confirm Demo Request' : 'Start 14-Day Free Trial'}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div className="modal-privacy-note">
                By submitting, you agree to our Terms of Service. No credit card required. Free spreadsheet data migration included.
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-wrap">
              <CheckCircle2 size={44} />
            </div>
            <h3 className="success-title">Workspace Provisioned!</h3>
            <p className="success-desc">
              We have set up your <strong>{formData.company || 'PeopleDesk'}</strong> account. Temporary login credentials
              with pre-loaded Chennai employee records have been sent to{' '}
              <span className="success-email">{formData.email}</span>.
            </p>
            <div className="success-meta-box">
              <div className="meta-line">
                <strong>Account Owner:</strong> {formData.name || 'Administrator'}
              </div>
              <div className="meta-line">
                <strong>Primary Location:</strong> {formData.location} &bull; {formData.teamSize} staff
              </div>
              <div className="meta-line">
                <strong>Trial Period:</strong> 14 Days (Active through Oct 26, 2026)
              </div>
            </div>
            <button
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: '1.25rem' }}
              onClick={handleClose}
            >
              Continue to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrialModal;
