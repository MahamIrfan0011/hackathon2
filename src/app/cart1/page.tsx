import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-[84px] bg-[#F0F2F3] py-4 px-6 md:px-20 flex justify-between items-center">
        <Image src="/logo-sofa.png" alt="logo" width={166} height={40} />

        {/* Cart Button */}
        <Link href="/product1">
          <button className="w-[120px] h-[44px] bg-white rounded-md flex items-center justify-center relative ml-auto">
            <FaShoppingCart className="text-black mr-2" />
            <p className="text-black mr-4">Cart</p>
            <div className="absolute top-0 right-0 w-6 h-6 mr-2 rounded-full bg-[#007580] text-white text-xs flex items-center justify-center mt-2">
              2
            </div>
          </button>
        </Link>
      </div>

      {/* Navigation Bar with clickable items */}
      <div className="w-full h-[74px] bg-white flex text-[#636270] flex-wrap">
        <ul className="w-full flex justify-start items-center space-x-8 pl-8 md:pl-20">
          <li className="cursor-pointer text-[#007580]">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/product">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/product">Product</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/">Pages</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className='w-full flex justify-end items-center mt-2 mr-4 md:mr-20'>
          <p className='font-normal font-inter text-[14px] text-[#636270] mr-2'>Contact:</p>
          <Link href="/contact" className='font-medium text-[14px] font-inter text-[#272343]'>
            (808) 555-0111
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-4 md:p-8">
        <div className="flex-grow flex flex-col md:flex-row md:items-start">
          <Image src="/Products.png" alt="chair" width={375} height={107} className="mx-auto md:ml-0 md:mr-4" />
          <div className="md:ml-4">
            <h1 className="font-inter font-bold text-[40px] md:text-[60px] text-[#272343]">
              Library Stool<br /> Chair
            </h1>
            <div className="w-[200px] h-[42px] rounded-full bg-[#029FAE] mt-4 flex items-center justify-center">
              <p className="font-inter font-semibold text-white">
                $20.00 USD
              </p>
            </div>
            <div className='mt-4'>
              <p className='font-inter font-regular text-[16px] text-[#272343]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente temporibus voluptatibus nemo laboriosam, quis aspernatur suscipit cumque consectetur.
              </p>
              <Link href="/product1">
                <Image
                  src="/Button.png"
                  alt="button"
                  width={150}
                  height={50}
                  className="mt-8"
                />
              </Link>
              <div className="w-full mt-12">
                <h4 className="font-inter font-bold text-[28px] text-black text-left">
                  FEATURED PRODUCTS
                </h4>
                <Image
                  src="/instagram (1).png"
                  alt="pictures"
                  width={1447}
                  height={409}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow mt-12 md:mt-16">
          <div className="bg-white w-full flex flex-wrap items-start justify-between p-4 md:p-8">
            {/* Logo and Paragraph Section */}
            <div className="w-full md:w-[350px] mt-4">
              <Image src="/logo-sofa.png" alt="logo" width={128} height={20} />
              <p className="font-inter font-regular text-[16px] text-[#272343] mt-4 leading-[28px] text-justify">
                Vivamus tristique odio sit amet<br /> velit semper, eu posuere turpis<br />  
              </p>
              <Image src="/Social Links.png" alt="social accounts" width={206} height={38} className='mt-4'/>
            </div>

            {/* CATEGORY Section */}
            <div className="w-full md:w-[200px] mt-4 md:mt-0">
              <h4 className="font-inter font-medium text-[16px] leading-[18px] tracking-[3px] text-[#9A9CAA] mb-4">
                CATEGORY
              </h4>
              <ul className="space-y-2 text-justify">
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Sofa
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Armchair
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Wing Chair
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#007580] hover:text-black cursor-pointer underline">
                  Desk Chair
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Wooden Chair
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Park Bench
                </li>
              </ul>
            </div>

            {/* SUPPORT Section */}
            <div className="w-full md:w-[200px] mt-4 md:mt-0">
              <h4 className="font-inter font-medium text-[16px] leading-[18px] tracking-[3px] text-[#9A9CAA] mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-justify">
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Help & Support
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer whitespace-nowrap">
                  Terms & Conditions
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Privacy Policy
                </li>
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                  Help
                </li>
              </ul>
            </div>

            {/* NEWSLETTER Section */}
            <div className="w-full md:w-[200px] mt-4 md:mt-0">
              <h4 className="font-inter font-medium text-[14px] text-[#9A9CAA] text-justify">
                NEWSLETTER
              </h4>
              <div className="mt-6 flex">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your email"
                />
                <button className="w-[127px] h-[46px] bg-[#029FAE] text-white text-[16px] font-inter font-semibold rounded-md ml-2">
                  Subscribe
                </button>
              </div>
              <p className="font-inter font-regular text-[15px] text-[#272343] text-justify mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit<br />. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Fixed at the bottom */}
      <footer className="w-full flex items-center justify-center bg-white px-4 mt-auto fixed bottom-0">
        <div className="flex w-full items-center justify-between">
          <p className="font-Poppins font-regular text-[14px] leading-[18.9px] text-[rgba(0,0,0,0.6)] whitespace-nowrap pl-4 md:pl-16">
            @2021-Blogy-Designed & Developed by <span className="font-bold">Zakirsoft</span>
          </p>
          <Image src="/Group 13 (1).png" alt="accounts" width={227} height={27} />
        </div>
      </footer>
    </div>
  );
}
