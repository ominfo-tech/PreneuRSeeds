import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to trigger scroll reveal animations across page navigation.
 * Elements with animation classes get 'is-revealed' class when visible.
 */
export const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediate and observed reveal on every route change
    const initReveal = () => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.05,
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-up, .reveal-down, .reveal-zoom');

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already within visible window area, reveal immediately
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run after DOM rendering
    const timer = setTimeout(initReveal, 40);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};

export default useScrollReveal;
