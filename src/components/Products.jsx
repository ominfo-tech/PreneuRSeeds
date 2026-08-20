import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';

const ProductCard = ({ product, handleContact }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bazar-product-card">
      {/* Corner Ribbon Badge */}
      {product.badge && (
        <div className="corner-ribbon">
          <span>{product.badge}</span>
        </div>
      )}

      {/* Product Image Frame with /animate.png Loader */}
      <div className="bazar-image-container">
        {!isLoaded && (
          <div className="product-image-loader">
            <img 
              src="/animate.png" 
              alt="Loading product..." 
              className="animate-loader-img" 
            />
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`bazar-product-img ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Card Info */}
      <div className="bazar-info">
        <span className="product-category-tag">{product.category}</span>
        <h3 className="bazar-title" title={product.name}>
          {product.name}
        </h3>

        {/* Marathi Specs */}
        <div className="bazar-specs-list">
          <div className="spec-item">
            <span className="spec-dot">•</span>
            <span className="spec-label">प्रति एकर बियाणे:</span>
            <span className="spec-val">{product.seedRate}</span>
          </div>

          <div className="spec-item">
            <span className="spec-dot">•</span>
            <span className="spec-label">कालावधी:</span>
            <span className="spec-val">{product.duration}</span>
          </div>

          <div className="spec-item">
            <span className="spec-dot">•</span>
            <span className="spec-label">उत्पादन क्षमता:</span>
            <span className="spec-val">{product.yieldRate}</span>
          </div>
        </div>

        {/* Features box */}
        <div className="bazar-features-snippet">
          <strong>वैशिष्ट्ये:</strong> {product.features}
        </div>

        {/* Contact Now CTA Button */}
        <button 
          className="btn-contact-now" 
          onClick={() => handleContact(product.name)}
        >
          <PhoneCall size={16} />
          <span>Contact Now</span>
        </button>
      </div>
    </div>
  );
};

const Products = ({ lang = 'mr' }) => {
  // Group 1: 3 Soybean Products
  const soybeanProducts = [
    {
      id: 1,
      name: "फुले दुर्वा (के.डी.एस.-९९२)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/phule-durva.jpg",
      badge: "Best Seller",
      seedRate: "२५ किलो",
      duration: "१०० ते १०५ दिवस",
      yieldRate: "२५ ते ३० क्विं / हे",
      features: "मोठे आकाराचे दाणे, इतर वाणांपेक्षा १०% अधिक उत्पादन, तांबेरा रोगास प्रतिकारक्षम."
    },
    {
      id: 2,
      name: "फुले किमया (के.डी.एस. ७५३)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/phule-kimaya.jpg",
      badge: "लोकप्रिय",
      seedRate: "२५ किलो",
      duration: "९५ ते १०० दिवस",
      yieldRate: "२५ ते ३० क्विं / हे",
      features: "विस्तृत अनुकूलता, तेलाचे प्रमाण १८.२५%, खोडमाशी व तांबेरा रोगास प्रतिकारक्षम वाण."
    },
    {
      id: 3,
      name: "एम.ए.यु.एस-६१२ (MAUS-612)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/maus-612.jpg",
      badge: "उच्च प्रथिने",
      seedRate: "३० किलो",
      duration: "९५ ते १०० दिवस",
      yieldRate: "३० ते ३५ क्विं / हे",
      features: "लोकप्रिय वाण, झाडांची उंची ४०-४५ से.मी., तेलाचे प्रमाण २०.४९%, प्रथिने ४७.७५%."
    }
  ];

  // Group 2: 3 Tur & Wheat Products
  const turWheatProducts = [
    {
      id: 4,
      name: "तुर गोदावरी (बी.डी.एन-२०१३-४१)",
      category: "सुधारीत तुर बियाणे",
      image: "/products/tur-godavari.jpg",
      badge: "Best Seller",
      seedRate: "२ किलो",
      duration: "१५० ते १५५ दिवस",
      yieldRate: "२० ते २४ क्विं / हे",
      features: "वाढीचा कल निम पसरट, पांढरे दाणे, १०० दाण्यांचे वजन १०-१२ ग्रॅम, मर व वांझ रोग प्रतिकारक."
    },
    {
      id: 5,
      name: "तुर बी.डी.एन-७११ (BDN-711)",
      category: "सुधारीत तुर बियाणे",
      image: "/products/tur-bdn-711.png",
      badge: "लोकप्रिय वाण",
      seedRate: "२ किलो",
      duration: "१५० ते १६० दिवस",
      yieldRate: "१८ ते २० क्विं / हे",
      features: "वाढीचा कल निम पसरट, पांढरे दाणे, १०० दाण्यांचे वजन १० ते १२ ग्रॅम, मर व वांझ रोग प्रतिकारक."
    },
    {
      id: 6,
      name: "गहु जी.डब्ल्यू.-४९६ (GW-496)",
      category: "गहू बियाणे",
      image: "/products/gw-496.jpg",
      badge: "खात्रीशीर वाण",
      seedRate: "४० ते ४५ किलो",
      duration: "१०५ ते ११० दिवस",
      yieldRate: "१८ ते २२ क्विं / हे",
      features: "दाणे मध्यम ते मोठे, चांगली चमक व वजनदार, स्थिर व खात्रीशीर उत्पादन."
    }
  ];

  // Group 3: 3 Onion & Other Special Products
  const onionSpecialProducts = [
    {
      id: 7,
      name: "कांदा फुले-समर्थ",
      category: "कांदा बियाणे",
      image: "/products/phule-samarth.jpg",
      badge: "उत्कृष्ट साठवण",
      seedRate: "३ ते ३.५ किलो",
      duration: "९० ते १०० दिवस",
      yieldRate: "१० ते १२ टन प्रति एकर",
      features: "गडद लाल चमकदार कांदा, गोलाकार मध्यम ते मोठा, सुमारे २ ते ३ महिने साठवता येते."
    },
    {
      id: 8,
      name: "स्टोरेज स्पेशल (भिमा शक्ती)",
      category: "कांदा बियाणे",
      image: "/products/storage-special.jpg",
      badge: "प्रिमियम क्वॉलिटी",
      seedRate: "३ ते ४ किलो",
      duration: "१२० ते १३५ दिवस",
      yieldRate: "१० ते १२ टन प्रति एकर",
      features: "मध्यम ते मोठा आकार, आकर्षक लाल रंग, चांगली साठवण क्षमता, बाजारात चांगला भाव."
    },
    {
      id: 9,
      name: "PDKV-आंबा (AMS 100-39)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/pdkv-amba.jpg",
      badge: "भरघोस उत्पादन",
      seedRate: "२५ किलो",
      duration: "९५ ते १०० दिवस",
      yieldRate: "२५ ते ३० क्विं / हे",
      features: "अधिक फुटवे, मजबूत खोड व भरपूर शेंगांची संख्या, विविध हवामानात भरघोस उत्पादन."
    }
  ];

  const handleContact = (productName) => {
    const message = encodeURIComponent(`नमस्ते PreneuR Seeds, मला '${productName}' बियाण्यांविषयी अधिक माहिती हवी आहे.`);
    window.open(`https://wa.me/919011957878?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="products-header reveal-down">
          <h2 className="products-main-title">
            {lang === 'mr' ? (
              <>आमची प्रमुख <span className="text-green">बियाणे उत्पादने</span></>
            ) : (
              <>Our Featured <span className="text-green">Seed Products</span></>
            )}
          </h2>
          <p className="products-subtitle">
            {lang === 'mr'
              ? 'PreneuR Seeds - अधिक उत्पादन व खात्रीशीर गुणवत्तेसाठी आजच संपर्क साधा'
              : 'PreneuR Seeds - High yielding, disease-resistant certified seeds for farmers'
            }
          </p>
        </div>

        {/* 3x3 Horizontal Rows Layout */}
        <div className="bazar-grid-layout">
          {/* Row 1: Soybean Products */}
          <div className="bazar-column-group reveal-up">
            <div className="group-heading">
              <span>🌾 {lang === 'mr' ? 'सोयाबीन बियाणे' : 'Soybean Seeds'}</span>
            </div>
            <div className="bazar-cards-grid">
              {soybeanProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  handleContact={handleContact} 
                />
              ))}
            </div>
          </div>

          {/* Row 2: Tur & Wheat Products */}
          <div className="bazar-column-group reveal-up">
            <div className="group-heading">
              <span>🌱 {lang === 'mr' ? 'तूर व गहू बियाणे' : 'Pigeon Pea & Wheat Seeds'}</span>
            </div>
            <div className="bazar-cards-grid">
              {turWheatProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  handleContact={handleContact} 
                />
              ))}
            </div>
          </div>

          {/* Row 3: Onion & Special Products */}
          <div className="bazar-column-group reveal-up">
            <div className="group-heading">
              <span>🧅 {lang === 'mr' ? 'कांदा व इतर सुधारित बियाणे' : 'Onion & Certified Seeds'}</span>
            </div>
            <div className="bazar-cards-grid">
              {onionSpecialProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  handleContact={handleContact} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
