import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoPlaySkipForwardCircle, IoPlaySkipBackCircleSharp } from "react-icons/io5";


import ProfileOne from "../../assets/profiles/profile-1.jpg";
import ProfileTwo from "../../assets/profiles/profile-2.jpg";
import ProfileThree from "../../assets/profiles/profile-3.jpg";
import ProfileFour from "../../assets/profiles/profile-4.jpg";
import ProfileFive from "../../assets/profiles/profile-5.jpg";
import ProfileSix from "../../assets/profiles/profile-6.jpg";

const images = [ProfileOne, ProfileTwo, ProfileThree, ProfileFour, ProfileFive, ProfileSix];

export const ProfileSlider = () => {
  return (
    <div className="relative overflow-hidden container px-5 mx-auto mb-20">
      <Swiper
        slidesPerView={3} // Number of slides to show at once
        spaceBetween={10} // Space between slides
        loop={true} // Enable infinite loop
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className="w-full h-[417px] object-cover" alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute  -right-1 top-1/2 text-5xl text-blue-600 cursor-pointer z-10 swiper-button-next">
        <IoPlaySkipForwardCircle />
      </div>
      <div className="absolute top-1/2  -left-1 text-5xl text-blue-600 cursor-pointer z-10 swiper-button-prev">
        <IoPlaySkipBackCircleSharp />
      </div>
    </div>
  );
};
