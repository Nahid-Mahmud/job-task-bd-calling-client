import House from "../../assets//house-about.jpg";
const MeetTheTeam = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center justify-start mb-5">
            <div className="h-1 w-10 bg-orange-500"></div>
            <p className="text-orange-500 font-semibold text-lg leading-5 capitalize">
              Meet the team for book consultation
            </p>
          </div>
          <div className="max-w-[696px]">
            <h2 className="text-black font-bold text-[40px] leading-10 mt-10 mb-5">
              Meet the stewards of your heritage journey.
            </h2>
            <p className="text-base font-medium leading-6 mb-10 text-gray-500">
              each member an embodiment of expertise an warmth , dedicated to guide you home , every step of the way.
            </p>

            <button className="py-4 px-6 bg-blue-500 text-white rounded-md font-bold">Book Consultation Now</button>
          </div>
        </div>

        {/* image */}

        <img className="max-h-[384px] w-auto" src={House} alt="" />
      </div>
    </div>
  );
};

export default MeetTheTeam;
