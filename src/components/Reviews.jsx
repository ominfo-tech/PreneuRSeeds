import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "बाळासाहेब जाधव",
      location: "मु. पो. बारामती, जि. पुणे",
      crop: "फुले संगम (KDS-726) सोयाबीन",
      rating: 5,
      comment: "गेल्या हंगामात मी PreneuR Seeds चे 'फुले संगम ७२६' बियाणे वापरले. ९८% पेक्षा जास्त एकसमान उगवण झाली आणि तांबेरा रोगाचा अजिबात प्रादुर्भाव झाला नाही. एकरी विक्रमी उत्पादन मिळाले!",
      yieldStat: "+२८% अधिक उत्पादन"
    },
    {
      id: 2,
      name: "ज्ञानेश्वर पाटील",
      location: "औसा, जि. लातूर",
      crop: "तुर गोदावरी (BDN-2013-41)",
      rating: 5,
      comment: "तुर गोदावरी वाणाचे दाणे खूप टपोरे आणि पांढरे आले. मर रोगाला उत्तम प्रतिकार केला. बाजारात इतर वाणांपेक्षा या तुरीला जास्त भाव मिळाला. PreneuR बियाणे खरोखरच शेतकऱ्यांसाठी फायदेशीर आहे.",
      yieldStat: "उत्कृष्ट बाजारभाव"
    },
    {
      id: 3,
      name: "संजय देशमुख",
      location: "चांदवड, जि. नाशिक",
      crop: "कांदा फुले-समर्थ (Storage Special)",
      rating: 5,
      comment: "PreneuR Seeds चा कांदा फुले-समर्थ लावला होता. गाठीचा आकार एकसारखा गडद लाल आणि आकर्षक आला. ४ महिने चाळीत ठेवल्यानंतरही कांदा अजिबात सडला नाही. साठवणुकीसाठी नंबर १ जात आहे.",
      yieldStat: "४ महिने सुरक्षित साठवण"
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="reviews-header reveal-down">
          <h2 className="reviews-title">
            शेतकरी बांधवांचे <span className="highlight-yellow">विश्वासू अनुभव</span>
          </h2>
          <p className="reviews-subtitle">
            PreneuR Seeds च्या दर्जेदार बियाणांमुळे हजारो शेतकऱ्यांचे उत्पादन वाढले आणि शेती समृद्ध झाली.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((item, index) => (
            <div key={item.id} className={`review-card reveal-up delay-${(index + 1) * 100}`}>
              {/* Quote Icon */}
              <div className="quote-icon-box">
                <Quote size={28} className="quote-icon" />
              </div>

              {/* 5 Stars Rating */}
              <div className="review-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Comment Text */}
              <p className="review-comment">
                "{item.comment}"
              </p>

              {/* Crop & Yield Tag */}
              <div className="review-crop-tag">
                <span>🌾 {item.crop}</span>
                <span className="yield-badge">{item.yieldStat}</span>
              </div>

              {/* Farmer Info */}
              <div className="review-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="author-details">
                  <h4 className="author-name">
                    {item.name}
                    <CheckCircle2 size={15} className="verified-icon" title="प्रमाणित शेतकरी" />
                  </h4>
                  <p className="author-location">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
