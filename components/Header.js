import Image from "next/image";
import React from "react";
import { AiOutlineSearch , AiOutlineMenu } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10 ">
      {/* left */}
      <div>
        <Image src={"/airbnb-logo-icon-png.png"} width={50} height={50} />
      </div>

      {/* Middle-Search*/}
      <div className="flex item-center md:border-2 rounded-full py-2 shadow-sm">
        <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Search here" />{" "}
        <AiOutlineSearch className=" hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <BsGlobe className="h-6" />
        
        <div className="flex items-center space-x-2 border-2 p-2 py-1 rounded-full">
          <AiOutlineMenu className="h-6" />
          <HiOutlineUserCircle className="h-6" />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
