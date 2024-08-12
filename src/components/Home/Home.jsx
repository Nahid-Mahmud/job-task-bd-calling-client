import React from "react";
import Banner from "./Banner";
import BuyingSolutionsPictureSection from "./BuyingSolutionsPictureSection";
import BuyingSolutionMid from "./BuyingSolutionMid";
import OtherServices from "./OtherServices";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* bying solutions section */}
      <div className="container mx-auto">
        <BuyingSolutionsPictureSection />
        <BuyingSolutionMid />
        <BuyingSolutionsPictureSection />
        <div className="mt-80 mb-20">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
