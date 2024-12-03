import React, { useState } from "react";
import './Carousel.css'
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousell">
      <button onClick={prev} className="carousel-button">
        Prev
      </button>
      <div className="carousel-container flex">
        {items
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((item, index) => (
            <div key={index} className="carousel-item flex">
              {item}
            </div>
          ))}
      </div>
      <button onClick={next} className="carousel-button">
        Next
      </button>
    </div>
  );
};

export default Carousel;
