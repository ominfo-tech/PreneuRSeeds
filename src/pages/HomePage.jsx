import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import FarmerCTA from '../components/FarmerCTA';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import SocialFollow from '../components/SocialFollow';

const HomePage = ({ lang = 'mr' }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero lang={lang} />

      {/* About Us Section */}
      <About lang={lang} />

      {/* Products Section */}
      <Products lang={lang} />

      {/* Big Farmer CTA / Helpline Section */}
      <FarmerCTA lang={lang} />

      {/* Reviews Section with #4b8b3b & bg.png */}
      <Reviews lang={lang} />

      {/* High-Impact Slogan Section with bg.png & #fdd835 */}
      <section className="bg-banner-strip reveal-up">
        <div className="container">
          <div className="banner-strip-content">
            <h2 className="banner-highlight-slogan reveal-down">
              {lang === 'mr' 
                ? '"शेतकऱ्यांची समृद्धी, हीच आमची खरी प्रगती!"'
                : '"Farmer Prosperity is Our True Progress!"'
              }
            </h2>
            <p className="banner-highlight-subtext reveal-up">
              {lang === 'mr'
                ? 'PreneuR Seeds — उच्च उगवण क्षमता, रोगप्रतिकारक वाण आणि भरघोस शेती उत्पादन'
                : 'PreneuR Seeds — High Germination, Disease-Resistant Varieties & Bumper Yields'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Form & Info Section */}
      <Contact lang={lang} />

      {/* Instagram Follow Banner */}
      <SocialFollow lang={lang} />
    </>
  );
};

export default HomePage;
