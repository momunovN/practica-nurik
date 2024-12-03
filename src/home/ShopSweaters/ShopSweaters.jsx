import React from "react";

import "../home.css";

const SweaterOne = () => {
  return (
    <div className="sweater-one h-[636px] w-[620px] relative bg-[#e7e7e7] rounded-lg flex items-end pl-10 pb-10">
      <button className="h-14 px-6 py-4 bg-[#111111] rounded-lg justify-center items-center gap-2 inline-flex">
        <span className="text-center text-white text-base font-bold font-['Inter'] leading-normal">
          Shop Sweaters
        </span>
      </button>
    </div>
  );
};

const SweaterContent = () => {
  return (
    <div className="sweater-contetn w-[620px]  h-[636px] p-10 bg-[#fb791c] rounded-lg flex-col justify-between items-start inline-flex">
      <p className="text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        “ First Light promises quality, timeless designs and with our mission it
        is truly a buy it for life purchase. “
      </p>
      <p className="text-black text-xl font-bold font-['Inter'] leading-[30px]">— Guera Latissa, Creative Director</p>
    </div>
  );
};

export const ShopSweater = () => {
  return (
    <section className="section-shop flex gap-6 justify-center px-[112px] py-[64px] ">
      <SweaterOne />
      <SweaterContent />
    </section>
  );
};
