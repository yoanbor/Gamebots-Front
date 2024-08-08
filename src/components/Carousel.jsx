import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const longPressTime = 50;

  let longPressTimer = null;

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }

    setStartX(e.clientX);
    const carousel = carouselRef.current;
    if (carousel) {
      setStartScrollLeft(carousel.scrollLeft);
    }

    longPressTimer = setTimeout(() => {
      setIsDragging(true);
    }, longPressTime);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft = startScrollLeft - deltaX;
    }
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimer);

    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div
      className="image-carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      ref={carouselRef}
      style={{ overflowX: 'scroll', whiteSpace: 'nowrap', userSelect: 'none' }}
    >
      <div className="image-carousel-inner">
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img
              src={image.source}
              alt={`Carousel Image ${index}`}
              className="carousel-image"
              style={{ display: 'inline-block' }}
            />
            <div className="image-overlay" />
          </div>
        ))}
      </div>
    </div>
  );
};
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Carousel;