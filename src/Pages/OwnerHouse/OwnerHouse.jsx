import useOwnerHouses from "../../Hooks/useOwnerHouses";
import HouseTable from "./HouseTable";

const OwnerHouse = () => {
  const [ownedHouse, isLoading, refetch] = useOwnerHouses();
  if (isLoading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-xl md:text-3xl font-medium">
        Loading....
      </p>
    );
  }
  return (
    <>
      {ownedHouse.length === 0 ? (
        <>
          <p className="text-center text-xl md:text-3xl font-medium min-h-screen flex items-center justify-center">
            You did not add any house for rent yet
          </p>
        </>
      ) : (
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
                  {ownedHouse.map((house, index) => (
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
      )}
    </>
  );
};

export default OwnerHouse;
