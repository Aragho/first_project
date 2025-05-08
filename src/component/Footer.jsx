import React from "react";
import irs from "../assets/irs.png";

const Footer = () => {
  return (
    <div className="bg-[#1b1b1b] text-white text-sm py-2 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-10">
      <div className="flex items-center justify-center gap-2">
        <img src={irs} alt="IRS" className="w-10" />
        <h1 className="text-2xl font-serif text-[30px]">IRS</h1>
      </div>

      <div className="flex gap-2 mb-4 justify-center sm:justify-center w-full">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span className="border-l border-white"></span>
        <a href="#" className="hover:underline">
          Accessibility
        </a>
      </div>
    </div>
  );
};

export default Footer;
