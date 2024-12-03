import React from "react";

import "../home.css";

export const CarouselImg = () => {
  return (
    <div className="shirt-images flex items-end pl-10 pb-10 ">
      <div className="h-14 px-6 py-4 bg-[#111111] rounded-lg justify-center items-center gap-2 inline-flex">
        <button className="text-center text-white text-base font-bold font-['Inter'] leading-normal">
          Shop Shirts
        </button>
      </div>
    </div>
  );
};
