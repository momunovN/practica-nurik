import React from "react";
import { Banner } from "./banner";

import { SocialProof } from "./SocialProof";


import HeaderImg from "../images/headr-image.svg";
import ArrowRight from "../images/ArrowUpRight.svg";

import "../home.css";
import './adap.css'
export const Header = () => {
  return (
    <header className="flex flex-col header items-center gap-12">
      <Banner />
      <img
        src={HeaderImg}
        alt=""
        className="header-imgs w-[1216px] h-[169px] pt-[14.78px] pb-[16.08px] justify-center items-center inline-flex"
      />
      <main>
      <section className="sect-header w-[1440px] h-[550px] bg-black/20 flex aling-center justify-center ">
        <div className="text-btn flex w-[1217px] justify-between h-fit">
          <p className="w-[360px] text-white text-[32px] font-bold font-['Inter'] leading-[38.40px]">
            Spring Season
          </p>
          <button className="flex gap-2 text-center text-white text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">
            view collection
            <img src={ArrowRight} alt=""  className=""/>
          </button>
        </div>        
      </section>

        <SocialProof/>
      </main>
    </header>
  );
};
