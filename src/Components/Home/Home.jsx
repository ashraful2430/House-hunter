import { useLoaderData } from "react-router-dom";
import AllHouses from "../AllHouses/AllHouses";
import Banner from "../Banner/Banner";

const Home = () => {
  const totalCount = useLoaderData();
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <AllHouses totalCount={totalCount} />
      </div>
    </>
  );
};

export default Home;
