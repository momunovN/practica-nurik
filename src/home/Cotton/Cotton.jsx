import React from "react";
// import Cotton1 from '../images/cotton.svg'
// import Cotton2 from '../images/cotton2.svg'
// import Cotton3 from '../images/cotton3.svg'

import "../home.css";

const CottonCard = () => {
  return (
    <div className="cotton-card">
      <div className="cardss grid grid-cols-1 gap-4">
        <div className="card-1 flex items-end justify-center  rounded-lg">
          <div className="h-[72px] w-[295px]  bg-black rounded-lg flex-col justify-center items-center flex relative bottom-[24px] ">
            <p className="text-center text-white text-sm font-bold font-['Inter'] leading-tight">100% Premium Cotton</p>
            <p className="text-center text-white text-sm font-normal font-['Inter'] leading-tight">We use ethically sourced cotton only.</p>
          </div>
        </div>
        <div className="card-2-and-3 flex flex-col">
          <div className="card-2 flex items-end rounded-lg justify-center">
            <div className="h-[72px] w-[295px]  bg-black rounded-lg flex-col justify-center items-center flex relative bottom-[24px]">
              <p className="text-center text-white text-sm font-bold font-['Inter'] leading-tight">Made in Portugal</p>
              <p className="text-center text-white text-sm font-normal font-['Inter'] leading-tight">With hand finished details</p>
            </div>
          </div>
          <div className="card-3 flex items-end justify-center rounded-lg ">
            <div className="h-[72px] w-[295px]  bg-black rounded-lg flex-col justify-center items-center flex relative bottom-[24px]">
              <p className="text-center text-white text-sm font-bold font-['Inter'] leading-tight">Breathable material</p>
              <p className="text-center text-white text-sm font-normal font-['Inter'] leading-tight">Keeping you cool throughout the day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Cotton = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[32px] py-[64px]">
      <p className="text-center text-[#111111] text-[40px] font-extrabold font-['Inter'] leading-[48px]">We always have your back</p>
      <CottonCard />
    </section>
  );
};
