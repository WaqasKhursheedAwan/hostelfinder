import React from "react";
import Hostel from "../images/hostel-pic.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";

const Hostels = () => {
  return (
    <div className="h-[30rem]">
      <div className="bg-gray-600 min-h-full pt-4 ">
        <h1 className="text-2xl font-bold text-gray-300 pb-2 text-center">
          Explore Hostels
        </h1>

        <div className="min-h-full w-9/12 flex flex-col gap-6 bg-gray-900 rounded-lg mx-auto pb-2">
          <img src={Hostel} alt="" className="h-[12rem]" />
          <div className="my-auto flex flex-col gap-4">
            <h1 className="text-white text-2xl font-semibold text-center">
              Hostel Name
            </h1>

            <CiLocationOn className="text-white text-2xl">
              {"Hyderabad"}
            </CiLocationOn>
            <IoPricetagOutline className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostels;
