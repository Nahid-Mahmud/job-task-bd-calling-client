import { FaSearch } from "react-icons/fa";
import BannerImage from "../../assets/banner.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="banner relative h-64 md:h-80 lg:h-[34rem] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  from-transparent  to-black  "></div>

      {/* Centered Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        className="relative text-white text-2xl text-justify flex flex-col items-center justify-center gap-3 md:text-4xl lg:text-5xl  max-w-3xl"
      >
        <h1 className="text-2xl md:text-4xl font-bold lg:text-5xl xl:text-6xl">
          Your Portal to India&apos;s Exquisite Real Estate.
        </h1>
        <p className="text-base font-medium">
          Seamlessly connecting you to the heartbear of India &apos;s prime properties
        </p>
        <Link to={"/search"}>
          <motion.button
            whileTap={{ scale: 0.5 }}
            whileHover={{
              scale: 1.1,
              transition: {
                yoyo: Infinity,
              },
            }}
            className="bg-blue-600 rounded flex items-center justify-center gap-3 px-4 py-5 mt-8  "
          >
            <FaSearch className="h-6 w-6" />
            <span className="text-lg font-medium">Find Property</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Banner;
