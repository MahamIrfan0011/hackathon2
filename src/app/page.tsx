import Image from 'next/image';
import Link from 'next/link';
import Navbar from "./components/Navbar";
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Top Section with Logo and Cart Button */}
      <div className="w-full h-20 bg-[#F0F2F3] py-4 px-4 md:px-6 flex justify-between items-center md:px-20 lg:px-40">
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
      <div className="w-full h-18 bg-white flex text-[#636270] mt-4">
        <ul className="w-full flex flex-wrap justify-center space-x-4 md:space-x-8">
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
        <div className='ml-auto flex items-center'>
          <p className='font-normal text-sm text-[#636270] mr-2'>Contact:</p>
          <Link href="/contact" className='font-medium text-sm text-[#272343] lg:whitespace-nowrap mr-4'>
            (808) 555-0111
          </Link>
        </div>
      </div>

      {/* Main Content Section with Text and Image */}
      <div className='w-full max-w-6xl mx-auto px-4 py-8 bg-[#F0F2F3] flex flex-col md:flex-row rounded-lg mt-14'>
        {/* Left side: Text and heading */}
        <div className='flex-1 flex flex-col justify-center px-4'>
          <p className='font-inter text-sm text-[#272343]'>
            WELCOME TO 
          </p>
          <h1 className='font-inter font-bold text-2xl md:text-4xl text-[#272343]'>
            Best Furniture Collection For Your Interior
          </h1>
          <button className='w-40 h-12 bg-[#029FAE] text-white rounded-md mt-6 flex justify-center items-center'>
            Shop Now
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right side: Image */}
        <div className='flex-1 flex justify-center mt-8 md:mt-0'>
          <Image src="/Product Image.png" alt="chair" width={434} height={584} className="max-w-full h-auto" />
        </div>
      </div>

      {/* Company Logo Section */}
      <div className='w-full max-w-6xl mx-auto bg-white py-8'>
        <Image src="/Company Logo.png" alt="logo" width={1321} height={139} className="mx-auto" />
        <div className='w-full py-8'>
          <h1 className='font-inter text-2xl font-semibold text-[#272343]'>
            Featured Products
          </h1>
          <div className='mt-8 flex flex-wrap justify-center'>
            <Image src="/Products.png" alt="chair" width={230} height={230} className='m-2'/>
            <Image src="/Products (1).png" alt="chair2" width={230} height={230} className='m-2'/>
            <Image src="/Products (2).png" alt="chair3" width={230} height={230} className='m-2'/>
            <Image src="/Products (3).png" alt='chair4' width={230} height={230} className='m-2'/>
          </div> 
          <div className='mt-10'>
            <h1 className='font-inter text-2xl font-semibold text-[#272343]'>
              Top Categories
            </h1>
            <div className='flex flex-wrap justify-center mt-4'>
              <Image src="/Category.png" alt="category" width={424} height={424} className='m-2'/>
              <Image src="/Category (1).png" alt="category" width={424} height={424} className='m-2'/>
              <Image src="/Category (2).png" alt="category" width={424} height={424} className='m-2'/>
            </div>
          </div>
          
          {/* Our Products Section */}
          <div className='mt-10'>
            <h1 className='font-inter text-2xl font-semibold text-[#272343]'>
              Our Products
            </h1>
            <div className='flex flex-wrap justify-center mt-4 ml-6'>
              <Image src="/Products.png" alt="chair" width={200} height={200} className='m-4'/>
              <Image src="/Products (1).png" alt="chair1" width={200} height={200} className='m-4'/>
              <Image src="/Products (2).png" alt="chair2" width={200} height={200} className='m-4'/>
              <Image src="/Products (3).png" alt="chair3" width={200} height={200} className='m-4'/>
              <Image src="/Products (4).png" alt="chair4" width={200} height={200} className='m-4'/>
              <Image src="/Products (5).png" alt="chair5" width={200} height={200} className='m-4'/>
              <Image src="/Products (6).png" alt="chair6" width={200} height={200} className='m-4'/>
              <Image src="/Products.png" alt="chair" width={200} height={200} className='m-4'/>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col h-full mt-auto">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white w-full flex flex-col md:flex-row items-start justify-around p-4">
            {/* Logo and Paragraph Section */}
            <div className="flex flex-col items-center mb-4">
              <Image src="/logo-sofa.png" alt="logo" width={128} height={20} />
              <p className="font-inter text-center text-sm text-[#272343] mt-4 leading-6">
                Vivamus tristique odio sit amet<br /> velit semper, eu posuere turpis<br />  
              </p>
              <Image src="/Social Links.png" alt="social accounts" width={206} height={38} className='mt-4'/>
            </div>

            {/* CATEGORY Section */}
            <div className="mt-4">
              <h4 className="font-inter font-medium text-sm leading-6 tracking-[3px] text-[#9A9CAA] mb-4">
                CATEGORY
              </h4>
              <ul className="space-y-2 text-justify">
                {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map(category => (
                  <li key={category} className="font-inter font-normal text-sm leading-6 text-[#272343] hover:text-black cursor-pointer">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT Section */}
            <div className="mt-4">
              <h4 className="font-inter font-medium text-sm leading-6 tracking-[3px] text-[#9A9CAA] mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-justify">
                {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map(support => (
                  <li key={support} className="font-inter font-normal text-sm leading-6 text-[#272343] hover:text-black cursor-pointer">
                    {support}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER Section */}
            <div className="mt-4">
              <h4 className="font-inter font-medium text-sm text-[#9A9CAA]">
                NEWSLETTER
              </h4>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your email"
                />
                <button className="w-32 h-10 bg-[#029FAE] text-white text-sm font-inter font-semibold rounded-md ml-2">
                  Subscribe
                </button>
              </div>
              <p className="font-inter text-sm text-[#272343] text-justify mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit<br />. 
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full flex items-center justify-center bg-white px-4 mt-auto">
          <div className="flex w-full items-center justify-between">
            <p className="font-Poppins text-sm text-[rgba(0,0,0,0.6)] whitespace-nowrap pl-6 lg:pl-16">
              @2021-Blogy-Designed & Developed by <span className="font-bold">Zakirsoft</span>
            </p>
            <Image src="/Group 13 (1).png" alt="accounts" width={227} height={27} />
          </div>
        </footer>
      </div>
    </div>
  );
}



