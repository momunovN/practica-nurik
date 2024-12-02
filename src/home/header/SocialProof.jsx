import React from "react";

import "../home.css";

import Numero from "../images/Numero.svg";
import Bi from "../images/BI.svg";
import Kf from "../images/KF.svg";
import Fb from "../images/FB.svg";
import Hb from "../images/HB.svg";

export const SocialProof = () => {
  return (
    <div className="w-[1440px] h-28 px-28 py-10 bg-[#fb791c] justify-between   ">
      <div className=" soc-images w-[1217px] justify-between items-start flex aling-center ">
        <img src={Numero} alt="" />
        <img src={Bi} alt="" />
        <img src={Kf} alt="" />
        <img src={Fb} alt="" />
        <img src={Hb} alt="" />
      </div>


      
    </div>
  );
};
