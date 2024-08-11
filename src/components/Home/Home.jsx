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
        <OtherServices />
      </div>
    </div>
  );
};

export default Home;
