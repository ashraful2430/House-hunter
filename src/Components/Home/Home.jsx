import { useLoaderData } from "react-router-dom";
import AllHouses from "../AllHouses/AllHouses";
import Banner from "../Banner/Banner";
import { useState } from "react";

const Home = () => {
  const totalCount = useLoaderData();
  const [search, setSearch] = useState("");
  const handleSearch = (searchText) => {
    setSearch(searchText);
    console.log(searchText);
  };
  return (
    <>
      <div>
        <Banner onSearch={handleSearch} />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <AllHouses search={search} totalCount={totalCount} />
      </div>
    </>
  );
};

export default Home;
