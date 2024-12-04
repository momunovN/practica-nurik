import React, { useState } from "react";
import Carousel from "./Carousels";
import { items } from "./Items";

import "../home.css";

import {ReactComponent as ArrowRight} from "../images/ArrowRight.svg";
import {ReactComponent as ArrowLeft} from "../images/ArrowLeft.svg";

export const WomenModel = () => {
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
    <section className="flex flex-col justify-center py-[64px] gap-[48px] select-carousel sect-carousel ">
      <p className="text-center text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        Women — Must Haves
      </p>

      <div className="women-carousel">
        <div className="carousel-item flex items-center">
          <div className="car-left-right ">
            <div
              className="left-arrow w-[56px] h-[56px] border border-[#111111] justify-center items-center gap-2 inline-flex"
              onClick={prev} // Добавляем обработчик для кнопки "влево"
            >
              <ArrowLeft  className="arrow-img" />
            </div>
            <div
              className="car-right left-arrow w-[56px] h-[56px] border border-[#111111] justify-center items-center gap-2 inline-flex"
              onClick={next} // Добавляем обработчик для кнопки "вправо"
            >
              <ArrowRight className="arrow-img"/>
            </div>
          </div>

          <div className="carousel-inner flex gap-[35px]">
            <Carousel
              items={items}
              currentIndex={currentIndex}
              itemsToShow={itemsToShow}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
