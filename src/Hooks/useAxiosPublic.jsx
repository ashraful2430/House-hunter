import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://house-hunter-backend-pi.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
