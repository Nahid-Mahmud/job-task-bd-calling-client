import React, { useContext, useEffect, useRef, useState } from "react";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiHomeHeartLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { SearchDataContext } from "../../contexts";
const propertyNames = [
  "Luxury Apartment",
  "Comfort Residency",
  "Prime Heights",
  "Green Villa",
  "Sunshine Apartments",
  "Skyline Towers",
  "Royal Palace",
  "Lakeside View",
  "Harmony Residency",
  "Ocean Breeze",
  "Modern Residence",
  "Charming Nest",
  "Urban Oasis",
  "New Horizons",
  "Elite Towers",
  "Tranquil Home",
  "Cozy Corner",
  "Serene Retreat",
  "Elegant Living",
  "Grand Estate",
  "Compact Living",
  "Comfort Haven",
];

const propertyTypes = ["Apartment", "Villa"];

const cities = ["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Dinajpur", "Khulna", "Mymensingh", "Pabna", "Tangail"];

const SearchBox = () => {
  // const [formData, setFormData] = useState({
  //   searchQuery: "",
  //   location: "",
  //   propertyType: "",
  //   budget: "",
  // });
  const { formData, setFormData } = useContext(SearchDataContext);
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "searchQuery") {
      const filteredSuggestions = propertyNames.filter((property) =>
        property.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownOpen(value.length > 0); // Show dropdown if there are suggestions
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prevData) => ({
      ...prevData,
      searchQuery: suggestion,
    }));
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/searchResult");
  };

  // navigate
  const navigate = useNavigate();

  return (
    <div className="w-[80rem] h- mx-auto shadow-lg p-10 bg-white rounded-md" ref={searchRef}>
      <div className="flex border-b-blue-50 border-b my-10 gap-10 p-1">
        <p className="text-base leading-4 font-medium text-blue-500 underline">Buy</p>
        <p className="text-base leading-4 font-medium text-[#4B5563]">Rent</p>
        <p className="text-base leading-4 font-medium text-[#4B5563]">PG</p>
        <p className="text-base leading-4 font-medium text-[#4B5563]">Plot</p>
        <p className="text-base leading-4 font-medium text-[#4B5563]">Commertial</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col relative">
        <input
          type="text"
          name="searchQuery"
          placeholder="Search Properties"
          value={formData?.searchQuery}
          onChange={handleChange}
          className="w-full  p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
        />

        {isDropdownOpen && suggestions.length > 0 && (
          <ul className="absolute z-10 top-20 bg-white border border-gray-300 rounded-lg mt-1 w-full  max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <div className="flex space-x-3 mt-10">
          <div className="flex flex-col gap-5 mb-5 w-full">
            <label
              htmlFor="location"
              className="flex gap-2 items-center justify-start text-lg font-semibold text-black"
            >
              <CiLocationOn className="text-2xl text-orange-500" />

              <span>Your Location</span>
            </label>
            <select
              name="location"
              value={formData?.location}
              onChange={handleChange}
              className="w-full  p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100 h-16"
            >
              <option value="">Your Location</option>

              {cities?.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-5 mb-5 w-full">
            <label
              htmlFor="propertyType"
              className="flex gap-2 items-center justify-start text-lg font-semibold text-black"
            >
              <RiHomeHeartLine className="text-2xl text-orange-500" />
              <span>Property Type</span>
            </label>
            <select
              name="propertyType"
              value={formData?.propertyType}
              onChange={handleChange}
              className="w-full  p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  bg-blue-100 h-16"
            >
              <option value="">Property Type</option>
              {propertyTypes?.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-5 mb-5 w-full">
            <label htmlFor="budget" className="flex gap-2 items-center justify-start text-lg font-semibold text-black">
              <CiDollar className="text-2xl text-orange-500" />
              <span>Budget</span>
            </label>
            <input
              type="number"
              name="budget"
              placeholder="Budget 100k-999k"
              value={formData?.budget}
              onChange={handleChange}
              className="w-full  p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  bg-blue-100 h-16"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-3  md:w-auto py-3 bg-blue-700 rounded  text-white  flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
          <FaSearch className="mr-2" />
          Find Property
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
