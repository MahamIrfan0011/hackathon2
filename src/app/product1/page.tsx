import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon

export default function Product() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-[84px] bg-[#F0F2F3] py-4 px-6 md:px-20 lg:px-40 flex justify-between items-center">
        <Image src="/logo-sofa.png" alt="logo" width={166} height={40} />

        {/* Cart Button */}
        <Link href="/product1">
          <button className="w-28 h-10 bg-white rounded-md flex items-center justify-center relative">
            <FaShoppingCart className="text-black mr-2" /> {/* Cart Icon */}
            <p className="text-black">Cart</p>
            
            {/* Badge Circle with Number */}
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#007580] text-white text-xs flex items-center justify-center">
              2 {/* This is the number you can update */}
            </div>
          </button>
        </Link>
      </div>
      
      {/* Navigation Bar with clickable items */}
      <div className="w-full h-[74px] bg-white flex text-[#636270]">
        <ul className="w-full flex justify-center md:justify-start items-center ml-10 space-x-4 md:space-x-8 px-4 md:px-40">
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
        <div className='hidden md:flex w-[168px] h-[15px] flex mt-8 mr-32'>
          <p className='font-normal font-inter text-[14px] text-[#636270]'>
            Contact:
          </p>
          <Link href="/contact" className='font-medium text-[14px] font-inter text-[#272343] whitespace-nowrap'>
            (808) 555-0111
          </Link>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative w-full h-[auto]">
        <Image src="/Frame (2).png" alt="picture" layout="responsive" width={1900} height={722} />
      </div>
    </div>
  );
}
