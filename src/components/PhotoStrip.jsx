import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const PhotoStrip = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/gallery/gallery-1.jpg', alt: 'PreneuR Seeds Photo 1' },
    { id: 2, src: '/gallery/gallery-2.jpg', alt: 'PreneuR Seeds Photo 2' },
    { id: 3, src: '/gallery/gallery-3.jpg', alt: 'PreneuR Seeds Photo 3' },
    { id: 4, src: '/gallery/gallery-4.jpg', alt: 'PreneuR Seeds Photo 4' },
  ];

  return (
    <>
      <section className="photo-strip-section">
        <div className="container">
          <div className="photo-strip-grid">
            {images.map((item, index) => (
              <div 
                key={item.id} 
                className={`photo-strip-card reveal-up delay-${(index + 1) * 100}`}
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Top Corner Enlarge Button */}
                <button 
                  type="button"
                  className="card-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item.src);
                  }}
                  title="फोटो मोठा करा (Enlarge Image)"
                  aria-label="Enlarge Image"
                >
                  <Maximize2 size={18} />
                </button>

                {/* Normal Clear Natural Image */}
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="photo-strip-img" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Fullscreen Modal when image is enlarged */}
      {selectedImage && (
        <div 
          className="photo-lightbox-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="lightbox-close-btn"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Enlarged PreneuR Seeds Photo" 
              className="lightbox-img" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoStrip;
