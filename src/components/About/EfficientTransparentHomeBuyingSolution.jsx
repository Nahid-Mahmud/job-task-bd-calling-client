import ImageOne from "../../assets/about-home-1.jpg";
import ImageTwo from "../../assets/about-home-2.jpg";

const EfficientTransparentHomeBuyingSolution = () => {
  return (
    <div className="container mx-auto">
      {/* 1st */}
      <div className="mb-20 relative">
        <img src={ImageOne} className="w-[1140px] h-[455px]" alt="Home image" />
        {/* text */}
        <div className="h-[270px] absolute top-80 right-0 w-[592px] bg-blue-100 p-10">
          <div>
            <div className="h-1 w-10 bg-orange-500"></div>
            <p className="text-orange-500 font-semibold text-base leading-6">Our Story</p>
          </div>
          <div className="">
            <h3 className="text-black font-bold text-4xl leading-10">
              Efficient and Transparent Home Buying Solutions
            </h3>
            <p className="text-[#6B7280] font-medium text-base">
              In the symphony of bustling markets and serene landscapes , Heritage-Nest was born-a vision to
            </p>
          </div>
        </div>
      </div>

      {/* 2nd */}
      <div className="mb-[850px] mt-48 relative">
        <img src={ImageTwo} className="w-[1140px] h-[455px] absolute right-0 " alt="Home image" />
        {/* text */}
        <div className="relative">
          <div className="h-[270px] top-80 absolute w-[592px] bg-orange-100 p-10">
            <div>
              <div className="h-1 w-10 bg-orange-500"></div>
              <p className="text-orange-500 font-semibold text-base leading-6">Our Story</p>
            </div>
            <div className="">
              <h3 className="text-black font-bold text-4xl leading-10">
                Efficient and Transparent Home Buying Solutions
              </h3>
              <p className="text-[#6B7280] font-medium text-base">
                In the symphony of bustling markets and serene landscapes , Heritage-Nest was born-a vision to
              </p>
            </div>
          </div>
        </div>
        {/* img */}
      </div>
    </div>
  );
};

export default EfficientTransparentHomeBuyingSolution;
