import React from "react";
import Header from "./Header.jsx";
import { IoSearch } from "react-icons/io5";

const Signin = () => {
    return(
        <div>
            <Header/>
              <div className="bg-[#002d62] flex flex-col md:flex-row md:justify-around items-center px-4 py-4 text-white gap-4">
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                      {[
                        "File",
                        "Pay",
                        "Refunds",
                        "Credits & Deductions",
                        "Forms & Instructions",
                      ].map((item) => (
                        <h1 key={item} className="cursor-pointer hover:underline">
                          {item}
                        </h1>
                      ))}
                    </div>
                    <div className="relative w-full md:w-64">
                      <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="w-full px-3 pr-10 py-1 rounded-md border border-gray-300 text-black text-sm focus:outline-none"
                      />
                      <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
        </div>
    )
}
export default Signin;