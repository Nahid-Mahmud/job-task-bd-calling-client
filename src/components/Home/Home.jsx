import React from "react";
import Banner from "./Banner";
import BuyingSolutionsPictureSection from "./BuyingSolutionsPictureSection";
import BuyingSolutionMid from "./BuyingSolutionMid";
import OtherServices from "./OtherServices";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* bying solutions section */}
      <div className="container mx-auto">
        <div>
          <BuyingSolutionsPictureSection />
        </div>
        <div>
          <BuyingSolutionMid />
        </div>
        <div>
          <BuyingSolutionsPictureSection />
        </div>
        <div className="mt-80 mb-20">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
