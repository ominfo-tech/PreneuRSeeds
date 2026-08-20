import React from 'react';
import { Users, Sprout, MapPin, Award, MessageSquare, ArrowUpRight } from 'lucide-react';
import Reviews from '../components/Reviews';

const ReviewsPage = ({ lang = 'mr' }) => {
  const isMr = lang === 'mr';

  const stats = [
    { 
      icon: Users,
      num: '५०,०००+', 
      label: isMr ? 'समाधानी शेतकरी' : 'Happy Farmers',
      sub: isMr ? 'विश्वसनीय शेतकरी कुटुंब' : 'Trusted Farmer Families'
    },
    { 
      icon: Sprout,
      num: '९८%+', 
      label: isMr ? 'उगवण क्षमता' : 'Germination Rate',
      sub: isMr ? 'प्रयोगशाळा प्रमाणित' : 'Lab & Field Verified'
    },
    { 
      icon: MapPin,
      num: '२५+', 
      label: isMr ? 'जिल्ह्यांमध्ये पुरवठा' : 'Districts Served',
      sub: isMr ? 'महाराष्ट्रभर नेटवर्क' : 'Across Maharashtra'
    },
    { 
      icon: Award,
      num: '१००%', 
      label: isMr ? 'प्रमाणित गुणवत्ता' : 'Certified Seeds',
      sub: isMr ? 'खात्रीशीर हायब्रिड वाण' : 'Guaranteed High Yield'
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-main-heading">
              {isMr ? 'शेतकऱ्यांचे प्रत्यक्ष अनुभव व यशोगाथा' : 'Farmer Testimonials & Field Reviews'}
            </h1>
            <p className="page-header-tagline">
              {isMr
                ? 'PreneuR Seeds वापरणाऱ्या प्रगतीशील शेतकऱ्यांनी अनुभवलेले विक्रमी उत्पादन'
                : 'Real harvest stories from farmers across Maharashtra who trust PreneuR Seeds'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Reviews Cards Grid */}
      <Reviews lang={lang} />

      {/* Stats Counter Strip - Designed in Yellow (After Reviews) */}
      <section className="reviews-yellow-stats-section reveal-up">
        <div className="container">
          <div className="stats-yellow-header reveal-down">
            <h2 className="stats-yellow-title">
              {isMr ? 'PreneuR Seeds — विश्वासाची आणि यशाची आकडेवारी' : 'PreneuR Seeds — Proven Impact & Trust'}
            </h2>
          </div>
          <div className="stats-yellow-grid">
            {stats.map((item, idx) => {
              const StatIcon = item.icon;
              return (
                <div key={idx} className="stat-yellow-card reveal-up">
                  <div className="stat-yellow-icon-wrap">
                    <StatIcon size={26} />
                  </div>
                  <span className="stat-yellow-num">{item.num}</span>
                  <span className="stat-yellow-label">{item.label}</span>
                  <span className="stat-yellow-sub">{item.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feedback Share CTA */}
      <section className="share-feedback-section reveal-up">
        <div className="container">
          <div className="share-feedback-card">
            <div className="feedback-card-text">
              <h3>{isMr ? 'तुमचा अनुभव आमच्यासोबत शेअर करा!' : 'Share Your Crop Experience With Us!'}</h3>
              <p>
                {isMr
                  ? 'तुम्हीही PreneuR Seeds चे बियाणे वापरले आहे का? तुमच्या शेतातील फोटो व अभिप्राय व्हॉट्सॲपवर पाठवा.'
                  : 'Have you used PreneuR Seeds? Send your crop pictures and review to our team on WhatsApp.'}
              </p>
            </div>
            <a
              href="https://wa.me/919011957878?text=नमस्ते%20PreneuR%20Seeds,%20मी%20माझ्या%20शेतातील%20पिकांचे%20फोटो%20व%20अभिप्राय%20पाठवत%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-share-feedback"
            >
              <MessageSquare size={18} />
              <span>{isMr ? 'अभिप्राय पाठवा' : 'Send Feedback on WhatsApp'}</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
