import useIndividualRented from "../../Hooks/useIndividualRented";
import HouseTable from "./HouseTable";

const OwnerHouse = () => {
  const [rentedHouses, isLoading, refetch] = useIndividualRented();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <h3 className="text-center mt-5 font-medium text-xl md:text-3xl">
        Your all Rented Hose
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>House Name</th>
                <th>City</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {rentedHouses.map((house, index) => (
                <HouseTable
                  key={house._id}
                  index={index}
                  house={house}
                  refetch={refetch}
                ></HouseTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OwnerHouse;
