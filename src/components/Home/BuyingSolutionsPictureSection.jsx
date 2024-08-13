import { FaCirclePlay } from "react-icons/fa6";
import ImageOne from "../../assets/pic1.jpg";
import ImageTwo from "../../assets/pic2.jpg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BuyingSolutionsPictureSection = () => {
  return (
    <div className="flex my-32 gap-48 justify-between ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 "
      >
        <div className="relative">
          <img className="h-[400px] w-[458] rounded-lg" src={ImageOne} alt="image of a room" />
          <img
            src={ImageTwo}
            className="h-[240px] w-[452px] absolute top-64 left-80 rounded-lg"
            alt="image of a room"
          />
          <div className="absolute top-56 right-7 ">
            <button className="bg-blue-600 rounded-full p-2">
              <FaCirclePlay className="h-10 w-10 text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2"
      >
        <div className="max-w-7xl">
          <div className="flex items-center justify-start gap-3">
            <div className="h-1 w-10 bg-orange-500"></div>
            <p className="text-lg font-semibold text-orange-500">Property Buying</p>
          </div>
          <div className="space-y-8 ">
            <p className="font-bold text-black text-[40px]">Efficient and Transparent Home Buying Solutions</p>
            <p className="text-gray-500">
              It is a long established fact that reader will be distracted by the readble content of a page when looking
              at its layout.
            </p>
          </div>
          <Link to={"/search"}>
            <button className="bg-blue-50 rounded flex items-center justify-center gap-3 px-4 py-5 mt-8  hover:scale-110 transition-all">
              <FaSearch className="h-6 w-6" />
              <span className="text-lg ">Find Property</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyingSolutionsPictureSection;
