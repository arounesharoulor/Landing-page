import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">PeopleDesk<span className="logo-dot">.</span></a>
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
          <a href="#pricing" className="nav-login">Sign in</a>
          <a href="#pricing" className="btn btn-primary nav-btn">Start Trial</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
