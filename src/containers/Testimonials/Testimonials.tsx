import { useState, useEffect } from 'react';
import './Testimonials.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { testimonials } from '../../utils/data';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="testimonials-container">
      {/* Header Section */}
      <div className="testimonials-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ce spun clienții
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Recomandări de la companii și persoane cu care am colaborat
        </motion.p>
      </div>

      {/* Main Slider */}
      <div className="testimonials-slider">
        <div className="slider-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="testimonial-card"
            >
              <div className="quote-icon">
                <FormatQuoteIcon />
              </div>

              <p className="testimonial-content">{testimonials[currentIndex].content}</p>

              <div className="testimonial-author">
                <div className="author-avatar">{testimonials[currentIndex].name.charAt(0)}</div>
                <div className="author-info">
                  <h3 className="author-name">{testimonials[currentIndex].name}</h3>
                  <p className="author-role">
                    {testimonials[currentIndex].role} la {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-controls">
            <button
              className="slider-btn prev"
              onClick={() => paginate(-1)}
              aria-label="Testimonialul anterior"
            >
              <ChevronLeftIcon />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="slider-btn next"
              onClick={() => paginate(1)}
              aria-label="Testimonialul următor"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View for Desktop */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="quote-icon">
              <FormatQuoteIcon />
            </div>

            <p className="testimonial-content">{testimonial.content}</p>

            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.name.charAt(0)}</div>
              <div className="author-info">
                <h3 className="author-name">{testimonial.name}</h3>
                <p className="author-role">
                  {testimonial.role} la {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__whitebg'
);
