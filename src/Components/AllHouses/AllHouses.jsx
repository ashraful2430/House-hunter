import useAllHouses from "../../Hooks/useAllHouses";
import AllHousesCard from "./AllHousesCard";

const AllHouses = () => {
  const [allHouses, isLoading] = useAllHouses();
  if (isLoading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-xl md:text-3xl font-medium">
        Loading....
      </p>
    );
  }
  return (
    <>
      {allHouses.length === 0 ? (
        <>
          <p className="text-center text-xl md:text-3xl font-medium min-h-screen flex items-center justify-center">
            There is no house for rent yet
          </p>
        </>
      ) : (
        <>
          <h3 className="text-center text-xl md:text-3xl my-5 font-medium">
            All Houses For Rents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mx-2">
            {allHouses.map((house) => (
              <AllHousesCard key={house._id} house={house}></AllHousesCard>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllHouses;
