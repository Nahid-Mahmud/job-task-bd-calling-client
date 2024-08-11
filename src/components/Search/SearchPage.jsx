import SearchImage from "../../assets/search.jpg";
import SearchBox from "./SearchBox";
import AnalyticsSection from "../shared/AnalyticsSection";
import Testimonials from "../About/Testimonials";
import { properties } from "../../data/Propertydata";
import PopularProductSlider from "./PopularProductSlider";
import { FaLocationDot } from "react-icons/fa6";

// filter popular properties
const popularProperties = properties?.filter((property) => property?.tag === "Popular");

const SearchPage = () => {
  console.log(popularProperties[0]);
  return (
    <div className="">
      {/* image */}
      <div className="relative mb-72">
        <img className="w-full h-[600px]" src={SearchImage} alt="Search" />
        <div className="absolute top-1/2 left-[24rem]">
          <SearchBox />
        </div>
      </div>
      <div>
        <AnalyticsSection />
      </div>
      {/* Popular Properties */}

      <div className="container mx-auto">
        <p>Popular Properties </p>
        {/* <div className="w-[385px] bg-[#F9FAFB]">
          <img
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[385px] h-[200px]"
          />
          <div className="p-5">
            <div className="flex border-b mb-5  items-center justify-between mt-5   ">
              <p className="bg-blue-100 px-3 py-1 text-">Apartment</p>
              <div className="flex gap-2 items-center justify-start">
                <div className="h-2 w-2 bg-orange-500 "></div>
                <p>Ready To Move</p>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl leading-8">
                <p>SunnySlope Suites</p>
                <p className="flex items-center justify-start">
                  <FaLocationDot className="text-orange-500" />
                  <span className="font-normal text-base leading-6 text-[#606060]">Meadowshire park, USA</span>
                </p>
              </div>
              <p>$25000</p>
            </div>
          </div>
        </div> */}

        <PopularProductSlider data={popularProperties} />
      </div>

      {/* testimonials */}

      <Testimonials />
    </div>
  );
};

export default SearchPage;
