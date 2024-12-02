import React from "react";
import "../home.css";
export const Banner = () => {
  return (
    <div className="dots_title w-[1440px] h-11 px-4 py-3 bg-[#fb791c] justify-between  items-start gap-2 flex">
      <div class="h-2 justify-start items-start gap-3 inline-flex">
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
      </div>

      <p className="text-center text-[#222222] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Summer sale up to 50% off</p>
      <div class="h-2 justify-start items-start gap-3 inline-flex">
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
        <div class="w-2 h-2 opacity-50 bg-white rounded-full"></div>
      </div>
    </div>
  );
};
