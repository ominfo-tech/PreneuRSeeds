import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';
import SocialFollow from '../components/SocialFollow';

const ContactPage = ({ lang = 'mr' }) => {
  const isMr = lang === 'mr';

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-main-heading">
              {isMr ? 'आमच्याशी संपर्क साधा' : 'Contact PreneuR Seeds Team'}
            </h1>
            <p className="page-header-tagline">
              {isMr
                ? 'बियाणे उपलब्धता, अधिकृत डीलरशिप, दर आणि कृषी मार्गदर्शनासाठी आजच बोला'
                : 'Get in touch for seed bookings, dealership inquiries, and crop consultation'}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Form Component */}
      <Contact lang={lang} />

      {/* Social Media Follow Section */}
      <SocialFollow lang={lang} />
    </div>
  );
};

export default ContactPage;
