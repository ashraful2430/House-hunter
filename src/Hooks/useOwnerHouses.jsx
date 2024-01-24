import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useOwnerHouses = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);
  const {
    data: ownedHouse = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ownedHouse", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/rented/owner/${userEmail}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [ownedHouse, isLoading, refetch];
};

export default useOwnerHouses;
