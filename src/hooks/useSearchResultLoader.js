// get search data form context and create a function to fetch data using axios

import { useContext } from "react";
import { SearchDataContext } from "../contexts";
import { usePublicApi } from "./usePublicApi";
import { useQuery } from "@tanstack/react-query";

const useSearchResultsLoader = () => {
  // {
  //     "name": "Prime Heights",
  //     "location": "Rajshahi",
  //     "propertyType": "Apartment",
  //     "budget": "150"
  // }

  const api = usePublicApi();

  const { formData } = useContext(SearchDataContext);

  const { name, location, propertyType, budget } = formData;

  const {
    data = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchResults", formData],
    queryFn: () =>
      api
        .get(`products/search?name=${name}&location=${location}&propertyType=${propertyType}&budget=${budget}`)
        .then((res) => res.data),
  });

  return { data, isLoading, error };
};

export default useSearchResultsLoader;
