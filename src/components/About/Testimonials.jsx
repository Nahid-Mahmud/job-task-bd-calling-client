import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Testimonial data with IDs
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    review:
      "This is a fantastic service! Highly recommended. The team was incredibly professional and exceeded all my expectations. I will definitely be using their services again in the future.",
    profileImage: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    review:
      "A wonderful experience from start to finish. The attention to detail and customer service were outstanding. I felt valued and appreciated throughout the entire process. Highly recommended!",
    profileImage: "https://i.pravatar.cc/300",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    designation: "UX Designer",
    review:
      "The team was professional and delivered high-quality results. Their expertise in UX design is evident in the final product. I am extremely satisfied with the outcome and would recommend them to anyone.",
    profileImage: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 4,
    name: "Bob Brown",
    designation: "Marketing Specialist",
    review:
      "Great value for the money. Will definitely use again. The marketing strategies they provided were innovative and effective. I saw a significant increase in engagement and sales. Highly recommended!",
    profileImage: "https://i.pravatar.cc/300",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "Content Writer",
    review:
      "Very satisfied with the overall experience. Excellent support! The team was always available to answer my questions and provide guidance. Their expertise in content writing is top-notch. Highly recommended!",
    profileImage: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Wilson",
    designation: "Business Analyst",
    review:
      "Highly effective solutions and top-notch service. The team provided valuable insights and recommendations that greatly improved our business processes. I am very impressed with their professionalism and expertise.",
    profileImage: "https://i.pravatar.cc/300",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="py-8 container mx-auto ">
      <p className="font-bold text-4xl text-black mb-16 text-center">Testimonials</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2} // Show 2 testimonials at a time
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="bg-blue-50 shadow-lg rounded-lg p-10">
            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xl ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-2">{testimonial.review}</p>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
