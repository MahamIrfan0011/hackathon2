"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#272343] w-full h-[60px] flex items-center justify-start">
      <div className="w-[1920px] h-[45px] py-[14px] px-[300px]">
        <div className="flex items-center space-x-2">
          {/* White Tick Mark as SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          {/* Text Section */}
          <p className="font-inter font-normal text-[13px] text-white">
            Free Shipping On All Orders Over $50
          </p>

          {/* Navigation Buttons */}
          <div className="w-[202px] h-[17px] px-24 flex items-center space-x-6 relative pl-48">
            {/* Eng Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white font-normal font-inter text-[13px] opacity-70 flex items-center"
              >
                Eng
                {/* Dropdown Arrow - Stroke Only */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-6 left-0 bg-white text-[#272343] shadow-lg rounded-md">
                  <ul className="text-sm font-inter">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      English
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Spanish
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      French
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Japanese
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Arabic
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQs */}
            <Link href="/faqs">
  <button className="text-white font-normal font-inter text-[13px] opacity-70">
    Faqs
  </button>
</Link>
            {/* Need Help with White Stroked Circle */}
            <div className="flex items-center space-x-2">
              {/* Circle with Stroke */}
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-white bg-[#272343] text-white font-bold text-xs opacity-70">
                !
              </div>
              <button className="text-white font-normal font-inter text-[13px] opacity-70 whitespace-nowrap">
                Need Help
              </button>
            </div>
          </div>
        </div>
       </div>
    </nav>
  );
}


  