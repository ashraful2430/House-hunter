import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useBookedCount = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);

  const { data: count = [], refetch } = useQuery({
    queryKey: ["count", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booked/count/${userEmail}`);
      return res.data;
    },
  });
  return [count, refetch];
};

export default useBookedCount;
