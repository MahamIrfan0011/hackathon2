import Image from 'next/image';
import Link from 'next/link';
import Navbar from "./components/Navbar";
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-[84px] bg-[#F0F2F3] py-[20px] px-[300px] flex justify-between items-center ml-auto">
        <Image src="/logo-sofa.png" alt="logo" width={166} height={40} />

        {/* Cart Button */}
        <button className="w-[120px] h-[44px] bg-white rounded-md flex items-center justify-center relative ml-auto">
          <FaShoppingCart className="text-black mr-2" /> {/* Cart Icon */}
          <p className="text-black mr-4">Cart</p>
          
          {/* Badge Circle with Number */}
          <div className="absolute top-0 right-0 w-6 h-6 mr-2 rounded-full bg-[#007580] text-white text-xs flex items-center justify-center mt-2">
            2 {/* This is the number you can update */}
          </div>
        </button>
      </div>

      {/* Navigation Bar with clickable items */}
      <div className="w-full h-[74px] bg-white flex text-[#636270]">
        <ul className="w-full flex justify-start items-center space-x-8 pl-40">
          <li className="cursor-pointer text-[#007580]">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="#">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/product">Product</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="#">Pages</Link>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className='w-[168px] h-[15px] flex mt-8 mr-32'>
          <p className='font-normal font-inter text-[14px] text-[#636270]'>
            Contact:
          </p>
          <Link href ="/contact" className='font-medium text-[14px] font-inter text-[#272343] whitespace-nowrap'>
            (808) 555-0111
          </Link>
        </div>
      </div>

      {/* Main Content Section with Text and Image */}
      <div className='w-[980px] ml-40 h-[700px] px-300 py-204 bg-[#F0F2F3] flex rounded-lg'>
        {/* Left side: Text and heading */}
        <div className='w-[557px] h-[337px] px-70 py-229 flex flex-col justify-center'>
          <p className='font-inter font-regular text-[14px] text-[#272343] mt-80 ml-16'>
            WELCOME TO 
          </p>
          <h1 className='font-inter font-bold text-[60px] text-[#272343] ml-14'>
            Best Furniture Collection For Your Interior
          </h1>
          <button className='w-[171px] h-[52px] py-[24px] px-[14px] bg-[#029FAE] text-white rounded-md ml-16 mt-6 flex justify-center items-center'>
            Shop Now
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right side: Image */}
        <div className='w-[434px] h-[584px] ml-8 mt-28 pr-8'>
          <Image src="/Product Image.png" alt="chair" width={434} height={584} />
        </div>
      </div>

      {/* Company Logo Section */}
      <div className='w-[980px] h-[700px] bg-white ml-40'>
        <Image src="/Company Logo.png" alt="logo" width={1321} height={139}/>
        <div className='w-full h-[461px] bg-white'>
        <h1 className='w-[286px] h-[35px] font-inter text-[32px]  font-semibold text-[#272343]'>
          Featured Products
        </h1>
        <div className='mt-16 flex flex-row'>
        <Image src="/Products.png" alt="chair" width={230} height={230}/>
        <Image src="/Products (1).png" alt="chair2" width={230} height={230} className='ml-4'/>
        <Image src="/Products (2).png" alt="chair3" width={230} height={230} className='ml-4'/>
        <Image src="/Products (3).png" alt='chair4' width={230} height={230} className='ml-4'/>
      </div> 
      <div className='w-[237px] h-[35px]'>
        <h1 className='font-inter text-[32px]  font-semibold text-[#272343] mt-14 ml-4 whitespace-nowrap'>
          Top Categories
        </h1>
        <div className='flex flex-row'>
        <Image src="/Category.png" alt="chair5" width={424} height={424} className='mt-4 ml-12'/>
        <Image src="/Category (1).png" alt="chair6" width={424} height={424} className='mt-4 ml-14' />
        <Image src="/Category (2).png" alt="chair7" width={424} height={424} className='mt-4 ml-14' />
      </div>
      <div className='w-[900] h-[200px] bg-white'>
        <Image src="/hot-category.png" alt="category" width={900} height={200} className='mt-28'/>
        <div className='w-full h-[200px] text-center mt-28'>
        <h1 className='font-inter font-semibold text-[32px] text-[#272343]'>
          Our Products
        </h1>
        <div className='flex flex-wrap ml-10'>
        <Image src="/Products.png" alt="chair" width={200} height={200} className='mt-16'/>
        <Image src="/Products (1).png" alt="chair1" width={200} height={200} className='mt-16 ml-4'/>
        <Image src="/Products (2).png" alt="chair2" width={200} height={200} className='mt-16 ml-4'/>
        <Image src="/Products (3).png" alt="chair3" width={200} height={200} className='mt-16 ml-4'/>
        <Image src="/Products (4).png" alt="chair4" width={200} height={200} className='mt-16 block'/>
        <Image src="/Products (5).png" alt="chair5" width={200} height={200} className='mt-16 ml-4'/>
        <Image src="/Products (6).png" alt="chair6" width={200} height={200} className='mt-16 ml-4'/>
        <Image src="/Products.png" alt="chair" width={200} height={200} className='mt-16 ml-4'/>
      </div>

      
      </div>
      <div className="flex flex-col h-screen mt-72 ml-16">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white w-full h-auto flex flex-row items-start justify-center mr-8 mt-[182px]">
            {/* Logo and Paragraph Section */}
            <div className="w-[350px] mt-16">
              <Image src="/logo-sofa.png" alt="logo" width={128} height={20} />
              <p className="font-inter font-regular text-[16px] text-[#272343] mt-4 leading-[28px] text-justify">
                Vivamus tristique odio sit amet<br /> velit semper, eu posuere turpis<br />  
              </p>
              <Image src="/Social Links.png" alt="social accounts" width={206} height={38} className='mt-4'/>
            </div>

            {/* CATEGORY Section */}
            <div className="ml-12 mt-16">
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
                <li className="font-inter font-normal text-[14px] leading-[22px] text-[#007580] hover:text-black cursor-pointer underline underline-color-[#007580]">
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
            <div className="ml-14 mt-16">
              <h4 className="font-inter font-medium text-[16px] leading-[18px] tracking-[3px] text-[#9A9CAA] mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-justify ml-6">
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
            <div className="ml-14 mt-16">
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

        {/* Footer Section */}
        <footer className="w-full flex items-center justify-center bg-white px-4 mt-auto">
          <div className="flex w-full items-center justify-between">
            <p className="font-Poppins font-regular text-[14px] leading-[18.9px] text-[rgba(0,0,0,0.6)] whitespace-nowrap pl-16">
              @2021-Blogy-Designed & Developed by <span className="font-bold">Zakirsoft</span>
            </p>
            <Image src="/Group 13 (1).png" alt="accounts" width={227} height={27} />
          </div>
        </footer>
      </div>
      </div>
      
      </div>
      
      </div>
      </div>
      </div>
    
  );
}


