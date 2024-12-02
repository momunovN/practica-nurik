import React from "react";
import "../home.css";

import Shirt from "../images/shirt1.svg";
import ArrowLeft from "../images/ArrowLeft.svg";
import ArrowRight from "../images/ArrowRight.svg";

export const Carousel = () => {
  return (
    <div className="carousel w-[720px] h-[720px]">
      <div className="carousel-item flex gap-1">
        <img src={ArrowLeft} alt="" />
        <div className="w-[400px] h-[376px] px-[34px] py-[11px] rounded-lg justify-center items-center inline-flex">
          <img className="w-[332px] h-[354px]" src={Shirt} />
        </div>
        <img src={ArrowRight} alt="" />
      </div>

      <div className="price-car">
        <p>Basic Shirt</p>
        <p>€49</p>
      </div>
    </div>
  );
};
