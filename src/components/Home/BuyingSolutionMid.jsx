import { FaCirclePlay } from "react-icons/fa6";
import ImageOne from "../../assets/pic1.jpg";
import ImageTwo from "../../assets/pic3.jpg";
import { FaSearch } from "react-icons/fa";

const BuyingSolutionMid = () => {
  return (
    <div className="flex flex-row-reverse mt-52 mb-80 gap-48 justify-between  ">
      <div className="flex-1 ">
        <div className="relative">
          <img src={ImageTwo} className="h-[240px] w-[452px]  ml-36 rounded-lg" alt="image of a room" />
          <img className="h-[300px] w-[458] absolute top-1/2 rounded-lg" src={ImageOne} alt="image of a room" />
          <div className="absolute  top-24 left-[7.5rem] ">
            <button className="bg-blue-600  rounded-full p-2">
              <FaCirclePlay className="h-10 w-10 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <div className="max-w-7xl">
          <div className="flex items-center justify-start gap-3">
            <div className="h-1 w-10 bg-orange-500"></div>
            <p className="text-lg font-semibold text-orange-500">Property Buying</p>
          </div>
          <div className="space-y-8 ">
            <p className="font-bold text-black text-[40px]">Efficient and Transparent Home Buying Solutions</p>
            <p className="text-gray-500">
              It is a long established fact that reader will be distracted by the readble content of a page when looking
              at its layout.
            </p>
          </div>

          <button className=" rounded flex items-center justify-center gap-3 px-4 py-5 mt-8  ">
            <FaSearch className="h-6 w-6" />
            <span className="text-lg ">Find Property</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyingSolutionMid;
