import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col ml-48">
      {/* This block will be shown only on medium and smaller screens */}
      <div className="block md:hidden">
        {/* More Help section that toggles on medium and smaller screens */}
        <div
          className="flex items-center justify-between bg-gray-300 p-2 rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="text-sm">More Help</h1>
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${isOpen ? "bg-gray-600" : "bg-white"}`}
          >
            {isOpen ? "-" : "+"}
          </span>
        </div>

        {isOpen && (
          <div className="mt-5 space-y-2 bg-gray-200 p-2 rounded">
            <h1 className="mt-5 px-2 text-lg font-semibold">Interactive Tax Assistant</h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-t border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Tools
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Report phishing
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Tax scams
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Identity theft
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Notices and letters
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Appeals
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Frequently asked questions
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Accessibility
            </h1>
            <h1 className="w-[220px] h-14 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Contact an international IRS office
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Tax topics
            </h1>
            <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
              Other languages
            </h1>
          </div>
        )}
      </div>

      {/* This part will be shown on medium and larger screens */}
      <div className="hidden md:block">
        {/* Always visible sidebar */}
        <h1 className="mt-5 px-2 text-lg font-semibold">Interactive Tax Assistant</h1>

        <h1 className="w-[220px] h-9 px-2 py-1 border-t border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Tools
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Report phishing
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Tax scams
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Identity theft
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Notices and letters
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Appeals
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Frequently asked questions
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Accessibility
        </h1>
        <h1 className="w-[220px] h-14 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Contact an international IRS office
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Tax topics
        </h1>
        <h1 className="w-[220px] h-9 px-2 py-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
          Other languages
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
