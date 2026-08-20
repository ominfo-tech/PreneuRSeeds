import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';

const FarmerCTA = ({ lang = 'mr' }) => {
  const farmerImg = "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="farmer-split-section">
      <div className="container">
        <div className="farmer-split-card">
          {/* Left Half: #fdd835 Background with Direct Text & Big Buttons */}
          <div className="farmer-split-left reveal-left">
            <h2 className="farmer-split-title">
              {lang === 'mr' ? (
                <>
                  शेतकरी बांधवांनो, आपल्या शेतीसाठी <br />
                  <span className="text-dark-green">योग्य बियाणे आजच निवडा!</span>
                </>
              ) : (
                <>
                  Dear Farmers, Choose the Best <br />
                  <span className="text-dark-green">Certified Seeds for Your Farm!</span>
                </>
              )}
            </h2>

            <p className="farmer-split-subtext">
              {lang === 'mr' 
                ? 'भरघोस उत्पादन, उत्कृष्ट उगवण क्षमता आणि मार्गदर्शनासाठी थेट संपर्क साधा.'
                : 'Get higher yield, guaranteed high germination and expert crop guidance today.'
              }
            </p>

            <div className="farmer-split-actions">
              <a href="tel:+919011957878" className="btn-split-call">
                <PhoneCall size={22} />
                <span>+91 9011957878</span>
              </a>

              <a 
                href={lang === 'mr' 
                  ? "https://wa.me/919011957878?text=नमस्ते%20PreneuR%20Seeds,%20मला%20बियाण्यांविषयी%20माहिती%20आणि%20बुकिंग%20करायचे%20आहे."
                  : "https://wa.me/919011957878?text=Hello%20PreneuR%20Seeds,%20I%20want%20to%20know%20more%20about%20your%20seed%20products."
                } 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-split-whatsapp"
              >
                <MessageSquare size={22} />
                <span>{lang === 'mr' ? 'व्हॉट्सॲप चौकशी' : 'WhatsApp Inquiry'}</span>
              </a>
            </div>
          </div>

          {/* Right Half: Farmer Image */}
          <div className="farmer-split-right reveal-right">
            <img 
              src={farmerImg} 
              alt="Farmer with harvest" 
              className="farmer-split-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerCTA;
