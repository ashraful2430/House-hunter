import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

import { useEffect, useState } from "react";

const useUser = () => {
  const [userEmail, setUserEmail] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem("user"));
    if (localUserInfo) {
      setUserEmail(localUserInfo.email);
    }
  }, []);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", userEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${userEmail}`);
      return res.data;
    },
  });
  return [users, isLoading, refetch];
};

export default useUser;
