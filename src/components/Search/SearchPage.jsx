import SearchImage from "../../assets/search.jpg";
import SearchBox from "./SearchBox";
import AnalyticsSection from "../shared/AnalyticsSection";
import Testimonials from "../About/Testimonials";
import { properties } from "../../data/Propertydata";
import PopularProductSlider from "./PopularProductSlider";
import useGetProductByTagOrAge from "../../hooks/useGetProductByTagOrAge";

// filter popular properties
// const popularProperties = properties?.filter((property) => property?.tag === "Popular");

// // ageOfConstruction
// const newProperties = properties?.filter((property) => property?.ageOfConstruction === "New");

const SearchPage = () => {
  const { data: popularProperties } = useGetProductByTagOrAge("Popular");

  const { data: newProperties } = useGetProductByTagOrAge("New");
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
        <p className="font-semibold text-4xl leading-10 text-black my-10">Popular Properties </p>

        <PopularProductSlider data={popularProperties?.data} />
      </div>

      <div className="container mx-auto">
        <p className="font-semibold text-4xl leading-10 text-black my-10">New Listed Properties </p>

        <PopularProductSlider data={newProperties?.data} />
      </div>

      {/* testimonials */}

      <div className="mt-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default SearchPage;
