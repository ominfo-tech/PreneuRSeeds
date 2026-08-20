import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = ({ lang = 'mr' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    seed: lang === 'mr' ? 'फुले संगम (के.डी.एस. ७२६)' : 'Phule Sangam (KDS-726)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const seedOptions = lang === 'mr' ? [
    "फुले दुर्वा (के.डी.एस.-९९२)",
    "फुले किमया (के.डी.एस. ७५३)",
    "फुले संगम (के.डी.एस. ७२६)",
    "एम.ए.यु.एस-६१२ (MAUS-612)",
    "PDKV-आंबा (AMS 100-39)",
    "गहु जी.डब्ल्यू.-४९६ (GW-496)",
    "तुर गोदावरी (बी.डी.एन-२०१३-४१)",
    "तुर बी.डी.एन-७११ (BDN-711)",
    "कांदा फुले-समर्थ",
    "स्टोरेज स्पेशल (भिमा शक्ती)",
    "इतर बियाणे चौकशी"
  ] : [
    "Phule Durva (KDS-992)",
    "Phule Kimaya (KDS-753)",
    "Phule Sangam (KDS-726)",
    "MAUS-612 Soybean",
    "PDKV Amba (AMS 100-39)",
    "Wheat GW-496",
    "Tur Godavari (BDN-2013-41)",
    "Tur BDN-711 (Pigeon Pea)",
    "Onion Phule Samarth",
    "Storage Special (Bhima Shakti)",
    "Other Seed Inquiry"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `*New Seed Inquiry - PreneuR Seeds*%0A%0A👤 *Name:* ${formData.name}%0A📞 *Phone:* ${formData.phone}%0A📍 *Location:* ${formData.location}%0A🌾 *Seed:* ${formData.seed}%0A📝 *Message:* ${formData.message || 'I would like to know more about seed availability and booking.'}`;
    
    window.open(`https://wa.me/919011957878?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="contact-form-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header reveal-down">
          <h2 className="contact-main-title">
            <span className="text-green">{lang === 'mr' ? 'संपर्क साधा' : 'Contact Us'}</span>
          </h2>
          <p className="contact-subtitle">
            {lang === 'mr' 
              ? 'बियाणे बुकिंग आणि माहितीसाठी खालील फॉर्म भरा किंवा थेट कॉल करा'
              : 'Fill the form below for seed inquiries & direct booking, or call us directly'
            }
          </p>
        </div>

        <div className="contact-grid-wrapper">
          {/* Left Column: 3 Clean Info Cards */}
          <div className="contact-info-cards reveal-left">
            {/* Address */}
            <div className="contact-card">
              <div className="contact-icon-circle">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <h3>{lang === 'mr' ? 'पत्ता' : 'Office Address'}</h3>
                <p>गट नं. ०२९५/३, मु.पो. तरडे (उरुळी कांचन), ता. हवेली, जि. पुणे - ४१२२०१</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon-circle">
                <Phone size={22} />
              </div>
              <div className="contact-card-content">
                <h3>{lang === 'mr' ? 'फोन / व्हॉट्सॲप' : 'Phone / WhatsApp'}</h3>
                <p><a href="tel:+919011957878">+91 9011957878</a></p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon-circle">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <h3>{lang === 'mr' ? 'ई-मेल' : 'Email Support'}</h3>
                <p><a href="mailto:preneuragroseeds2021@gmail.com">preneuragroseeds2021@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="contact-form-card reveal-right">
            {submitted && (
              <div className="form-success-banner">
                <CheckCircle2 size={20} />
                <span>{lang === 'mr' ? 'धन्यवाद! आपली माहिती व्हॉट्सॲपवर पाठवली आहे.' : 'Thank you! Your inquiry was sent to WhatsApp.'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="farmer-inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{lang === 'mr' ? 'शेतकऱ्याचे नाव *' : 'Farmer / Contact Name *'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={lang === 'mr' ? "उदा. रमेश पवार" : "e.g. Ramesh Pawar"}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{lang === 'mr' ? 'मोबाईल नंबर *' : 'Mobile / WhatsApp Number *'}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={lang === 'mr' ? "उदा. 98XXXXXXXX" : "e.g. 98XXXXXXXX"}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">{lang === 'mr' ? 'गाव / जिल्हा *' : 'Village / District *'}</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder={lang === 'mr' ? "उदा. बारामती, पुणे" : "e.g. Baramati, Pune"}
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="seed">{lang === 'mr' ? 'बियाणे निवडा *' : 'Select Seed Variety *'}</label>
                  <select
                    id="seed"
                    name="seed"
                    value={formData.seed}
                    onChange={handleChange}
                  >
                    {seedOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{lang === 'mr' ? 'संदेश (ऐच्छिक)' : 'Message / Acre Requirements (Optional)'}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder={lang === 'mr' ? "उदा. ५ एकरासाठी बियाणे हवे आहे..." : "e.g. Need seed booking for 5 acres..."}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-inquiry">
                <Send size={17} />
                <span>{lang === 'mr' ? 'चौकशी पाठवा' : 'Send WhatsApp Inquiry'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
