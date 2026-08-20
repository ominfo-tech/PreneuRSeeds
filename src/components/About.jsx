import React from 'react';

const About = ({ lang = 'mr' }) => {
  const aboutImage = "/about-seed.jpg";

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Side: Image animated from Left */}
          <div className="about-visual reveal-left">
            <img 
              src={aboutImage} 
              alt="Farmer and seed sowing" 
              className="about-clean-image" 
            />
          </div>

          {/* Right Side: Text animated from Right */}
          <div className="about-content reveal-right">
            <h2 className="about-title">
              <span className="text-green">PreneuR Seeds</span> {lang === 'mr' ? 'बद्दल थोडक्यात' : 'About Us'}
            </h2>

            {lang === 'mr' ? (
              <>
                <p className="about-lead">
                  <strong>PreneuR Seeds Pvt. Ltd.</strong> ही कंपनी शेतकरी बांधवांना समृद्ध आणि भरघोस उत्पादनासाठी उच्च प्रतीची हायब्रिड व संशोधन बियाणे पुरवण्यासाठी कटिबद्ध आहे.
                </p>
                <p className="about-desc">
                  आमचे ब्रीदवाक्य <em>"For Better Tomorrow... (उद्याच्या चांगल्या भविष्यासाठी)"</em> हे ध्यानात ठेवून, आम्ही विविध प्रकारच्या माती आणि बदलत्या हवामानात तग धरून विक्रमी उत्पादन देणाऱ्या दर्जेदार बियाणांची निर्मिती करतो.
                </p>
                <p className="about-desc">
                  कडक गुणवत्ता नियंत्रण, उच्च उगवण क्षमता, रोगप्रतिकारक शक्ती आणि कृषी तज्ज्ञांचे मार्गदर्शन यामुळे आज हजारो शेतकरी PreneuR Seeds वर पूर्ण विश्वास ठेवतात.
                </p>
              </>
            ) : (
              <>
                <p className="about-lead">
                  <strong>PreneuR Seeds Pvt. Ltd.</strong> is dedicated to empowering farmers with premium hybrid and research-backed certified seeds for maximum crop yield.
                </p>
                <p className="about-desc">
                  Guided by our core motto <em>"For Better Tomorrow..."</em>, we develop superior, disease-resistant seed varieties adapted to diverse soils and climatic conditions.
                </p>
                <p className="about-desc">
                  With rigorous quality testing, exceptional germination rates, high disease tolerance, and expert agronomy support, thousands of progressive farmers trust PreneuR Seeds.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
