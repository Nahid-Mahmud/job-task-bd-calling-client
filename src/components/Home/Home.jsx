import Banner from "./Banner";
import BuyingSolutionsPictureSection from "./BuyingSolutionsPictureSection";
import BuyingSolutionMid from "./BuyingSolutionMid";
import OtherServices from "./OtherServices";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{
        visiblePercentage: 50,
        once: true,
      }}
    >
      <Banner />
      {/* bying solutions section */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            visiblePercentage: 50,
            once: true,
          }}
        >
          <BuyingSolutionsPictureSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            visiblePercentage: 50,
            once: true,
          }}
        >
          <BuyingSolutionMid />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            visiblePercentage: 50,
            once: true,
          }}
        >
          <BuyingSolutionsPictureSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            visiblePercentage: 50,
            once: true,
          }}
          className="mt-80 mb-20"
        >
          <OtherServices />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
