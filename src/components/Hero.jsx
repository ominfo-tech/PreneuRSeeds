import React from 'react';
import { ArrowRight, PhoneCall, Sprout } from 'lucide-react';

const Hero = ({ lang = 'mr' }) => {
  const heroImageUrl = "/farmer-banner.jpg";

  return (
    <section 
      id="home" 
      className="hero-section-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40) 0%, rgba(15, 45, 20, 0.55) 100%), url('${heroImageUrl}')`
      }}
    >
      <div className="container">
        <div className="hero-bg-content">
          {/* Main Headline */}
          <h1 className="hero-bg-title">
            <span className="highlight-text">For Better Tomorrow...</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            {lang === 'mr' 
              ? 'शेतकऱ्यांच्या सर्वांगीण समृद्धीसाठी आणि विक्रमी उत्पादनासाठी उच्च दर्जाची हायब्रिड व संशोधन बियाणे'
              : 'High-yielding, certified hybrid seeds engineered for maximum productivity and prosperous farming.'
            }
          </p>

          {/* Action Buttons */}
          <div className="hero-actions-row">
            <a href="#products" className="hero-btn-primary">
              <span>{lang === 'mr' ? 'बियाणे उत्पादने पहा' : 'Explore Seeds'}</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact-section" className="hero-btn-secondary">
              <PhoneCall size={18} />
              <span>{lang === 'mr' ? 'संपर्क साधा' : 'Contact Us'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
