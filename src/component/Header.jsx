import React, { useState, useEffect, useRef } from "react";
import usa from "../assets/usa.png";
import irs from "../assets/irs.png";
import { Link } from "react-router-dom";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-center items-center bg-[#f1f1f1] py-2">
        <img src={usa} alt="USA" className="w-5" />
        <p className="text-black text-[12px] ml-2">
          An official website of the United States government
        </p>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#00599c] px-4 py-6 text-white flex justify-between items-center relative">
        {/* Logo and IRS */}
        <div className="flex items-center">
          <img src={irs} alt="IRS" className="w-10" />
          <h1 className="text-2xl font-serif text-[40px]">IRS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-sm gap-6">
          <a href="#" className="hover:underline px-2">Help</a>
          <span className="border-l border-white h-4 mx-2"></span>
          <a href="#" className="hover:underline px-2">News</a>
          <span className="border-l border-white h-4 mx-2"></span>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="hover:underline px-2">English ▾</button>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 bg-white text-black text-sm rounded shadow-md z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Español</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">中文(简体)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">中文 (繁體)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">한국어</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Русский</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tiếng Việt</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kreyòl ayisyen</li>
              </ul>
            )}
          </div>
          <span className="border-l border-white h-4 mx-2"></span>
          <a href="#" className="hover:underline px-2">Tax Pros</a>
          <span className="border-l border-white h-4 mx-2"></span>
          <Link to="/pay" className="hover:underline px-2">Sign In</Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/pay" className="hover:underline text-sm">Sign In</Link>
          <div className="border-l border-white h-4 mx-2"></div>
          <button onClick={() => setShowSearch(!showSearch)} className="text-sm">
            Search
          </button>
          <div className="border-l border-white h-4 mx-2"></div>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-sm hover:border-2 border-white px-2 py-1 rounded-md"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#002d62] z-20 text-white px-4 py-4 md:hidden h-[700px] text-[18px]">
        {[
          "File",
          "Pay",
          "Refunds",
          "Credits & Deductions",
          "Forms & Instructions",
          "Help",
          "News",
          "Tax Pros",
          "English ▾",
        ].map((item, idx) => (
          <div key={idx}>
            {/* Conditionally add bg-[#00599c] for specific items */}
            <div 
              className={`block py-1 hover:underline ${["Help", "News", "Tax Pros", "English ▾"].includes(item) ? "bg-[#00599c]" : ""}`}
            >
              {/* Add plus sign for specific items */}
              {["File", "Pay", "Refunds", "Credits & Deductions", "Forms & Instructions"].includes(item) ? (
                <div className="flex justify-between items-center">
                  <span>{item}</span>
                  <span className="text-4xl">+</span>
                </div>
              ) : item === "English ▾" ? (
                <div>
                  <p className="font-semibold mt-2">{item}</p>
                  <ul className="pl-4 text-sm">
                    <li className="py-1 hover:underline cursor-pointer">Español</li>
                    <li className="py-1 hover:underline cursor-pointer">中文(简体)</li>
                    <li className="py-1 hover:underline cursor-pointer">中文 (繁體)</li>
                    <li className="py-1 hover:underline cursor-pointer">한국어</li>
                    <li className="py-1 hover:underline cursor-pointer">Русский</li>
                    <li className="py-1 hover:underline cursor-pointer">Tiếng Việt</li>
                    <li className="py-1 hover:underline cursor-pointer">Kreyòl ayisyen</li>
                  </ul>
                </div>
              ) : (
                item
              )}
            </div>
          </div>
        ))}
      </div>
      
       
        )}

        {/* Search Input Toggle */}
        {showSearch && (
          <div className="absolute top-full right-0 w-full px-4 mt-2 md:hidden z-20">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-full px-3 pr-10 py-1 rounded-md border border-gray-300 text-black text-sm focus:outline-none"
              />
              <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      {/* Blue Menu Section (Desktop Only) */}
      <div className="bg-[#002d62] hidden md:flex justify-around items-center px-4 py-4 text-white text-sm font-medium">
        <div className="flex gap-6">
          <Link to="#" className="hover:underline">File</Link>
          <Link to="/pay" className="hover:underline">Pay</Link>
          <Link to="#" className="hover:underline">Refunds</Link>
          <Link to="#" className="hover:underline">Credits & Deductions</Link>
          <Link to="#" className="hover:underline">Forms & Instructions</Link>
        </div>

        <div className="relative w-64">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full px-3 pr-10 py-1 rounded-md border border-gray-300 text-black text-sm focus:outline-none"
          />
          <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
