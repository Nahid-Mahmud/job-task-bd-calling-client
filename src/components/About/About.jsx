import Banner from "../../assets/banner-real-state-about-page.jpg";
import AnalyticsSection from "../shared/AnalyticsSection";
import OurTeam from "./OurTeam";
import EfficientTransparentHomeBuyingSolution from "./EfficientTransparentHomeBuyingSolution";
import { ProfileSlider } from "./ProfileSlider";
import MeetTheTeam from "./MeetTheTeam";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{
        visiblePercentage: 50,
        once: true,
      }}
      className=""
    >
      {/* Banner Section */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
      >
        <img className="h-96 w-full" src={Banner} alt="" />
      </motion.div>

      {/* analytics component */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
      >
        <AnalyticsSection />
      </motion.div>
      {/* EfficientTransparent Home buying solutions */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
      >
        <EfficientTransparentHomeBuyingSolution />{" "}
      </motion.div>
      {/* our team */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
      >
        <OurTeam />
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
        <ProfileSlider />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
        key={10}
      >
        <MeetTheTeam />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          visiblePercentage: 50,
          once: true,
        }}
        key={20}
      >
        <Testimonials />
      </motion.div>
    </motion.div>
  );
};

export default About;
