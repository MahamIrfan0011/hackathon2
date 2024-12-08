import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon

export default function Product() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-[84px] bg-[#F0F2F3] py-[20px] px-[300px] flex justify-between items-center">
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
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <a href="#">Shop</a>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <a href="/product">Product</a>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <a href="#">Pages</a>
          </li>
          <li className="cursor-pointer hover:text-[#007580]">
            <a href="#">About</a>
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
      <Image src="/Frame (2).png" alt="picture" width={1900} height={722}/>
      </div>
      )}