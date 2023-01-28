import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(1);
  // for date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // date range code till here

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10 ">
      {/* left */}
      <div>
        <Image src={"/airbnb-logo-icon-png.png"} width={50} height={50} />
      </div>

      {/* Middle-Search*/}
      <div className="flex item-center md:border-2 rounded-full py-2 shadow-sm">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search here"
        />{" "}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={"FD5861"}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiOutlineUserCircle className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
