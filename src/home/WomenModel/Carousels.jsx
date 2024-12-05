import React from "react";
import "./Carousel.css";
const Carousel = ({ items, currentIndex, itemsToShow }) => {
    return (
      <div className="flex">
        <div className="carousell">
          <div className="carousel-container flex">
            {items
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((item, index) => (
                <div key={index} className="carousel-item flex">
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

export default Carousel;
