import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 h-[30rem]">
      <div className="dark:bg-red-900 h-full">
        <div className="flex items-center justify-center flex-col gap-16 lg:gap-28 pt-16">
          <h1 className="text-gray-300 font-bold text-3xl w-4/5 lg:w-2/4 text-center">
            Discover Comfort, Find Adventure: Your Hostel, Your Home.
          </h1>
          <div className="w-4/5 md:w-3/5 lg:w-2/4 gap-2 flex flex-col items-center sm:flex-row">
            <input
              type="search"
              className="w-full rounded-lg bg-gray-600 text-gray-200 outline-none p-2"
              placeholder="Search Hostel"
            />
            <button className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 outline-none">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
