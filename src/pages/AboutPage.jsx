import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Award, Microscope, Sprout, Users, CheckCircle2, Sliders, FlaskConical, PackageCheck, ArrowRight } from 'lucide-react';
import FarmerCTA from '../components/FarmerCTA';

const AboutPage = ({ lang = 'mr' }) => {
  const isMr = lang === 'mr';

  const coreValues = [
    {
      icon: ShieldCheck,
      title: isMr ? '१००% प्रमाणित गुणवत्ता' : '100% Certified Quality',
      desc: isMr
        ? 'प्रत्येक बियाणे लॉटची कठोर प्रयोगशाळा आणि क्षेत्रीय चाचणी घेतली जाते, ज्यामुळे ९८%+ खात्रीशीर उगवण होते.'
        : 'Every seed lot undergoes rigorous laboratory and field testing to ensure 98%+ germination purity.'
    },
    {
      icon: Microscope,
      title: isMr ? 'प्रगत कृषी संशोधन (R&D)' : 'Advanced Agri Research',
      desc: isMr
        ? 'हवामान बदलांना तोंड देणारे आणि रोग-कीड प्रतिकारक उच्च उत्पादनक्षम सुधारित वाण विकसित करणे.'
        : 'Developing climate-resilient and pest-resistant high-yielding hybrid varieties for progressive farmers.'
    },
    {
      icon: Users,
      title: isMr ? 'शेतकरी-केंद्री दृष्टिकोन' : 'Farmer-First Philosophy',
      desc: isMr
        ? 'केवळ बियाणे विक्री नाही, तर पेरणीपासून ते काढणीपर्यंत शेतकऱ्यांना मोफत कृषी सल्ला व मार्गदर्शन.'
        : 'Beyond seed distribution, providing end-to-end agronomy guidance from sowing to harvest.'
    },
    {
      icon: Award,
      title: isMr ? 'विश्वसनीय ब्रँड' : 'Trusted Legacy',
      desc: isMr
        ? 'महाराष्ट्रभरातील हजारो प्रगतीशील शेतकऱ्यांचा विश्वास आणि उत्कृष्ट उत्पादनाची निरंतर परंपरा.'
        : 'Trusted by thousands of farmers across Maharashtra with a proven track record of maximum yield.'
    }
  ];

  const processSteps = [
    {
      step: '०१',
      icon: Sprout,
      title: isMr ? 'उत्कृष्ट वाण निवड' : 'Superior Germplasm Selection',
      desc: isMr ? 'कृषी विद्यापीठांच्या सर्वोत्तम व प्रमाणित वाणांची प्राथमिक निवड.' : 'Selecting top-grade foundation seeds from premier agricultural universities.'
    },
    {
      step: '०२',
      icon: Sliders,
      title: isMr ? 'अत्याधुनिक प्रक्रिया' : 'Modern Seed Conditioning',
      desc: isMr ? 'स्वच्छता, ग्रेडिंग, ग्रॅव्हिटी सेपरेटर आणि सुरक्षित बुरशीनाशक प्रक्रिया.' : 'Precision grading, gravity separation, and protective eco-friendly seed treatment.'
    },
    {
      step: '०३',
      icon: FlaskConical,
      title: isMr ? 'कठोर लॅब चाचणी' : 'Laboratory & Grow-out Tests',
      desc: isMr ? 'उगवण क्षमता, ओलावा व आनुवंशिक शुद्धतेची अचूक तपासणी.' : 'Stringent testing for germination percentage, moisture, and genetic purity.'
    },
    {
      step: '०४',
      icon: PackageCheck,
      title: isMr ? 'हवाबंद पॅकिंग व वितरण' : 'Moisture-proof Packaging',
      desc: isMr ? 'गुणवत्ता टिकवून ठेवणारे मजबूत पॅकिंग आणि थेट शेतकऱ्यांपर्यंत पुरवठा.' : 'Tamper-evident, climate-shield packaging delivered directly to farmers and dealers.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-main-heading">
              {isMr ? 'आमच्याबद्दल — PreneuR Seeds' : 'About Us — PreneuR Seeds'}
            </h1>
            <p className="page-header-tagline">
              {isMr
                ? 'शेतकऱ्यांच्या समृद्धीसाठी उच्च दर्जाच्या प्रमाणित बियाण्यांची खात्रीशीर निर्मिती'
                : 'Dedicated to empowering Indian agriculture with certified, high-yield seeds'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="about-details-section">
        <div className="container">
          <div className="about-details-grid">
            <div className="about-details-text reveal-left">
              <h2 className="section-title-large">
                {isMr ? (
                  <>शेतकऱ्यांच्या सर्वांगीण प्रगतीसाठी <span className="text-green">समर्पित संस्था</span></>
                ) : (
                  <>Dedicated to Maximum <span className="text-green">Agricultural Growth</span></>
                )}
              </h2>
              <p className="about-p-main">
                {isMr
                  ? 'PreneuR Seeds Pvt. Ltd. ही कृषी क्षेत्रातील अग्रगण्य बियाणे उत्पादक कंपनी आहे. शेतीमध्ये कमी खर्चात जास्तीत जास्त उत्पादन मिळावे आणि बदलते हवामान, रोग-किडींचा प्रादुर्भाव यावर मात करता यावी, यासाठी आम्ही उच्च प्रतिची, रोगप्रतिकारक व खात्रीशीर उगवण क्षमता असणारी बियाणे शेतकऱ्यांपर्यंत पोहोचवतो.'
                  : 'PreneuR Seeds Pvt. Ltd. is a leading seed production enterprise headquartered in Pune, Maharashtra. We empower farmers with superior genetics, high disease tolerance, and exceptional seed vigor to maximize farm profitability across varying climates.'}
              </p>
              <p className="about-p-sub">
                {isMr
                  ? 'सोयाबीन (फुले दुर्वा, फुले किमया, MAUS-612), तूर (गोदावरी, BDN-711), गहू (GW-496) आणि कांदा (फुले-समर्थ, स्टोरेज स्पेशल) या प्रमुख पिकांमध्ये PreneuR Seeds ने शेतकऱ्यांमध्ये अढळ विश्वास संपादन केला आहे.'
                  : 'From high-protein Soybeans to robust Pigeon Peas, premium Wheats, and long-storage Onions, our certified portfolio delivers proven crop performance.'}
              </p>

              <div className="about-highlights-list">
                <div className="about-hl-item">
                  <CheckCircle2 size={20} className="hl-icon" />
                  <span>{isMr ? '९८% पेक्षा जास्त एकसमान उगवण क्षमता' : '98%+ Uniform Germination Rate'}</span>
                </div>
                <div className="about-hl-item">
                  <CheckCircle2 size={20} className="hl-icon" />
                  <span>{isMr ? 'तांबेरा व मर रोगास मजबूत प्रतिकारशक्ती' : 'High Resistance against Rust & Wilt'}</span>
                </div>
                <div className="about-hl-item">
                  <CheckCircle2 size={20} className="hl-icon" />
                  <span>{isMr ? 'तज्ञांमार्फत थेट पेरणी व पीक मार्गदर्शन' : 'Expert Agronomy Advisory from Sowing to Harvest'}</span>
                </div>
              </div>
            </div>

            <div className="about-details-image reveal-right">
              <div className="about-img-frame">
                <img 
                  src="/farmers/farmer-field.jpg" 
                  alt="PreneuR Seeds Farmer Field" 
                  className="about-clean-image"
                  onError={(e) => { e.target.src = '/footerlogo.png'; }}
                />
                <div className="about-experience-badge">
                  <span className="exp-num">100%</span>
                  <span className="exp-txt">{isMr ? 'खात्रीशीर गुणवत्ता' : 'Quality Guaranteed'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header-center reveal-down">
            <h2 className="section-title-large">
              {isMr ? (
                <>ज्या मूल्यांवर आमचा <span className="text-green">विश्वास आहे</span></>
              ) : (
                <>Values That <span className="text-green">Drive Us</span></>
              )}
            </h2>
            <p className="section-subtitle">
              {isMr
                ? 'गुणवत्ता, प्रामाणिकपणा आणि शेतकऱ्यांचा विकास हीच आमची मुख्य प्रेरणा आहे.'
                : 'Driven by quality excellence, farmer trust, and sustainable agricultural innovation.'}
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="value-card reveal-up">
                  <div className="value-icon-box">
                    <IconComp size={28} />
                  </div>
                  <h3 className="value-card-title">{val.title}</h3>
                  <p className="value-card-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seed Processing & Quality Control Process - Arrow Designed */}
      <section className="process-section">
        <div className="container">
          <div className="section-header-center reveal-down">
            <h2 className="section-title-large">
              {isMr ? (
                <>बियाणे निर्मितीची <span className="text-green">४-टप्पीय मानके</span></>
              ) : (
                <>Our 4-Stage <span className="text-green">Seed Quality Protocol</span></>
              )}
            </h2>
          </div>

          {/* Arrow Flow Container */}
          <div className="process-arrow-flow-grid">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="process-arrow-card reveal-up">
                    <div className="process-arrow-header">
                      <span className="process-number-badge">{step.step}</span>
                      <div className="process-step-icon">
                        <StepIcon size={24} />
                      </div>
                    </div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="process-step-arrow-divider" aria-hidden="true">
                      <div className="arrow-pulse-bubble">
                        <ArrowRight size={20} className="arrow-horizontal" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FarmerCTA lang={lang} />
    </div>
  );
};

export default AboutPage;
