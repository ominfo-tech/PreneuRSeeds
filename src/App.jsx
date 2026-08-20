import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import useScrollReveal from './hooks/useScrollReveal';
import { Phone, Mail, MapPin, Download, FileText } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('mr');

  // Trigger scroll-based reveal animations on route & viewport changes
  useScrollReveal();

  return (
    <div className="app-container">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top Bar + Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Route-driven Multi-Page Layout */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/products" element={<ProductsPage lang={lang} />} />
          <Route path="/reviews" element={<ReviewsPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="*" element={<HomePage lang={lang} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <footer id="contact" className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col reveal-left">
              <Link to="/">
                <img src="/footerlogo.png" alt="PreneuR Seeds Logo" className="footer-logo" />
              </Link>
              <p className="footer-tagline">PreneuR Seeds Pvt. Ltd. — For Better Tomorrow...</p>
              <p className="footer-about-text">
                {lang === 'mr'
                  ? 'शेतकऱ्यांच्या सर्वांगीण प्रगतीसाठी आणि भरघोस शेती उत्पादनासाठी उच्च प्रतीच्या हायब्रिड बियाण्यांचे अग्रगण्य उत्पादक.'
                  : 'Leading producers of high quality hybrid and certified seeds dedicated to agricultural prosperity and maximum yields.'
                }
              </p>

              {/* Footer Social Icons */}
              <div className="footer-social-links">
                <a
                  href="https://www.instagram.com/preneur_seeds_2641/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon insta-link"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919011957878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon whatsapp-link"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>

              {/* Brochure Download Action Button */}
              <a
                href="/PreneuR-Seeds-Brochure.pdf"
                download="PreneuR-Seeds-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-brochure"
                title="Download Official Product Brochure PDF"
              >
                <FileText size={16} />
                <span>{lang === 'mr' ? 'माहितीपत्रक डाउनलोड करा' : 'Download Brochure'}</span>
                <Download size={15} />
              </a>
            </div>

            <div className="footer-links-col reveal-up">
              <h4 className="footer-title">{lang === 'mr' ? 'महत्त्वाच्या लिंक्स' : 'Quick Links'}</h4>
              <ul className="footer-menu">
                <li><Link to="/">{lang === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</Link></li>
                <li><Link to="/about">{lang === 'mr' ? 'आमच्याबद्दल' : 'About Us'}</Link></li>
                <li><Link to="/products">{lang === 'mr' ? 'बियाणे उत्पादने' : 'Seed Products'}</Link></li>
                <li><Link to="/reviews">{lang === 'mr' ? 'शेतकरी अनुभव' : 'Farmer Reviews'}</Link></li>
                <li><Link to="/contact">{lang === 'mr' ? 'संपर्क साधा' : 'Contact Us'}</Link></li>
              </ul>
            </div>

            <div className="footer-contact-col reveal-right">
              <h4 className="footer-title">{lang === 'mr' ? 'संपर्क माहिती' : 'Contact Info'}</h4>
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <span>गट नं. ०२९५/३, मु.पो. तरडे (उरुळी कांचन), ता. हवेली, जि. पुणे - ४१२२०१</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-icon" />
                <a href="tel:+919011957878">+91 9011957878</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <a href="mailto:preneuragroseeds2021@gmail.com">preneuragroseeds2021@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PreneuR Seeds Pvt. Ltd. {lang === 'mr' ? 'सर्व हक्क सुरक्षित.' : 'All rights reserved.'}</p>
            <p className="footer-dev-credit">
              Developed by <a href="https://ominfo.tech" target="_blank" rel="noopener noreferrer" className="dev-link">OM INFOTECH</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Global Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
