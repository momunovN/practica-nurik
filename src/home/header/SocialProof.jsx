import React from "react";

import "../home.css";

import Numero from "../images/Numero.svg";
import Bi from "../images/BI.svg";
import Kf from "../images/KF.svg";
import Fb from "../images/FB.svg";
import Hb from "../images/HB.svg";

export const SocialProof = () => {
  return (
    <div className="w-[1440px] h-28 flex items-center  bg-[#fb791c] justify-center   ">
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
