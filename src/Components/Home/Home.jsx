import AllHouses from "../AllHouses/AllHouses";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <AllHouses />
      </div>
    </>
  );
};

export default Home;
