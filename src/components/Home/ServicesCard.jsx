import { FaHome } from "react-icons/fa";

const ServicesCard = ({ headingText, paragraphText }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 flex p-10 gap-10 mt-16 bg-blue-50 rounded-md">
      {/* icon */}
      <div className=" h-16 w-20 p-1 bg-orange-500 rounded-md flex items-center justify-center">
        <FaHome className="h-6 w-6 text-white" />
      </div>
      {/* text */}

      <div className="max-w-64 space-y-5">
        <h3 className="font-semibold text-2xl leading-8">{headingText}</h3>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
