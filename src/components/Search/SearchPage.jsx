import { useState, useRef, useEffect } from "react";
import SearchImage from "../../assets/search.jpg";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";



const SearchPage = () => {

  return (
    <div>
      {/* image */}
      <div>
        <img className="w-full h-[600px]" src={SearchImage} alt="Search" />
        <SearchBox />
      </div>
    </div>
  );
};

export default SearchPage;
