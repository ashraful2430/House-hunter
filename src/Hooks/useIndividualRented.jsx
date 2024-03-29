import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useIndividualRented = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);

  const {
    data: rentedHouses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["rent", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/rented/owner/${userEmail}`);
      return res.data;
    },
  });
  return [rentedHouses, isLoading, refetch];
};

export default useIndividualRented;
