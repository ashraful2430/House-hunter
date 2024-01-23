import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useIndividualRented = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);

  const { data: rentedHouses = [], isLoading } = useQuery({
    queryKey: ["rented", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/rented/${userEmail}`);
      return res.data;
    },
  });
  return [rentedHouses, isLoading];
};

export default useIndividualRented;
