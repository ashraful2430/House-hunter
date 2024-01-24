import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllHouses = (currentPage, itemPerPage, search) => {
  const axiosPublic = useAxiosPublic();
  const { data: allHouses = [], isLoading } = useQuery({
    queryKey: ["allHouses", currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/rented?page=${currentPage}&size=${itemPerPage}&search=${search}`
      );
      return res.data;
    },
  });
  return [allHouses, isLoading];
};

export default useAllHouses;
