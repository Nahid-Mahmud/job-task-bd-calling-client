import { FaRegArrowAltCircleDown } from "react-icons/fa";

const AnalyticsSection = () => {
  return (
    <div className="container my-20 mx-auto rounded-md flex justify-between flex-wrap">
      {/* 1st */}
      <div className="bg-orange-100 h-44 w-72 p-6 ">
        <div>
          <p className="text-orange-500 font-bold text-4xl leading-10">2K+</p>
          <p className="text-black text-base leading-4">New Flat Listed</p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-orange-500 text-base leading-6 underline">View All</p>
          <FaRegArrowAltCircleDown className="text-orange-400 text-4xl" />
        </div>
      </div>

      {/* 2nd */}

      <div className="bg-blue-100 h-44 w-72 p-6 ">
        <div>
          <p className="text-blue-500 font-bold text-4xl leading-10">2K+</p>
          <p className="text-black text-base leading-4">New Flat Listed</p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-blue-500 text-base leading-6 underline">View All</p>
          <FaRegArrowAltCircleDown className="text-blue-400 text-4xl" />
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-orange-100 h-44 w-72 p-6 ">
        <div>
          <p className="text-orange-500 font-bold text-4xl leading-10">2K+</p>
          <p className="text-black text-base leading-4">New Flat Listed</p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-orange-500 text-base leading-6 underline">View All</p>
          <FaRegArrowAltCircleDown className="text-orange-400 text-4xl" />
        </div>
      </div>

      {/* 4th */}

      <div className="bg-blue-100 h-44 w-72 p-6 ">
        <div>
          <p className="text-blue-500 font-bold text-4xl leading-10">2K+</p>
          <p className="text-black text-base leading-4">New Flat Listed</p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-blue-500 text-base leading-6 underline">View All</p>
          <FaRegArrowAltCircleDown className="text-blue-400 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
