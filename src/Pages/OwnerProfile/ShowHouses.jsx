import PropTypes from "prop-types";

const ShowHouses = ({ house }) => {
  const {
    houseName,
    address,
    bathrooms,
    bedroom,
    city,
    date,
    image,
    number,
    rent,
    size,
    ownerName,
    details,
  } = house;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="House" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{houseName}</h2>
          <div className="flex flex-col md:flex-row  items-center">
            <p className="flex-1">
              {" "}
              <strong>City</strong> - {city}{" "}
            </p>
            <p className="flex-1">
              <strong>Address</strong>- {address}{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            <p className="flex-1">
              <strong>Bedroom</strong>- {bedroom}
            </p>
            <p className="flex-1">
              <strong>Bathrooms</strong>- {bathrooms}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            <p className="flex-1">
              <strong>Size</strong>- {size} Sq.Feat
            </p>
            <p className="flex-1">
              <strong>Rent</strong>- {rent}$
            </p>
          </div>
          <p>
            <strong>Availability Date</strong>- {date}
          </p>

          <div className="">
            <p className="">
              <strong>Owner Name</strong>- {ownerName}
            </p>
            <p className="">
              <strong>Number</strong>- {number}
            </p>
          </div>
          <p>{details}</p>
        </div>
      </div>
    </>
  );
};

ShowHouses.propTypes = {
  house: PropTypes.object,
};

export default ShowHouses;
