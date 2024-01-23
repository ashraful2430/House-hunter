import { useState } from "react";
import useAllHouses from "../../Hooks/useAllHouses";
import AllHousesCard from "./AllHousesCard";
import PropTypes from "prop-types";
const AllHouses = ({ totalCount }) => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const count = totalCount.count;
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const [allHouses, isLoading] = useAllHouses(currentPage, itemPerPage);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-xl md:text-3xl font-medium">
        Loading....
      </p>
    );
  }
  const handleItemPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
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
            {allHouses.map((house, index) => (
              <AllHousesCard
                key={house._id}
                house={house}
                index={index}
              ></AllHousesCard>
            ))}
          </div>
          <div className="text-center mt-20 ">
            <button
              onClick={handlePrevPage}
              className="btn btn-square bg-blue-500 text-white"
            >
              Prev
            </button>
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-square ml-2 text-white ${
                  currentPage === page ? "bg-purple-500" : "bg-blue-500"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="btn btn-square ml-2 bg-blue-500 text-white"
            >
              Next
            </button>
            <select
              className="ml-4 border-2 py-3 px-1 rounded-lg"
              defaultValue={itemPerPage}
              onChange={handleItemPerPage}
              name=""
              id=""
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

AllHouses.propTypes = {
  totalCount: PropTypes.object,
};

export default AllHouses;
