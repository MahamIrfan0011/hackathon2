import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-[84px] bg-[#F0F2F3] py-4 px-4 md:px-12 lg:px-24 flex justify-between items-center">
        <Image src="/logo-sofa.png" alt="logo" width={166} height={40} />
        {/* Cart Button */}
        <Link href="/product1">
          <button className="w-[120px] h-[44px] bg-white rounded-md flex items-center justify-center relative ml-auto">
            <FaShoppingCart className="text-black mr-2" />
            <p className="text-black mr-4">Cart</p>
            {/* Badge Circle with Number */}
            <div className="absolute top-0 right-0 w-6 h-6 mr-2 rounded-full bg-[#007580] text-white text-xs flex items-center justify-center mt-2">
              2
            </div>
          </button>
        </Link>
      </div>

      {/* Navigation Bar */}
      <div className="w-full h-[74px] bg-white flex text-[#636270]">
        <ul className="w-full flex justify-start items-center space-x-4 md:space-x-8 px-4 md:px-16 lg:px-40">
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
        <div className='w-[168px] h-[15px] flex mt-8 mr-4 md:mr-16 lg:mr-32'>
          <p className='font-normal font-inter text-[14px] text-[#636270]'>
            Contact:
          </p>
          <Link href="/contact" className='font-medium text-[14px] font-inter text-[#272343] whitespace-nowrap'>
            (808) 555-0111
          </Link>
        </div>
      </div>

      <Image src="/FAQ.png" alt="faqs" width={1120} height={731} className='ml-4 md:ml-8 lg:ml-16 mt-16'/>

      <div className="flex flex-col h-screen -mt-32 ml-4 md:ml-8 lg:ml-16">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white w-full h-auto flex flex-col md:flex-row items-start justify-center mr-8 mt-[182px]">
            {/* Logo and Paragraph Section */}
            <div className="w-full md:w-[350px] mt-16">
              <Image src="/logo-sofa.png" alt="logo" width={128} height={20} />
              <p className="font-inter font-regular text-[16px] text-[#272343] mt-4 leading-[28px] text-justify">
                Vivamus tristique odio sit amet<br /> velit semper, eu posuere turpis<br />  
              </p>
              <Image src="/Social Links.png" alt="social accounts" width={206} height={38} className='mt-4'/>
            </div>

            {/* CATEGORY Section */}
            <div className="ml-0 md:ml-12 mt-4 md:mt-16">
              <h4 className="font-inter font-medium text-[16px] leading-[18px] tracking-[3px] text-[#9A9CAA] mb-4">
                CATEGORY
              </h4>
              <ul className="space-y-2 text-justify">
                {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(item => (
                  <li key={item} className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT Section */}
            <div className="ml-0 md:ml-14 mt-4 md:mt-16">
              <h4 className="font-inter font-medium text-[16px] leading-[18px] tracking-[3px] text-[#9A9CAA] mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-justify ml-6">
                {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map(item => (
                  <li key={item} className="font-inter font-normal text-[14px] leading-[22px] text-[#272343] hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER Section */}
            <div className="ml-0 md:ml-14 mt-4 md:mt-16">
              <h4 className="font-inter font-medium text-[14px] text-[#9A9CAA] text-justify">
                NEWSLETTER
              </h4>
              <div className="mt-6 flex flex-col md:flex-row">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2" 
                  placeholder="Your email"
                />
                <button className="w-full md:w-[127px] h-[46px] bg-[#029FAE] text-white text-[16px] font-inter font-semibold rounded-md">
                  Subscribe
                </button>
              </div>
              <p className="font-inter font-regular text-[15px] text-[#272343] text-justify mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit<br />. 
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full flex items-center justify-center bg-white px-4 mt-auto">
          <div className="flex w-full items-center justify-between">
            <p className="font-Poppins font-regular text-[14px] leading-[18.9px] text-[rgba(0,0,0,0.6)] whitespace-nowrap pl-4 md:pl-16">
              @2021-Blogy-Designed & Developed by <span className="font-bold">Zakirsoft</span>
            </p>
            <Image src="/Group 13 (1).png" alt="accounts" width={227} height={27} />
          </div>
        </footer>
      </div>
    </div>
  );
}
