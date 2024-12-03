import React from "react";
import Carousel from "./Carousels";
import { items } from "./Items";


import "../home.css";

import arrowRight from "../images/ArrowRight.svg";
import arrowLeft from "../images/ArrowLeft.svg";

export const WomenModel = () => {
  
  return (
    <section className="flex flex-col justify-center">
      <p className="text-center text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        Women — Must Haves
      </p>

      <div className="women-carousel">
        <div className="carousel-item">
          <div className="car-left-right">
            <div className="left-arrow w-[56px] h-[56px] border border-[#111111] justify-center items-center gap-2 inline-flex">
              <img src={arrowLeft} alt="" />
            </div>
            <button  className="car-right left-arrow w-[56px] h-[56px] border border-[#111111] justify-center items-center gap-2 inline-flex">
              <img src={arrowRight} alt="" />
            </button>
          </div>

          <div className="carousel-inner flex gap-[35px]"></div>
        </div>
      </div>

      <Carousel items={items} />
    </section>
  );
};
