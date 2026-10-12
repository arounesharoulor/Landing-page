import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={closeMenu}>
          PeopleDesk<span className="logo-dot">.</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#features">Modules</a></li>
            <li><a href="#interactive-preview">Live Demo</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-login"
            onClick={() => (openModal ? openModal('demo') : (window.location.hash = '#interactive-preview'))}
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-primary nav-btn"
            onClick={() => (openModal ? openModal('trial') : (window.location.hash = '#pricing'))}
          >
            Start Trial
          </button>
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-links">
            <li>
              <a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>
                <span>HRMS Modules</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#interactive-preview" onClick={(e) => handleLinkClick(e, '#interactive-preview')}>
                <span>Live Interactive Demo</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#solutions" onClick={(e) => handleLinkClick(e, '#solutions')}>
                <span>Solutions by Company Size</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#integrations" onClick={(e) => handleLinkClick(e, '#integrations')}>
                <span>Software Integrations</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#security" onClick={(e) => handleLinkClick(e, '#security')}>
                <span>Security &amp; Compliance</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')}>
                <span>Plans &amp; Pricing</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>
                <span>Frequently Asked Questions</span>
                <ArrowRight size={15} className="drawer-arrow" />
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="btn btn-secondary mobile-drawer-btn"
              onClick={() => {
                closeMenu();
                if (openModal) openModal('demo');
              }}
            >
              Schedule 15-Min Demo
            </button>
            <button
              type="button"
              className="btn btn-primary mobile-drawer-btn"
              onClick={() => {
                closeMenu();
                if (openModal) openModal('trial');
              }}
            >
              Start Free 14-Day Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
