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
const images = [
  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ProductDetails = () => {
  // state for selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="container  mx-auto mt-16">
      <div className="flex flex-col  ">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-black text-lg leading-6">Name of the property</h1>
          <p className="flex items-center gap-2">
            {" "}
            <p className="text-2xl leading-7 font-bold">$3652</p>
          </p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <FaLocationDot className="text-2xl text-orange-500" />
          <p className="text-base font-normal text-[#606060]">Location of the property</p>
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
              {images?.map((image, index) => (
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
                <p className="text-xl text-[#303030]">3 Beds</p>
              </div>
              <div className="flex items-center gap-3">
                <FaBath className="text-2xl font-semibold" />
                <p className="text-xl text-[#303030]">2 Baths</p>
              </div>
              <div className="flex items-center gap-3">
                <GiFurnace className="text-2xl font-semibold" />
                <p className="text-xl text-[#303030]">Fully Furnished</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4">
              <div className="space-y-2">
                <p className="text-[#5C5C5C]">Carpet Area</p>
                <p className="text-base font-medium">2000 sqft</p>
                <p className="text-sm text-[#535353]"> $255/sqft </p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Floor</p>
                <p className="text-base font-medium">Second Floor</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Transction Type</p>
                <p className="text-base font-medium">Ready to move</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Lift</p>
                <p className="text-base font-medium">1</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4">
              <div className="space-y-2">
                <p className="text-[#5C5C5C]">Facing</p>
                <p className="text-base font-medium">North - East</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Additional rooms</p>
                <p className="text-base font-medium">1 servent Room & 1 guest room</p>
              </div>
              <div>
                <p className="text-[#5C5C5C]">Age of Constransction </p>
                <p className="text-base font-medium">New Constransction</p>
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
              <button className="text-lg leading-7 font-semibold text-white mb-6 bg-blue-500 hover:bg-blue-600 rounded-md  px-3 py-2">
                Bid Property
              </button>
            </div>
          </div>
          <img src={MapImage} alt="" className="w-full mt-5 overflow-hidden rounded-md" />
        </div>
      </div>

      {/* amenities section */}

      <div className="p-10 bg-slate-50">
        <p className="my-10">Amenities</p>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <IoMdBatteryCharging />
            <p>Power Back Up</p>
          </div>
          <div>
            <GiLift /> <p>Lift</p>
          </div>
          <div>
            <PiClub /> <p>Club House</p>
          </div>
          <div>
            <MdSportsGymnastics /> <p>Gymnasium</p>
          </div>
          <div>
            <PiParkLight /> <p>Park</p>
          </div>
          <div>
            <CiParking1 />
            <p>Reserved parking</p>
          </div>
          <div>
            <MdSecurity /> <p>Security</p>
          </div>
          <div>
            <FaHandHoldingWater /> <p>Water Storage</p>
          </div>
          <div>
            <CgTerrain />
            <p>Private Terrace</p>
          </div>
          <div>
            <GrCompliance /> <p>Vaastu Complient</p>
          </div>
          <div>
            <GrServices />
            <p>Service/Goods Lift</p>
          </div>
          <div>
            <GiInvisible /> <p>Visitor Parking</p>
          </div>
          <div>
            <LiaIntercom /> <p>Intercom Facility</p>
          </div>
          <div>
            <GrHostMaintenance /> <p>Maintenance Staff</p>
          </div>
          <div>
            <GiNuclearWaste /> <p>Waste Disposal</p>
          </div>
          <div>
            <MdOutlineLocalLaundryService /> <p>Laundry Service</p>
          </div>
          <div>
            <FaWifi /> <p>Internet/ Wi-Fi Connectivity</p>
          </div>
          <div>
            <PiTelevisionDuotone /> <p>DTH Televisiton Facility</p>
          </div>
          <div>
            <MdGasMeter /> <p>Piped Gas</p>
          </div>
          <div>
            <TbTrack /> <p>Jogging and Strolling Track</p>
          </div>
          <div>
            <FaTableTennis /> <p>Outdoor Tennis Courts</p>
          </div>
          <div>
            <SiFuturelearn /> <p>Early Learning Care</p>
          </div>
          <div>
            <TbMoodKid /> <p>Kids Paly Area</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
