import { Link } from "react-router-dom";
import useBookedHouses from "../../Hooks/useBookedHouses";
import BookedHouses from "./BookedHouses";

const RenterProfile = () => {
  const [booked, isLoading] = useBookedHouses();

  if (isLoading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-xl md:text-3xl font-medium">
        Loading....
      </p>
    );
  }
  return (
    <div>
      {booked.length === 0 ? (
        <>
          <p className="text-center text-xl md:text-3xl font-medium min-h-screen flex items-center justify-center">
            You did not booked any house yet
          </p>
        </>
      ) : (
        <>
          <h3 className="text-center text-xl md:text-3xl font-semibold my-5">
            Houses you booked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mx-2">
            {booked.map((house) => (
              <BookedHouses key={house._id} house={house}></BookedHouses>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link to={"/dashboard/rented-house"}>
              <button className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  See All
                </span>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RenterProfile;
