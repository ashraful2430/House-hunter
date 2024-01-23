import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllHouses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allHouses = [], isLoading } = useQuery({
    queryKey: ["allHouses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/rented");
      return res.data;
    },
  });
  return [allHouses, isLoading];
};

export default useAllHouses;
