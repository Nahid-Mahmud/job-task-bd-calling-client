import React, { useState } from "react";
import { FaLocationDot, FaSquarePollHorizontal, FaVectorSquare } from "react-icons/fa6";
import Testimonials from "../About/Testimonials";
import { Range } from "react-range";
import useSearchResultsLoader from "../../hooks/useSearchResultLoader";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchResultPage = () => {
  // state for selected property
  const [selectedProperty, setSelectedProperty] = useState("searchResult");
  const [values, setValues] = useState([100]);
  const navigate = useNavigate();
  const { data: productsData, isLoading, error } = useSearchResultsLoader();

  const newProjectsArray = productsData?.data?.filter((product) => product?.ageOfConstruction === "New");

  const loanLabels = [100, 200, 300, 400, 500, 600, 700, 800, 999]; // Labels for the range

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  if (productsData?.data?.length === 0)
    return (
      <div className="w-full h-full flex items-center justify-center flex-col gap-5">
        <p className="text-2xl">No data found</p>
        <Link to="/search">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Go Back</button>
        </Link>
      </div>
    );

  // get random number between 0,1,2

  return (
    <div className="container mx-auto my-20">
      {/* Buttons properties , new projects prelaunch offers */}
      <div className="max-w-4xl">
        <div className="flex gap-8 items-start">
          <div onClick={() => setSelectedProperty("searchResult")}>
            <motion.button
              whileTap={{ scale: 0.5 }}
              whileHover={{
                scale: 1.09,
                transition: {
                  yoyo: Infinity,
                },
              }}
              className={`${
                selectedProperty === "searchResult" ? "bg-blue-600 text-white" : "bg-blue-100"
              } px-3 py-2 text-lg font-medium leading-6 rounded-md`}
            >
              properties ( {productsData?.data?.length} )
            </motion.button>
          </div>
          <div onClick={() => setSelectedProperty("new")}>
            <motion.button
              whileTap={{ scale: 0.5 }}
              whileHover={{
                scale: 1.09,
                transition: {
                  yoyo: Infinity,
                },
              }}
              className={`${
                selectedProperty === "new" ? "bg-blue-600 text-white" : "bg-blue-100"
              } px-3 py-2 text-lg font-medium leading-6 rounded-md`}
            >
              New Projects ({newProjectsArray?.length})
            </motion.button>
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.5 }}
              whileHover={{
                scale: 1.09,
                transition: {
                  yoyo: Infinity,
                },
              }}
              onClick={() => setSelectedProperty("pre-launch")}
              className={`${
                selectedProperty === "pre-launch" ? "bg-blue-600 text-white" : "bg-blue-100"
              } px-3 py-2 text-lg font-medium leading-6 rounded-md`}
            >
              Pre-launch offers
            </motion.button>
          </div>
        </div>
        <hr className="my-16" />

        {/* Search result card */}
        <div className="space-y-5">
          {selectedProperty === "searchResult" &&
            productsData?.data?.map((product) => {
              const random = Math.floor(Math.random() * 3);
              return (
                <motion.div
                  onClick={() => navigate(`/product/${product?._id}`)}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{
                    once: false,
                  }}
                  whileHover={{ scale: 1.05 }}
                  key={product?._id}
                  className="p-10 border gap-5 flex bg-[#F9FAFB] rounded-md cursor-pointer"
                >
                  <img className="h-44 w-36" src={product?.images[random]} alt="" />
                  <div className="w-full">
                    <div className="flex gap-4 items-center flex-col justify-between">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-semibold text-black text-lg leading-6">{product?.name}</h1>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl leading-7 font-bold">${product?.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-3">
                          <FaLocationDot className="text-2xl text-orange-500" />
                          <p className="text-base font-normal text-[#606060]">
                            {" "}
                            {product?.place?.area} , {product?.place?.city}{" "}
                          </p>
                        </div>
                        <Link to={`/product/${product?._id}`}>
                          <button className="border px-3 py-2 text-[#363636]">Bid Property</button>
                        </Link>
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
                          <p className="text-[#535353] leading-4"> {product?.carpetArea}t</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {/* icon */}
                        <div>
                          <FaSquarePollHorizontal className="h-[40px] w-[40px] text-orange-500" />
                        </div>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <p className="font-medium text-base text-[#303030]">Status</p>
                          <p className="text-[#535353] leading-4"> {product?.transactionType} </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {/* icon */}
                        <div>
                          <FaVectorSquare className="h-[40px] w-[40px] text-orange-500" />
                        </div>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <p className="font-medium text-base text-[#303030]">Total area</p>
                          <p className="text-[#535353] leading-4">{product?.carpetArea}t</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          {selectedProperty === "new" &&
            newProjectsArray?.map((product) => {
              const random = Math.floor(Math.random() * 3);
              return (
                <motion.div
                  onClick={() => navigate(`/product/${product?._id}`)}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{
                    once: false,
                  }}
                  whileHover={{ scale: 1.05 }}
                  key={product?._id}
                  className="p-10 border gap-5 flex bg-[#F9FAFB] rounded-md cursor-pointer"
                >
                  <img className="h-44 w-36" src={product?.images[random]} alt="" />
                  <div className="w-full">
                    <div className="flex gap-4 items-center flex-col justify-between">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-semibold text-black text-lg leading-6">{product?.name}</h1>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl leading-7 font-bold">${product?.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-3">
                          <FaLocationDot className="text-2xl text-orange-500" />
                          <p className="text-base font-normal text-[#606060]">
                            {" "}
                            {product?.place?.area} , {product?.place?.city}{" "}
                          </p>
                        </div>
                        <Link to={`/product/${product?._id}`}>
                          <button className="border px-3 py-2 text-[#363636]">Bid Property</button>
                        </Link>
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
                          <p className="text-[#535353] leading-4"> {product?.carpetArea}t</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {/* icon */}
                        <div>
                          <FaSquarePollHorizontal className="h-[40px] w-[40px] text-orange-500" />
                        </div>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <p className="font-medium text-base text-[#303030]">Status</p>
                          <p className="text-[#535353] leading-4"> {product?.transactionType} </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {/* icon */}
                        <div>
                          <FaVectorSquare className="h-[40px] w-[40px] text-orange-500" />
                        </div>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <p className="font-medium text-base text-[#303030]">Total area</p>
                          <p className="text-[#535353] leading-4">{product?.carpetArea}t</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          {selectedProperty === "pre-launch" && (
            <>
              <p className="text-3xl text-orange-400">Pre-launch offers are comming soon.</p>
            </>
          )}
        </div>
      </div>

      <div className="p-10 bg-blue-50 max-w-6xl my-16 flex items-center">
        <div className="space-y-5 flex-1">
          <p className="font-semibold text-black text-3xl leading-9">Need A Home Loan</p>
          <p className="text-[#535353] text-base">Select How Much Home Loan you can take</p>
        </div>
        {/* slider range 100K to 999K */}
        <div className="w-full flex-1">
          <Range
            step={1}
            min={100}
            max={999}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div key={"464564"} {...props} style={{ ...props.style }} className="h-6 bg-blue-200 rounded-md">
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                key={"164654"}
                {...props}
                style={{ ...props.style }}
                className="w-6 h-6 bg-blue-500 rounded-full focus:outline-none"
              />
            )}
          />

          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span className="font-medium text-md">$ {values[0]}</span>
          </div>

          {/* Range Labels */}
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            {loanLabels.map((label, index) => (
              <span key={index} className="font-medium text-md">
                {label}K
              </span>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default SearchResultPage;
