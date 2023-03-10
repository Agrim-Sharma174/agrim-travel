import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 transition duration-200 ease-out first:border-t">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <AiOutlineHeart className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl font-semibold"></h4>
        <div className="border-b w-10 p-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
          <AiFillStar className="h-5 text-red-400" />{star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
