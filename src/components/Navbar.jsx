import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, Mail, Phone, Globe, ChevronRight } from 'lucide-react';

const Navbar = ({ lang = 'mr', setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels = {
    mr: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      products: "बियाणे उत्पादने",
      reviews: "शेतकरी अनुभव",
      contact: "संपर्क साधा",
      contactBtn: "संपर्क साधा",
      followUs: "Follow Us :"
    },
    en: {
      home: "Home",
      about: "About Us",
      products: "Seed Products",
      reviews: "Farmer Reviews",
      contact: "Contact Us",
      contactBtn: "📞 Contact Now",
      followUs: "Follow Us :"
    }
  };

  const currentNav = navLabels[lang] || navLabels.mr;

  return (
    <header className="header-container">
      {/* Top Contact & Social Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            {/* Left: Email & Phone */}
            <div className="top-bar-left">
              <a href="mailto:preneuragroseeds2021@gmail.com" className="top-info-link top-bar-email">
                <Mail size={14} />
                <span>preneuragroseeds2021@gmail.com</span>
              </a>
              <span className="top-divider top-bar-email-divider">|</span>
              <a href="tel:+919011957878" className="top-info-link top-bar-phone">
                <Phone size={14} />
                <span>+91 9011957878</span>
              </a>
            </div>

            {/* Right: Social Media & Modern Pill Language Switcher */}
            <div className="top-bar-right">
              <div className="social-group">
                <span className="social-label">{currentNav.followUs}</span>
                {/* Instagram Only */}
                <a 
                  href="https://www.instagram.com/preneur_seeds_2641/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link" 
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <span className="top-divider">|</span>

              {/* Modern Segmented Pill Language Switcher */}
              <div className="modern-lang-pill" role="radiogroup" aria-label="Select Language">
                <Globe size={13} className="lang-globe-icon" />
                <button
                  type="button"
                  className={`lang-option ${lang === 'mr' ? 'is-active' : ''}`}
                  onClick={() => setLang && setLang('mr')}
                  aria-checked={lang === 'mr'}
                >
                  मराठी
                </button>
                <button
                  type="button"
                  className={`lang-option ${lang === 'en' ? 'is-active' : ''}`}
                  onClick={() => setLang && setLang('en')}
                  aria-checked={lang === 'en'}
                >
                  Eng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Brand Logo */}
            <Link to="/" className="navbar-brand">
              <img src="/logo.png" alt="PreneuR Seeds Logo" className="brand-logo" />
            </Link>

            {/* Navigation Menu */}
            <nav>
              <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-text">{currentNav.home}</span>
                    <ChevronRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-text">{currentNav.about}</span>
                    <ChevronRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-text">{currentNav.products}</span>
                    <ChevronRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reviews"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-text">{currentNav.reviews}</span>
                    <ChevronRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-text">{currentNav.contact}</span>
                    <ChevronRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
                <li className="mobile-only-link">
                  <Link
                    to="/contact"
                    className="btn-mobile-contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PhoneCall size={17} />
                    <span>{currentNav.contactBtn}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Header Right Actions */}
            <div className="navbar-right">
              <Link to="/contact" className="btn-nav-contact">
                <PhoneCall size={16} />
                <span>{currentNav.contactBtn}</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

