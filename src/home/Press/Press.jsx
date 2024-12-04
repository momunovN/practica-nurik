import React from "react";

import "../home.css";

import Forbes from "../images/Forbes.svg";
import Bloomberg from "../images/Bloomberg.svg";
import FastCompany from "../images/Fast company.svg";

import { ReactComponent as Arrow } from "../images/ArrowUpRightVector.svg";
import { ReactComponent as Line } from "../images/Line 60.svg";

const ButtonPress = () => {
  return (
    <button className="flex gap-2 items-center text-center text-[#a857f9] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">
      Read article
      <Arrow fill="#A958FA" />
    </button>
  );
};

const PressContent = () => {
  return (
    <div className="press-content border rounded-[8px] px-[32px] py-[43.5px] flex gap-[64px]">
      <div className="Bloomberg flex flex-col gap-[56px]">
        <div className="bloomberg-title h-[123px] w-[298px] flex-col justify-start items-start gap-6 flex ">
          <img src={Bloomberg} alt="" />
          <p className="text-black text-lg font-medium font-['Inter'] leading-[25.20px]">
            “First Light: Where great design and the finest materials unite in
            ultimate comfort”
          </p>
        </div>
        <ButtonPress />
      </div>

      <Line/>
      <div className="Forbes flex flex-col gap-[56px]">
        <div className="forbes-title h-[123px] w-[298px] flex-col justify-start items-start gap-6 flex ">
          <img src={Forbes} alt="" />
          <p className="text-black text-lg font-medium font-['Inter'] leading-[25.20px]">
            “First light proves it is possible to combine great design with the
            finest materials available.”
          </p>
        </div>
        <ButtonPress />
      </div>
      <Line/>
      <div className="FastCompany flex flex-col gap-[56px]">
        <div className="fast-company-title h-[123px] w-[298px] flex-col justify-start items-start gap-6 flex ">
          <img src={FastCompany} alt="" />
          <p className="text-black text-lg font-medium font-['Inter'] leading-[25.20px]">
            “Redefining excellence with premium materials and visionary robust
            design.”
          </p>
        </div>
        <ButtonPress />
      </div>
    </div>
  );
};

export const Press = () => {
  return (
    <section className="flex justify-center py-[64px]">
      <div className="section-item justify-center flex flex-col gap-10">
        <p className="w-[1217px] text-center text-[#111111] text-[40px] font-extrabold font-['Inter'] leading-[48px]">Hot off the press</p>
        <PressContent />
      </div>
    </section>
  );
};
