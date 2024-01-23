import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useBookedHouses = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);

  const {
    data: booked = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booked", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booked/${userEmail}`);
      return res.data;
    },
  });
  return [booked, isLoading, refetch];
};

export default useBookedHouses;
