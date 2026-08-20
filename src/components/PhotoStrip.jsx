import React, { useState } from 'react';
import { Maximize2, X, ZoomIn } from 'lucide-react';

const PhotoStrip = ({ lang = 'mr' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const isMr = lang === 'mr';

  const galleryItems = [
    {
      id: 1,
      src: '/gallery/gallary1.jpeg',
      title: isMr ? 'सोयाबीन बियाणे माहिती तक्ता' : 'Soybean Seeds Variety Chart',
      alt: 'PreneuR Soybean Seeds Chart'
    },
    {
      id: 2,
      src: '/gallery/products gallary 2.jpeg',
      title: isMr ? 'तूर व कांदा बियाणे माहिती तक्ता' : 'Tur & Onion Seeds Variety Chart',
      alt: 'PreneuR Tur and Onion Seeds Chart'
    }
  ];

  return (
    <>
      <section className="variety-gallery-section" id="gallery-section">
        <div className="container">
          {/* Section Header */}
          <div className="gallery-section-header reveal-up">
            <h2 className="gallery-main-title">
              {isMr ? 'विविध वाण माहिती व उत्पादन तक्ता' : 'Seed Varieties & Yield Specification Charts'}
            </h2>
          </div>

          {/* 2 Horizontal Side-by-Side Cards */}
          <div className="gallery-two-col-grid">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`gallery-banner-card reveal-up delay-${(index + 1) * 150}`}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-img-container">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="gallery-banner-img" 
                    loading="lazy"
                  />
                  <div className="gallery-hover-overlay">
                    <button 
                      type="button" 
                      className="btn-enlarge-badge"
                      aria-label="Enlarge chart"
                    >
                      <ZoomIn size={18} />
                      <span>{isMr ? 'मोठा फोटो पहा' : 'View Full Image'}</span>
                    </button>
                  </div>
                </div>

                <div className="gallery-card-footer">
                  <div className="gallery-footer-info">
                    <h3 className="gallery-item-title">{item.title}</h3>
                  </div>
                  <button 
                    type="button" 
                    className="gallery-icon-expand"
                    title={isMr ? 'फोटो मोठा करा' : 'Enlarge'}
                    aria-label="Expand image"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div 
          className="gallery-lightbox-modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-top-bar">
            <span className="lightbox-title-text">{selectedImage.title}</span>
            <button 
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="lightbox-img-wrapper" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="lightbox-full-img" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoStrip;
