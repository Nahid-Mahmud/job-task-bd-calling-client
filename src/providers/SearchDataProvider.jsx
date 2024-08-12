import { useState } from "react";
import { SearchDataContext } from "../contexts";

const SearchDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    searchQuery: "",
    location: "",
    propertyType: "",
    budget: "",
  });

  const contextValue = {
    formData,
    setFormData,
  };

  return <SearchDataContext.Provider value={contextValue}>{children}</SearchDataContext.Provider>;
};

export default SearchDataProvider;
