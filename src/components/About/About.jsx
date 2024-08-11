import Banner from "../../assets/banner-real-state-about-page.jpg";
import AnalyticsSection from "../shared/AnalyticsSection";
import OurTeam from "./OurTeam";
import EfficientTransparentHomeBuyingSolution from "./EfficientTransparentHomeBuyingSolution";
import { ProfileSlider } from "./ProfileSlider";

const About = () => {
  return (
    <div className="">
      {/* Banner Section */}

      <div>
        <img className="h-96 w-full" src={Banner} alt="" />
      </div>

      {/* analytics component */}

      <AnalyticsSection />
      {/* EfficientTransparent Home buying solutions */}

      <EfficientTransparentHomeBuyingSolution />
      {/* our team */}

      <OurTeam />
      <div>
        <ProfileSlider />
      </div>
    </div>
  );
};

export default About;
