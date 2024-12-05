import React from "react";
import FooterImg from "../images/FooterImg.svg";
import "../home.css";

const FooterTable = () => {
  return (
    <table className="footer-table  ">
      <tr className="">
        <td>Monday</td>
        <td>12.00 - 19.00</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>10.00 - 19.00</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>10.00 - 19.00</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>10.00 - 21.00</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>10.00 - 19.00</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>10.00 - 18.00</td>
      </tr>
      <tr>
        <td>Sunday</td>
        <td>12.00 - 18.00</td>
      </tr>
    </table>
  );
};

export const Footer = () => {
  return (
    <footer className="footer flex justify-center">
      <div className="footer-inner flex w-[1216px] my-[64px] bg-[#ffff]">
        <img src={FooterImg} alt="" className="w-[608px] h-[610px] " />
        <div className="footer-items flex flex-col gap-[32px] pt-[64px] pl-[64px]">
          <h1 className="footer-title w-[308px] text-black text-[32px] font-bold font-['Inter'] leading-[38.40px] ">
            Visit our popup shop
          </h1>
          <p className="w-[180px] text-black text-base font-medium font-['Inter'] leading-relaxed">Willemsparkweg 63 1071 GS Amsterdam The Netherlands</p>
          <div className="days ">
            <FooterTable />
          </div>
        </div>
      </div>
    </footer>
  );
};
