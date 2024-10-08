import React, { useState } from "react";
import { FaBath, FaBed, FaHandHoldingWater, FaTableTennis, FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiFurnace, GiInvisible, GiLift, GiNuclearWaste } from "react-icons/gi";
import MinMaxSlider from "./MinMaxSlide";
import MapImage from "../../assets//map.png";
import { IoMdBatteryCharging } from "react-icons/io";
import { PiClub, PiParkLight, PiTelevisionDuotone } from "react-icons/pi";
import { MdGasMeter, MdOutlineLocalLaundryService, MdSecurity, MdSportsGymnastics } from "react-icons/md";
import { CiParking1 } from "react-icons/ci";
import { CgTerrain } from "react-icons/cg";
import { GrCompliance, GrHostMaintenance, GrServices } from "react-icons/gr";
import { LiaIntercom } from "react-icons/lia";
import { TbMoodKid, TbTrack } from "react-icons/tb";
import { SiFuturelearn } from "react-icons/si";
import OtherServices from "../Home/OtherServices";
import PopularProductSlider from "../Search/PopularProductSlider";
import { properties } from "../../data/Propertydata";
import { useParams } from "react-router-dom";
import { usePublicApi } from "../../hooks/usePublicApi";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
const images = [
  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const popularProperties = properties?.filter((property) => property?.tag === "Popular");

const features = [
  { icon: <IoMdBatteryCharging />, text: "Power Back Up" },
  { icon: <GiLift />, text: "Lift" },
  { icon: <PiClub />, text: "Club House" },
  { icon: <MdSportsGymnastics />, text: "Gymnasium" },
  { icon: <PiParkLight />, text: "Park" },
  { icon: <CiParking1 />, text: "Reserved parking" },
  { icon: <MdSecurity />, text: "Security" },
  { icon: <FaHandHoldingWater />, text: "Water Storage" },
  { icon: <CgTerrain />, text: "Private Terrace" },
  { icon: <GrCompliance />, text: "Vaastu Complient" },
  { icon: <GrServices />, text: "Service/Goods Lift" },
  { icon: <GiInvisible />, text: "Visitor Parking" },
  { icon: <LiaIntercom />, text: "Intercom Facility" },
  { icon: <GrHostMaintenance />, text: "Maintenance Staff" },
  { icon: <GiNuclearWaste />, text: "Waste Disposal" },
  { icon: <MdOutlineLocalLaundryService />, text: "Laundry Service" },
  { icon: <FaWifi />, text: "Internet/ Wi-Fi Connectivity" },
  { icon: <PiTelevisionDuotone />, text: "DTH Television Facility" },
  { icon: <MdGasMeter />, text: "Piped Gas" },
  { icon: <TbTrack />, text: "Jogging and Strolling Track" },
  { icon: <FaTableTennis />, text: "Outdoor Tennis Courts" },
  { icon: <SiFuturelearn />, text: "Early Learning Care" },
  { icon: <TbMoodKid />, text: "Kids Play Area" },
];

const ProductDetails = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { user } = useAuth();
  const api = usePublicApi();
  const { id } = useParams();

  const handleBidProberty = () => {
    if (!user) {
      toast?.error("Sign In to participate.", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast?.success("Bid placed successfully.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // get product details

  const {
    data: productDetails = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => api.get(`products/${id}`).then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  console.log(id);
  // state for selected image index

  return (
    <div className="container  mx-auto mt-16">
      <div className="flex flex-col  ">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-black text-lg leading-6"> {productDetails?.data?.name} </h1>
          <div className="flex items-center gap-2">
            {" "}
            <p className="text-2xl leading-7 font-bold">${productDetails?.data?.price}K</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <FaLocationDot className="text-2xl text-orange-500" />
          <p className="text-base font-normal text-[#606060]">
            {productDetails?.data?.place?.area} , {productDetails?.data?.place?.city}{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-2/3">
          {/* name price area */}

          <hr className="mt-8" />

          {/* image section .  */}

          <div className="w-full">
            <img className="mb-2" src={images[selectedImageIndex]} alt="" />
            <div className="flex gap-2 w-full ">
              {productDetails?.data?.images?.map((image, index) => (
                <img
                  src={image}
                  onClick={() => setSelectedImageIndex(index)}
                  className="w-[327px] cursor-pointer"
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* overview section */}
          <div className="p-5 w-full  bg-slate-50 my-16 border rounded-lg">
            <div className="">
              <p className="text-2xl leading-7 font-semibold">Overview</p>
            </div>
            <div className="grid grid-cols-4 p-3 bg-white rounded border-b-gray-400 border-b-2">
              <div className="flex items-center gap-3">
                <FaBed className="text-2xl font-semibold" />
                <p className="text-xl text-[#303030]">{productDetails?.data?.beds} Beds</p>
              </div>
              <div className="flex items-center gap-3">
                <FaBath className="text-2xl font-semibold" />
                <p className="text-xl text-[#303030]">{productDetails?.data?.bath} Baths</p>
              </div>
              <div className="flex items-center gap-3">
                <GiFurnace className="text-2xl font-semibold" />
                <p className="text-xl text-[#303030]">Fully Furnished</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4">
              <div className="space-y-2">
                <p className="text-[#5C5C5C]">Carpet Area</p>
                <p className="text-base font-medium">{productDetails?.data?.carpetArea}t</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Floor</p>
                <p className="text-base font-medium">{productDetails?.data?.floor} </p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Transction Type</p>
                <p className="text-base font-medium">{productDetails?.data?.transactionType}</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Lift</p>
                <p className="text-base font-medium">{productDetails?.data?.lift}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4">
              <div className="space-y-2">
                <p className="text-[#5C5C5C]">Facing</p>
                <p className="text-base font-medium">{productDetails?.data?.facing}</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Additional rooms</p>
                <p className="text-base font-medium">
                  Servent: {productDetails?.data?.additionalRoom?.servent} , Guest:{"  "}
                  {productDetails?.data?.additionalRoom?.guest}
                </p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Age of Constransction </p>
                <p className="text-base font-medium">{productDetails?.data?.ageOfConstruction}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-8 ">
          {/* bid property section */}
          <div className="p-5 bg-blue-50 space-y-4">
            <p className="text-base text-[#6B7280]">Property Value</p>
            <p className="text-2xl leading-7 font-bold">$100K - $999K</p>
            <p className="text-base text-[#6B7280]">Your bid can not be more than 10% of the property maximum value</p>
            <MinMaxSlider />
            <div className="w-full flex items-center justify-center">
              <button
                onClick={handleBidProberty}
                className="text-lg leading-7 font-semibold text-white mb-6 bg-blue-500 hover:bg-blue-600 rounded-md  px-3 py-2"
              >
                Bid Property
              </button>
            </div>
          </div>
          <img src={MapImage} alt="" className="w-full mt-5 overflow-hidden rounded-md" />
        </div>
      </div>

      {/* amenities section */}

      <div className="p-10 bg-slate-50 border rounded-md ">
        <p className="my-10">Amenities</p>
        {/* <div className="grid grid-cols-4 gap-10">
          <div className="flex items-center ">
            <div>
              <IoMdBatteryCharging />
            </div>
            <p>Power Back Up</p>
          </div>
          <div>
            <div>
              <GiLift />
            </div>{" "}
            <p>Lift</p>
          </div>
          <div>
            <div>
              <PiClub />
            </div>
            <p>Club House</p>
          </div>
          <div>
            <div>
              <MdSportsGymnastics />
            </div>{" "}
            <p>Gymnasium</p>
          </div>
          <div>
            <div>
              <PiParkLight />
            </div>{" "}
            <p>Park</p>
          </div>
          <div>
            <div>
              <CiParking1 />
            </div>
            <p>Reserved parking</p>
          </div>
          <div>
            <div>
              <MdSecurity />{" "}
            </div>
            <p>Security</p>
          </div>
          <div>
            <div>
              <FaHandHoldingWater />
            </div>{" "}
            <p>Water Storage</p>
          </div>
          <div>
            <div>
              <CgTerrain />
            </div>
            <p>Private Terrace</p>
          </div>
          <div>
            <div>
              <GrCompliance />
            </div>{" "}
            <p>Vaastu Complient</p>
          </div>
          <div>
            <div>
              <GrServices />
            </div>
            <p>Service/Goods Lift</p>
          </div>
          <div>
            <div>
              <GiInvisible />
            </div>{" "}
            <p>Visitor Parking</p>
          </div>
          <div>
            <div>
              <LiaIntercom />{" "}
            </div>
            <p>Intercom Facility</p>
          </div>
          <div>
            <div>
              <GrHostMaintenance />{" "}
            </div>
            <p>Maintenance Staff</p>
          </div>
          <div>
            <div>
              <GiNuclearWaste />
            </div>{" "}
            <p>Waste Disposal</p>
          </div>
          <div>
            <div>
              <MdOutlineLocalLaundryService />{" "}
            </div>
            <p>Laundry Service</p>
          </div>
          <div>
            <div>
              <FaWifi />
            </div>{" "}
            <p>Internet/ Wi-Fi Connectivity</p>
          </div>
          <div>
            <div>
              <PiTelevisionDuotone />{" "}
            </div>
            <p>DTH Televisiton Facility</p>
          </div>
          <div>
            <div>
              <MdGasMeter />{" "}
            </div>
            <p>Piped Gas</p>
          </div>
          <div>
            <div>
              <TbTrack />
            </div>{" "}
            <p>Jogging and Strolling Track</p>
          </div>
          <div>
            <div>
              <FaTableTennis />{" "}
            </div>
            <p>Outdoor Tennis Courts</p>
          </div>
          <div>
            <div>
              <SiFuturelearn />
            </div>{" "}
            <p>Early Learning Care</p>
          </div>
          <div>
            <div>
              <TbMoodKid />
            </div>{" "}
            <p>Kids Paly Area</p>
          </div>
        </div> */}
        <div className="grid grid-cols-4 gap-10 ">
          {features.map((feature, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <div className="h-12 w-12 flex items-center justify-center bg-white">
                <span className="text-2xl">{feature?.icon}</span>
              </div>
              <p className="text-base font-medium">{feature?.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* services section */}

      <div className="my-20">
        <OtherServices />
      </div>

      {/* Properties slide */}
      <div className="mb-10">
        <PopularProductSlider data={popularProperties} />
      </div>
    </div>
  );
};

export default ProductDetails;
