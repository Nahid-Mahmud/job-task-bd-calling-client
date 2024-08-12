import { useQuery } from "@tanstack/react-query";
import { usePublicApi } from "./usePublicApi";

const useGetProductByTagOrAge = (tag) => {
  const api = usePublicApi();

  const {
    data = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tag&age", tag],
    queryFn: () => api.get(`products/tagOrAge?tagOrAge=${tag}`).then((res) => res.data),
  });

  return { data, isLoading, error };
};

export default useGetProductByTagOrAge;
