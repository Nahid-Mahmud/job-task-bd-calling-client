import Banner from "../../assets/banner-real-state-about-page.jpg";
import AnalyticsSection from "../shared/AnalyticsSection";
import OurTeam from "./OurTeam";
import EfficientTransparentHomeBuyingSolution from "./EfficientTransparentHomeBuyingSolution";
import { ProfileSlider } from "./ProfileSlider";
import MeetTheTeam from "./MeetTheTeam";
import Testimonials from "./Testimonials";

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

      <div key={10}>
        <MeetTheTeam />
      </div>

      <div key={20}>
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
