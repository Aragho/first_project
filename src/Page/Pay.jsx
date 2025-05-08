import React from "react";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar.jsx"
import { IoIosShareAlt } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useState } from "react";

const Pay = () => {
      const [openAgency, setOpenAgency] = useState(false);
      const [openRights, setOpenRights] = useState(false);
      const [openIssue, setOpenIssue] = useState(false);
      const [openLanguages, setOpenLanguages] = useState(false);
      const [openRelated, setOpenRelated] = useState(false);
      const cards = [
        {
          title: "Individual",
          description: "Access your personal tax information, make payments and more.",
          signInText: "Sign in to online account",
          linkText: "New to online account? Get started"
        },
        {
          title: "Business",
          description: "View your business tax information, transcripts, balance due and more. ",
          signInText: "Sign in to business tax account",
          linkText: "New to business tax acoount? Get started"
        },
        {
          title: "Tax professional",
          description: "Manage your authorizations and view your client information.",
          signInText: "Sign in to tax pro account",
          linkText: "New to tax pro acccount? Get started"
        }
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
     

        <div className="container flex flex-col">
        <div className="mt-4 px-4 ml-48 hidden md:block">
  <ul className="flex flex-wrap items-center gap-2 text-sm">
    <Link to="/">
      <li className="underline text-blue-500">Home</li>
    </Link>
    <span>/</span>
    <li className="underline text-blue-500">Help</li>
    <span>/</span>
    <li className="underline text-blue-500">Tools</li>
    <span>/</span>
    <span>Your account</span>
  </ul>
</div>

          <h1 className=" ml-48 font-bold text-[30px] px-4 mt-7 md:">Your account</h1>

          <div className="flex px-4 mt-4">
  <ul className="flex flex-wrap items-center gap-2 ml-auto text-sm text-blue-500 underline">
    <li className="text-black">English</li>
    <li>Español</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>中文(简体)</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>中文 (繁體)</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>한국어</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>Русский</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>Tiếng Việt</li>
    <span className="border-l border-blue-400 h-4 mx-2"></span>
    <li>Kreyòl ayisyen</li>
  </ul>
</div>
<div className="flex flex-col lg:flex-row px-4 mt-4">
  {/* Sidebar */}
  <Sidebar />

  {/* Content Area */}
  <div className="flex-grow ml-8 mt-3">
    <p className="text-gray-700">
      You can use an IRS account to check and manage your tax information.
    </p>
    <h1 className="mt-5 font-bold text-[25px]">Learn more or sign in</h1>
    <h4 className="mt-3">
      Use the same sign-in for 3 types of accounts. If you're a new user, have your photo identification ready.
    </h4>

    {/* Account Cards (Side-by-side on large screens, stacked on medium screens) */}
    <div className="flex flex-wrap gap-6 mt-5 overflow-x-auto">
  {cards.map((card, index) => (
  <div
  key={index}
  className="border border-gray-300 w-full sm:w-full md:w-full lg:w-[250px] h-[200px] sm:h-[200px] md:h-[200px] lg:h-[300px] p-4 flex flex-col justify-between"
>

      <div>
        <h1 className="font-bold text-[20px] mb-2">{card.title}</h1>
        <p className="text-sm">{card.description}</p>
      </div>
      <div className="flex flex-col items-center">
      <Link to="/login">  <button className="bg-[#00599c] hover:bg-[#00457c] text-white py-3 px-4 font-bold rounded-md text-center text-sm w-full leading-snug mt-4">
          {card.signInText.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </button></Link>
        <h1 className="underline text-[#29aee9] mt-3 text-sm text-center">
          {card.linkText}
        </h1>
      </div>
    </div>
  ))}
</div>


    {/* "Without Account" Box (Below account cards on all screens) */}
    <div className="border border-gray-300 w-full lg:w-[800px] h-[200px] p-4 flex flex-col justify-between mt-6">
      <h1 className="font-bold text-[20px]">What you can do without an account</h1>
      <h3 className="text-sm text-gray-700 mt-2">You don't need an account</h3>
      <ul className="underline text-[#29aee9] mt-3 text-sm space-y-1 list-disc pl-4">
        <li>Make a payment</li>
        <li>Check your refund</li>
        <li>Check your amended return</li>
      </ul>
    </div>
  </div>
</div>

<div className="border border-gray-300 w-full sm:w-full md:w-full lg:w-[1084px] h-[65px] p-4 flex flex-row justify-between mt-6 px-4 lg:ml-48">
  <h1 className="text-[13px]">Page Last Reviewed or Updated: 06-Feb-2025</h1>
  <div className="flex gap-4 mt-2 items-center">
    <button className="border-2 border-[#00599c] font-bold rounded-sm px-7 h-8 flex text-[#00599c]">
      <IoIosShareAlt className="mt-1 mr-2" /> Share
    </button>
    <button className="border-2 border-[#00599c] font-bold px-7 flex rounded-sm h-8 text-[#00599c]">
      <FaPrint className="mt-1 mr-2" /> Print
    </button>
  </div>
</div>



</div>
<div className="px-4 bg-[#f3f3f3] w-full">
      <h1 className="border-4 border-black w-full mt-8"></h1>

      <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 text-sm font-medium py-4 mt-5">
        {/* OUR AGENCY */}
        <div className="w-full md:w-1/5">
          <h2
            onClick={() => setOpenAgency(!openAgency)}
            className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
          >
            + OUR AGENCY
          </h2>
          <div className={`space-y-2 font-normal ${openAgency ? "block" : "hidden"} md:block`}>
            <h1>About IRS</h1>
            <h1>Careers</h1>
            <h1>Operations and Budget</h1>
            <h1>Tax Statistics</h1>
            <h1>Help</h1>
            <h1>Find a Local Office</h1>
          </div>
        </div>

        {/* KNOW YOUR RIGHTS */}
        <div className="w-full md:w-1/5">
          <h2
            onClick={() => setOpenRights(!openRights)}
            className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
          >
            + KNOW YOUR RIGHTS
          </h2>
          <div className={`space-y-2 font-normal ${openRights ? "block" : "hidden"} md:block`}>
            <h1>Taxpayer Bill of Rights</h1>
            <h1>Taxpayer Advocate Service</h1>
            <h1>Independent Office of Appeals</h1>
            <h1>Civil Rights</h1>
            <h1>FOIA</h1>
            <h1>No FEAR Act Data</h1>
            <h1>Reliance on Guidance</h1>
          </div>
        </div>

        {/* RESOLVE AN ISSUE */}
        <div className="w-full md:w-1/5">
          <h2
            onClick={() => setOpenIssue(!openIssue)}
            className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
          >
            + RESOLVE AN ISSUE
          </h2>
          <div className={`space-y-2 font-normal ${openIssue ? "block" : "hidden"} md:block`}>
            <h1>IRS Notices and Letters</h1>
            <h1>Identity Theft</h1>
            <h1>Tax scams</h1>
            <h1>Tax Fraud</h1>
            <h1>Criminal Investigation</h1>
            <h1>Whistleblower Office</h1>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="w-full md:w-1/5">
          <h2
            onClick={() => setOpenLanguages(!openLanguages)}
            className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
          >
            + LANGUAGES
          </h2>
          <div className={`space-y-2 font-normal ${openLanguages ? "block" : "hidden"} md:block`}>
            <h1>Español</h1>
            <h1>中文 (简体)</h1>
            <h1>中文 (繁體)</h1>
            <h1>한국어</h1>
            <h1>Pусский</h1>
            <h1>Tiếng Việt</h1>
            <h1>Kreyòl ayisyen</h1>
            <h1>English</h1>
            <h1>Other Languages</h1>
          </div>
        </div>

        {/* RELATED SITES */}
        <div className="w-full md:w-1/5">
          <h2
            onClick={() => setOpenRelated(!openRelated)}
            className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
          >
            + RELATED SITES
          </h2>
          <div className={`space-y-2 font-normal ${openRelated ? "block" : "hidden"} md:block`}>
            <h1>U.S. Treasury</h1>
            <h1>Treasury Inspector General for Tax Administration</h1>
            <h1>USA.gov</h1>
            <h1>U.S. Department of the Treasury</h1>
            <h1>Vote.gov</h1>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4 sm:justify-start justify-end lg:justify-end">
  <ImFacebook2 size={20} />
  <FaSquareXTwitter size={20} />
  <FaInstagram size={20} />
  <FaLinkedin size={20} />
  <IoLogoYoutube size={20} />
</div>

    </div>






      </main>

      <Footer />
    </div>
  );
};

export default Pay;
