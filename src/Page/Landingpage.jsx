// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "../component/Header.jsx";

// import two from "../assets/two.avif";
// import Footer from "../component/Footer.jsx";
// import { FaRegCalendarDays } from "react-icons/fa6";
// import { LuClock9 } from "react-icons/lu";
// import { FaFileAlt } from "react-icons/fa";
// import { SiTicktick } from "react-icons/si";
// import { MdContactMail } from "react-icons/md";
// import { IoFolderSharp } from "react-icons/io5";
// import { FaLaptop } from "react-icons/fa";
// import { IoInformationCircle } from "react-icons/io5";
// import download from "../assets/download.png";
// import { useState } from "react";
// import laptop from "../assets/laptop.png";
// import tool from "../assets/tools.jpg";
// import lap from "../assets/lap.jpg";
// import refund from "../assets/refund.png";
// import desktop from "../assets/desktop.png";
// import mobile from "../assets/mobile.png";
// import lap2 from "../assets/lap2.png";
// import lap3 from "../assets/lap3.png";
// import tool3 from "../assets/tool3.png";
// import locate from "../assets/locate.png";
// import tax from "../assets/tax.jpg";
// import woman from "../assets/woman.jpg";
// import baker from "../assets/baker.jpg";
// import filler from "../assets/filler.png";
// import credit from "../assets/credit.jpg";
// import scam from "../assets/scam.jpg";
// import photo from "../assets/photo.png";
// import { ImFacebook2 } from "react-icons/im";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io";

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Landingpage = () => {
//     const [openAgency, setOpenAgency] = useState(false);
//   const [openRights, setOpenRights] = useState(false);
//   const [openIssue, setOpenIssue] = useState(false);
//   const [openLanguages, setOpenLanguages] = useState(false);
//   const [openRelated, setOpenRelated] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentGoodsIndex, setCurrentGoodsIndex] = useState(0);

//   const nextItem = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % goods.length);
//   };

//   const prevItem = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + goods.length) % goods.length
//     );
//   };

//   const items = [
//     {
//       title: "IRS Free File",
//       description:
//         "Prepare and file your federal income taxes online for free.",
//       cta: "Try IRS File",
//       image: laptop,
//     },
//     {
//       title: "Tax Withholding Estimator",
//       description:
//         "Check your tax withholding and prevent unexpected tax bills.",
//       cta: "Estimate Now",
//       image: tool,
//     },
//     {
//       title: "Get Transcript",
//       description: "View, print, or download your tax records online.",
//       cta: "Get Transcript",
//       image: desktop,
//     },
//     {
//       title: "Direct Pay",
//       description: "Pay your tax bill directly from your bank account.",
//       cta: "Make Payment",
//       image: lap,
//     },
//     {
//       title: "Where's My Refund?",
//       description: "Check the status of your federal tax refund.",
//       cta: "Check Status",
//       image: refund,
//     },
//     {
//       title: "IRS Free File",
//       description:
//         "Prepare and file your federal  income taxes online for free.",
//       cta: "Try IRS File",
//       image: mobile,
//     },
//     {
//       title: "Tax Withholding Estimator",
//       description:
//         "Check your tax withholding and prevent unexpected tax bills.",
//       cta: "Estimate Now",
//       image: lap2,
//     },
//     {
//       title: "Get Transcript",
//       description: "View, print, or download your tax records online.",
//       cta: "Get Transcript",
//       image: lap3,
//     },
//     {
//       title: "Direct Pay",
//       description: "Pay your tax bill directly from your bank account.",
//       cta: "Make Payment",
//       image: tool3,
//     },
//     {
//       title: "Where's My Refund?",
//       description: "Check the status of your federal tax refund.",
//       cta: "Check Status",
//       image: locate,
//     },
//   ];
//   const goods = [
//     {
//       title: "Clean energy credits and deductions",
//       description:
//         "Updates on credits and deductions under the inflation Reduction Act.",
//       cta: "Find out more",
//       image: tax,
//     },
//     {
//       title: "File for free",
//       description: "IRS offers options to file your taxes for free.",
//       cta: "Learn how to file for free",
//       image: woman,
//     },
//     {
//       title: "Disaster relief",
//       description:
//         "Information on recent tax releif for taxpayers affected by disasters",
//       cta: "Find tax relief information",
//       image: tax,
//     },
//     {
//       title: "Small Business Week",
//       description: "Information and resources for small businesses.",
//       cta: "Get more information",
//       image: baker,
//     },
//     {
//       title: "Tax updates and news",
//       description: "Special updates and news for 2025",
//       cta: "Read the latest developments",
//       image: filler,
//     },
//     {
//       title: "Employee Retention Credit",
//       description:
//         "You can withdraw incorrect ERC claims if you haven't received the money.",
//       cta: "Learn how",
//       image: credit,
//     },
//     {
//       title: "Scams and schemes alerts",
//       description: "Find the latest information on trending scams and schemes.",
//       cta: "Get the latest updates",
//       image: scam,
//     },
//     {
//       title: "Mobile-friendly forms available",
//       description:
//         "New IRS make completing,filing and processing forms easier and more accurate.",
//       cta: "Access mobile-friendly forms",
//       image: photo,
//     },
//   ];

//   const itemsPerPage = 2;
//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   const totalGoodsPages = Math.ceil(goods.length / itemsPerPage);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalPages);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   const nextGoodsSlide = () => {
//     setCurrentGoodsIndex((prev) => (prev + 1) % totalGoodsPages);
//   };

//   const prevGoodsSlide = () => {
//     setCurrentGoodsIndex(
//       (prev) => (prev - 1 + totalGoodsPages) % totalGoodsPages
//     );
//   };

//   const visibleItems = items.slice(
//     currentIndex * itemsPerPage,
//     (currentIndex + 1) * itemsPerPage
//   );

//   const visibleGoods = goods.slice(
//     currentGoodsIndex * itemsPerPage,
//     (currentGoodsIndex + 1) * itemsPerPage
//   );

//   return (
//     <div>
//       <Header />
    

//       <div className="relative">
//         <img
//           src={two}
//           alt="IRS"
//           className="w-full h-auto md:h-[50vh] object-cover"
//         />

// <h1 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black opacity-60 font-semibold p-4 md:block hidden">
//   Helping people understand and <br /> meet their tax responsibilities
//   <span className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#c7a97b] "></span>
//   <span className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#c7a97b]"></span>
// </h1>

//       </div>
//       <div className="container mx-auto px-4 mt-4">
//         <h1 className="font-bold text-[20px]">How can we help you?</h1>
//         <span className="block border-b-2 border-[#c7a97b] w-16 mb-4"></span>

//         <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4">
//           {[
//             {
//               icon: (
//                 <FaRegCalendarDays className="mt-1 text-[#176ba2]" size={40} />
//               ),
//               text: "Get your refund status",
//             },
//             {
//               icon: <LuClock9 className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Get an extension",
//             },
//             {
//               icon: <FaFileAlt className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Explore free filing options",
//             },
//             {
//               icon: <SiTicktick className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Where's my amended return",
//             },
//             {
//               icon: <MdContactMail className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Get an identity protection PIN",
//             },
//             {
//               icon: <IoFolderSharp className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Get your tax record",
//             },
//             {
//               icon: <FaLaptop className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Make a payment",
//             },
//             {
//               icon: <FaLaptop className="mt-1 text-[#176ba2]" size={40} />,
//               text: "Apply for an Employer ID Number (EIN)",
//             },
//             {
//               icon: (
//                 <IoInformationCircle
//                   className="mt-1 text-[#176ba2]"
//                   size={40}
//                 />
//               ),
//               text: "Find forms & instructions",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex gap-3 text-[#176ba2] items-center font-semibold text-[15px] w-full md:w-[30%]"
//             >
//               {item.icon}
//               <span>{item.text}</span>
//             </div>
//           ))}
//         </div>
//         <h1 className="mt-16 font-bold text-center text-xl w-full">
//           Tools & Applications
//         </h1>
//         <div className="relative w-full max-w-4xl mx-auto mt-8">
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full z-10 hover:bg-blue-900 transition w-12 h-12"
//           >
//             <FaChevronLeft className="text-white ml-1" />
//           </button>

//           <div className="overflow-hidden">
//             <div className="flex transition-transform duration-500 ease-in-out gap-4">
//               {visibleItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-1/2 px-6 py-4 border border-gray-300 rounded-md h-[270px] bg-white flex-shrink-0 shadow-sm"
//                 >
//                   <div className="flex justify-between items-start h-full gap-4">
//                     {/* Text Section */}
//                     <div className="flex flex-col justify-between max-w-[60%] overflow-hidden">
//                       <div>
//                         <h2 className="text-lg font-semibold text-gray-800">
//                           {item.title}
//                         </h2>
//                         <p className="text-sm text-gray-600 mt-2">
//                           {item.description}
//                         </p>
//                       </div>
//                       <button className="mt-4 text-blue-600 hover:underline text-sm font-medium">
//                         {item.cta}
//                       </button>
//                     </div>

//                     {/* Image Section */}
//                     <div className="w-[40%] h-full flex justify-end items-center">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="object-contain max-h-[150px] rounded"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full z-10 hover:bg-blue-900  transition w-12 h-12"
//           >
//             <FaChevronRight className="text-white ml-1" />
//           </button>

//           {/* Dots */}
//           <div className="flex justify-center mt-4 gap-2">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <span
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${
//                   currentIndex === index ? "bg-blue-900" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>
//         <h1 className="mt-16 font-bold text-center text-xl w-full">
//           News & announcements
//         </h1>

//         <div className="relative w-full max-w-4xl mx-auto mt-8">
//           {/* Left Arrow */}
//           <button
//             onClick={prevGoodsSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full z-10 hover:bg-blue-900 transition w-12 h-12"
//           >
//             <FaChevronLeft className="text-white ml-1" />
//           </button>

//           <div className="overflow-hidden">
//             <div className="flex transition-transform duration-500 ease-in-out gap-4">
//               {visibleGoods.map((good, index) => (
//                 <div
//                   key={index}
//                   className="w-1/2 px-6 py-4 border border-gray-300 rounded-md h-[370px] bg-white flex-shrink-0 shadow-sm"
//                 >
//                   <div className="flex flex-col justify-between items-start h-full gap-4">
//                     {/* Image Section at the Top */}
//                     <div className="w-full h-[150px] flex justify-center items-center">
//                       <img
//                         src={good.image}
//                         alt={good.title}
//                         className="object-contain max-h-[150px] rounded"
//                       />
//                     </div>

//                     {/* Text Section Below the Image */}
//                     <div className="flex flex-col justify-between overflow-hidden w-full">
//                       <div>
//                         <h2 className="text-lg font-semibold text-gray-800">
//                           {good.title}
//                         </h2>
//                         <p className="text-sm text-gray-600 mt-2">
//                           {good.description}
//                         </p>
//                       </div>
//                       <button className="mt-4 text-blue-600 hover:underline text-sm font-medium">
//                         {good.cta}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextGoodsSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full z-10 hover:bg-blue-900 transition w-12 h-12"
//           >
//             <FaChevronRight className="text-white ml-1" />
//           </button>

//           {/* Dots */}
//           <div className="flex justify-center mt-4 gap-2">
//             {Array.from({ length: totalGoodsPages }).map((_, index) => (
//               <span
//                 key={index}
//                 onClick={() => setCurrentGoodsIndex(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${
//                   currentGoodsIndex === index ? "bg-blue-900" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <div className="px-4 bg-[#f3f3f3] w-full">
//       <h1 className="border-4 border-black w-full mt-8"></h1>

//       <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 text-sm font-medium py-4 mt-5">
//         {/* OUR AGENCY */}
//         <div className="w-full md:w-1/5">
//           <h2
//             onClick={() => setOpenAgency(!openAgency)}
//             className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
//           >
//             + OUR AGENCY
//           </h2>
//           <div className={`space-y-2 font-normal ${openAgency ? "block" : "hidden"} md:block`}>
//             <h1>About IRS</h1>
//             <h1>Careers</h1>
//             <h1>Operations and Budget</h1>
//             <h1>Tax Statistics</h1>
//             <h1>Help</h1>
//             <h1>Find a Local Office</h1>
//           </div>
//         </div>

//         {/* KNOW YOUR RIGHTS */}
//         <div className="w-full md:w-1/5">
//           <h2
//             onClick={() => setOpenRights(!openRights)}
//             className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
//           >
//             + KNOW YOUR RIGHTS
//           </h2>
//           <div className={`space-y-2 font-normal ${openRights ? "block" : "hidden"} md:block`}>
//             <h1>Taxpayer Bill of Rights</h1>
//             <h1>Taxpayer Advocate Service</h1>
//             <h1>Independent Office of Appeals</h1>
//             <h1>Civil Rights</h1>
//             <h1>FOIA</h1>
//             <h1>No FEAR Act Data</h1>
//             <h1>Reliance on Guidance</h1>
//           </div>
//         </div>

//         {/* RESOLVE AN ISSUE */}
//         <div className="w-full md:w-1/5">
//           <h2
//             onClick={() => setOpenIssue(!openIssue)}
//             className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
//           >
//             + RESOLVE AN ISSUE
//           </h2>
//           <div className={`space-y-2 font-normal ${openIssue ? "block" : "hidden"} md:block`}>
//             <h1>IRS Notices and Letters</h1>
//             <h1>Identity Theft</h1>
//             <h1>Tax scams</h1>
//             <h1>Tax Fraud</h1>
//             <h1>Criminal Investigation</h1>
//             <h1>Whistleblower Office</h1>
//           </div>
//         </div>

//         {/* LANGUAGES */}
//         <div className="w-full md:w-1/5">
//           <h2
//             onClick={() => setOpenLanguages(!openLanguages)}
//             className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
//           >
//             + LANGUAGES
//           </h2>
//           <div className={`space-y-2 font-normal ${openLanguages ? "block" : "hidden"} md:block`}>
//             <h1>Español</h1>
//             <h1>中文 (简体)</h1>
//             <h1>中文 (繁體)</h1>
//             <h1>한국어</h1>
//             <h1>Pусский</h1>
//             <h1>Tiếng Việt</h1>
//             <h1>Kreyòl ayisyen</h1>
//             <h1>English</h1>
//             <h1>Other Languages</h1>
//           </div>
//         </div>

//         {/* RELATED SITES */}
//         <div className="w-full md:w-1/5">
//           <h2
//             onClick={() => setOpenRelated(!openRelated)}
//             className="cursor-pointer flex items-center gap-2 font-bold md:cursor-default"
//           >
//             + RELATED SITES
//           </h2>
//           <div className={`space-y-2 font-normal ${openRelated ? "block" : "hidden"} md:block`}>
//             <h1>U.S. Treasury</h1>
//             <h1>Treasury Inspector General for Tax Administration</h1>
//             <h1>USA.gov</h1>
//             <h1>U.S. Department of the Treasury</h1>
//             <h1>Vote.gov</h1>
//           </div>
//         </div>
//       </div>

//       {/* Social Icons */}
//          <div className="flex gap-3 mt-4 sm:justify-start justify-end lg:justify-end">
//      <ImFacebook2 size={20} />
//      <FaSquareXTwitter size={20} />
//      <FaInstagram size={20} />
//      <FaLinkedin size={20} />
//      <IoLogoYoutube size={20} />
//    </div>
//     </div>


//       <Footer />
//     </div>
//   );
// };

// export default Landingpage;
