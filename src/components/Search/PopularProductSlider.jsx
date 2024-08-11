import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";

const PopularProductSlider = ({ data }) => {
  // genarate 1,2,3 randomly
  console.log(data);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[450px]"
    >
      {data?.map((property, index) => {
        // random number betwen 0,1,2
        const random = Math.floor(Math.random() * 3);
        return (
          <SwiperSlide key={property.id} className="w-full bg-[#F9FAFB]">
            <div className=" bg-[#F9FAFB]">
              <img src={property?.images[random]} className="w-full h-[200px]" />
              <div className="p-5">
                <div className="flex border-b mb-5  items-center justify-between mt-5   ">
                  <p className="bg-blue-100 px-3 py-1 text-">{property?.propertyType}</p>
                  <div className="flex gap-2 items-center justify-start">
                    <div className="h-2 w-2 bg-orange-500 "></div>
                    <p> {property?.transactionType} </p>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xl leading-8">
                    <p> {property?.name} </p>
                    <p className="flex items-center gap-2 justify-start">
                      <FaLocationDot className="text-orange-500" />
                      <span className="font-normal text-base leading-6 text-[#606060]">
                        {" "}
                        {property?.place?.area} , {property?.place?.city}{" "}
                      </span>
                    </p>
                  </div>
                  <p className="font-semibold text-2xl leading-8 text-black mt-5">${property?.price}K</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularProductSlider;
