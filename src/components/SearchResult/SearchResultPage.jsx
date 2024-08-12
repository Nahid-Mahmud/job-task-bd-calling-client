import React, { useState } from "react";
import { FaLocationDot, FaSquarePollHorizontal, FaVectorSquare } from "react-icons/fa6";

const SearchResultPage = () => {
  // state for selected property
  const [selectedProperty, setSelectedProperty] = useState("searchResult");
  return (
    <div className="container mx-auto my-20 ">
      {/* Buttons properties , new projects prelaunch offers */}

      <div className="max-w-4xl">
        <div className="flex gap-8 items-start  ">
          <button
            onClick={() => setSelectedProperty("searchResult")}
            className={` ${
              selectedProperty === "searchResult" ? "bg-blue-600 text-white" : "bg-blue-100"
            } px-3 py-2 text-lg font-medium leading-6 rounded-md`}
          >
            properties (400){" "}
          </button>
          <button
            onClick={() => setSelectedProperty("new")}
            className={` ${
              selectedProperty === "new" ? "bg-blue-600 text-white" : "bg-blue-100"
            } px-3 py-2 text-lg font-medium leading-6 bg-blue-100 rounded-md`}
          >
            New Projects (400){" "}
          </button>
          <button
            onClick={() => setSelectedProperty("pre-launch")}
            className={` ${
              selectedProperty === "pre-launch" ? "bg-blue-600 text-white" : "bg-blue-100"
            } px-3 py-2 text-lg font-medium leading-6 bg-blue-100 rounded-md`}
          >
            Pre-launch offers
          </button>
        </div>
        <hr className="my-16" />

        {/* Search result card */}

        <div className="p-10 border gap-5 flex bg-[#F9FAFB] rounded-md  ">
          <img
            className="h-44 w-36"
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="w-full">
            <div className="flex gap-4 items-center flex-col justify-between">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-black text-lg leading-6">Name of the property</h1>
                <p className="flex items-center gap-2">
                  {" "}
                  <p className="text-2xl leading-7 font-bold">$3652</p>
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-3">
                  <FaLocationDot className="text-2xl text-orange-500" />
                  <p className="text-base font-normal text-[#606060]">Location of the property</p>
                </div>
                <button className="border px-3 py-2 text-[#363636]">Bid Property</button>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <p className="font-medium text-base leading-5">Property Details</p>
              <div className="bg-gray-300 h-[2px] w-full flex-1"></div>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* icon */}
                <div>
                  <FaVectorSquare className="h-[40px] w-[40px] text-orange-500" />
                </div>
                <div className="flex flex-col items-start gap-1 justify-center">
                  <p className="font-medium text-base text-[#303030]">Total area</p>
                  <p className="text-[#535353] leading-4">900sq</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* icon */}
                <div>
                  <FaSquarePollHorizontal className="h-[40px] w-[40px] text-orange-500" />
                </div>
                <div className="flex flex-col items-start gap-1 justify-center">
                  <p className="font-medium text-base text-[#303030]">Status</p>
                  <p className="text-[#535353] leading-4">Ready to move</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* icon */}
                <div>
                  <FaVectorSquare className="h-[40px] w-[40px] text-orange-500" />
                </div>
                <div className="flex flex-col items-start gap-1 justify-center">
                  <p className="font-medium text-base text-[#303030]">Total area</p>
                  <p className="text-[#535353] leading-4">900sq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
