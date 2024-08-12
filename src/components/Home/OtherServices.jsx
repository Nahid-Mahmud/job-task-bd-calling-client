import React from "react";
import ServicesCard from "./ServicesCard";

const OtherServices = () => {
  return (
    <div className="">
      <p className="text-center font-bold text-5xl text-black">Other Services</p>

      <div className="w-full flex gap-10">
        <ServicesCard
          paragraphText={"Effortlessly find your dream property with advanced search filters."}
          headingText={"Advance Property Search"}
        />
        <ServicesCard
          headingText={"Virtual Tours and Multimedia"}
          paragraphText={"Explore Properites through immersive virtual tours."}
        />
        <ServicesCard
          headingText={"Secure Online Transactions"}
          paragraphText={"Ensure secure transactions and e-sign documents seamlessly online."}
        />
      </div>
    </div>
  );
};

export default OtherServices;
