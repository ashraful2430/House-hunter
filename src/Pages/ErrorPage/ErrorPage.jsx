import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Lottie
          className="w-72 md:w-[500px] lg:w-[600px]"
          animationData={error}
        ></Lottie>
        <Link to={"/"}>
          <button className="group relative inline-block text-sm font-medium text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            <span className="absolute inset-0 border border-current"></span>
            <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              Go Home
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
