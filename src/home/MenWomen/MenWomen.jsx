import React from "react";

import "../home.css";
import Arrow from "../images/ArrowUpRightVector.svg";

const Men = () => {
  return (
    <div className="men-img w-[608px] h-[640px] flex items-end pl-10 pb-10">
      <p className="h-5 w-[61px] justify-start items-center gap-2 flex text-black text-sm font-medium font-['Inter'] uppercase leading-tight tracking-wide">
        Men
        <img src={Arrow} alt="" />
      </p>
    </div>
  );
};

const Women = () => {
  return (
    <div className="women-img w-[608px] h-[640px] flex items-end pl-10 pb-10    ">
      <p className="h-5 w-[61px] justify-start items-start gap-2 flex text-black text-sm font-medium font-['Inter'] uppercase leading-tight tracking-wide">
        Women
        <img
          src={Arrow}
          alt=""
          className="w-5 h-5   inline-flex"
        />
      </p>
    </div>
  );
};

export const MenWomen = () => {
  return (
    <section className="flex justify-center my-[64px]">
      <Women />
      <Men />
    </section>
  );
};
