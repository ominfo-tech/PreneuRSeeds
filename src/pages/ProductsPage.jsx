import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PhoneCall, Download, FileText, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

const ProductsPage = ({ lang = 'mr' }) => {
  const isMr = lang === 'mr';
  const [activeCategory, setActiveCategory] = useState('all');

  const allProducts = [
    // Soybean Seeds
    {
      id: 1,
      categoryKey: 'soybean',
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
      categoryKey: 'soybean',
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
      categoryKey: 'soybean',
      name: "एम.ए.यु.एस-६१२ (MAUS-612)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/maus-612.jpg",
      badge: "उच्च प्रथिने",
      seedRate: "३० किलो",
      duration: "९५ ते १०० दिवस",
      yieldRate: "३० ते ३५ क्विं / हे",
      features: "लोकप्रिय वाण, झाडांची उंची ४०-४५ से.मी., तेलाचे प्रमाण २०.४९%, प्रथिने ४७.७५%."
    },
    {
      id: 4,
      categoryKey: 'soybean',
      name: "PDKV-आंबा (AMS 100-39)",
      category: "सुधारीत सोयाबीन बियाणे",
      image: "/products/pdkv-amba.jpg",
      badge: "भरघोस उत्पादन",
      seedRate: "२५ किलो",
      duration: "९५ ते १०० दिवस",
      yieldRate: "२५ ते ३० क्विं / हे",
      features: "अधिक फुटवे, मजबूत खोड व भरपूर शेंगांची संख्या, विविध हवामानात भरघोस उत्पादन."
    },

    // Tur & Wheat Seeds
    {
      id: 5,
      categoryKey: 'tur-wheat',
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
      id: 6,
      categoryKey: 'tur-wheat',
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
      id: 7,
      categoryKey: 'tur-wheat',
      name: "गहु जी.डब्ल्यू.-४९६ (GW-496)",
      category: "गहू बियाणे",
      image: "/products/gw-496.jpg",
      badge: "खात्रीशीर वाण",
      seedRate: "४० ते ४५ किलो",
      duration: "१०५ ते ११० दिवस",
      yieldRate: "१८ ते २२ क्विं / हे",
      features: "दाणे मध्यम ते मोठे, चांगली चमक व वजनदार, स्थिर व खात्रीशीर उत्पादन."
    },

    // Onion & Other Seeds
    {
      id: 8,
      categoryKey: 'onion',
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
      id: 9,
      categoryKey: 'onion',
      name: "स्टोरेज स्पेशल (भिमा शक्ती)",
      category: "कांदा बियाणे",
      image: "/products/storage-special.jpg",
      badge: "प्रिमियम क्वॉलिटी",
      seedRate: "३ ते ४ किलो",
      duration: "१२० ते १३५ दिवस",
      yieldRate: "१० ते १२ टन प्रति एकर",
      features: "मध्यम ते मोठा आकार, आकर्षक लाल रंग, चांगली साठवण क्षमता, बाजारात चांगला भाव."
    }
  ];

  const categories = [
    { key: 'all', label: isMr ? '🌾 सर्व उत्पादने' : '🌾 All Seeds' },
    { key: 'soybean', label: isMr ? '🌱 सोयाबीन बियाणे' : '🌱 Soybean' },
    { key: 'tur-wheat', label: isMr ? '🌿 तूर व गहू' : '🌿 Pigeon Pea & Wheat' },
    { key: 'onion', label: isMr ? '🧅 कांदा बियाणे' : '🧅 Onion Seeds' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.categoryKey === activeCategory);

  const handleContact = (productName) => {
    const message = encodeURIComponent(`नमस्ते PreneuR Seeds, मला '${productName}' बियाण्यांविषयी अधिक माहिती व बुकिंग करायचे आहे.`);
    window.open(`https://wa.me/919011957878?text=${message}`, '_blank');
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-main-heading">
              {isMr ? 'आमची प्रमाणित बियाणे उत्पादने' : 'Certified Seed Products Catalog'}
            </h1>
            <p className="page-header-tagline">
              {isMr
                ? 'अधिक फुटवे, भरघोस उत्पादन आणि उत्कृष्ट रोगप्रतिकारशक्ती देणारे खात्रीशीर वाण'
                : 'High-yielding, disease-resistant certified hybrid seeds for farmers'}
            </p>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="catalog-section">
        <div className="container">
          {/* Filter Pills */}
          <div className="catalog-filters-bar reveal-down">
            <div className="filter-label">
              <Filter size={16} />
              <span>{isMr ? 'प्रवर्ग निवडा:' : 'Filter by:'}</span>
            </div>
            <div className="filter-buttons-group">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  className={`btn-filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Product Cards Grid */}
          <div className="bazar-cards-grid catalog-grid reveal-up">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bazar-product-card">
                {product.badge && (
                  <div className="corner-ribbon">
                    <span>{product.badge}</span>
                  </div>
                )}

                <div className="bazar-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="bazar-product-img loaded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="bazar-info">
                  <span className="product-category-tag">{product.category}</span>
                  <h3 className="bazar-title" title={product.name}>
                    {product.name}
                  </h3>

                  <div className="bazar-specs-list">
                    <div className="spec-item">
                      <span className="spec-dot">•</span>
                      <span className="spec-label">{isMr ? 'प्रति एकर बियाणे:' : 'Seed Rate:'}</span>
                      <span className="spec-val">{product.seedRate}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-dot">•</span>
                      <span className="spec-label">{isMr ? 'कालावधी:' : 'Duration:'}</span>
                      <span className="spec-val">{product.duration}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-dot">•</span>
                      <span className="spec-label">{isMr ? 'उत्पादन क्षमता:' : 'Yield:'}</span>
                      <span className="spec-val">{product.yieldRate}</span>
                    </div>
                  </div>

                  <div className="bazar-features-snippet">
                    <strong>{isMr ? 'वैशिष्ट्ये:' : 'Features:'}</strong> {product.features}
                  </div>

                  <button 
                    className="btn-contact-now" 
                    onClick={() => handleContact(product.name)}
                  >
                    <PhoneCall size={16} />
                    <span>{isMr ? 'थेट संपर्क / बुकिंग' : 'Book on WhatsApp'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Brochure Download Strip */}
          <div className="catalog-brochure-card reveal-up">
            <div className="brochure-card-inner">
              <div className="brochure-text">
                <span className="brochure-tag">
                  <FileText size={15} />
                  <span>{isMr ? 'अधिकृत ब्रोशर' : 'Official Brochure'}</span>
                </span>
                <h3>{isMr ? 'सर्व बियाण्यांचे संपूर्ण माहितीपत्रक डाउनलोड करा' : 'Download Complete Product Information Brochure'}</h3>
                <p>
                  {isMr
                    ? 'पेरणी पद्धती, खत नियोजन आणि वाणांची सविस्तर तांत्रिक माहिती एकाच PDF फाईलमध्ये.'
                    : 'Detailed technical specs, crop management, and fertilizer guidelines in one PDF.'}
                </p>
              </div>
              <a 
                href="/PreneuR-Seeds-Brochure.pdf" 
                download="PreneuR-Seeds-Brochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-catalog-download"
              >
                <Download size={18} />
                <span>{isMr ? 'माहितीपत्रक PDF डाउनलोड करा' : 'Download Brochure PDF'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
