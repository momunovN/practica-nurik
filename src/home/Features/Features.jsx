import React from "react";
import "../home.css";

import FeaturImg4 from "../images/star-1.svg";
import FeaturImg3 from "../images/shipment-return.svg";
import FeaturImg1 from "../images/water-drop-2.svg";
import FeaturImg2 from "../images/shipment-time.svg";

export const Features = () => {
  return (
    <section className="sect-feat flex my-[24px] justify-center  ">
      <div className="features-inner flex gap-[122px]  p-[32px] ">
        <div className="feat-item1 flex items-center gap-[16px] ">
          <div className="feat-img-cont  bg-white rounded-lg  border border-[#2f2b43]/10 justify-center items-center flex">
            <img src={FeaturImg1} alt="" />
          </div>
          <p className="w-[140px] text-[#111111] text-base font-medium font-['Inter'] leading-tight">
            Premium stain resistant fabrics
          </p>
        </div>
        <div className="feat-item2 flex items-center gap-[16px]">
          <div className="feat-img-cont bg-white rounded-lg  border border-[#2f2b43]/10 justify-center items-center flex">
            <img src={FeaturImg2} alt="" />
          </div>
          <p className="w-[140px] text-[#111111] text-base font-medium font-['Inter'] leading-tight">Free Express Shipping</p>
        </div>
        <div className="feat-item3 flex items-center gap-[16px]">
          <div className="feat-img-cont bg-white rounded-lg  border border-[#2f2b43]/10 justify-center items-center flex">
            <img src={FeaturImg3} alt="" />
          </div>

          <p className="w-[140px] text-[#111111] text-base font-medium font-['Inter'] leading-tight">Free returns within 30 days</p>
        </div>
        <div className="feat-item4 flex items-center gap-[16px]">
          <div className="feat-img-cont bg-white rounded-lg  border border-[#2f2b43]/10 justify-center items-center flex">
            <img src={FeaturImg4} alt="" />
          </div>

          <p className="w-[140px] text-[#111111] text-base font-medium font-['Inter'] leading-tight">Customers rate us 4.8 / 5.0</p>
        </div>
      </div>
    </section>
  );
};
