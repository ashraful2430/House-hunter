import PropTypes from "prop-types";
import { RiDeleteBin6Fill } from "react-icons/ri";
import TableUpdate from "./TableUpdate";

const HouseTable = ({ house, index }) => {
  const { houseName, city } = house;
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{houseName}</td>
        <td>{city}</td>
        <td>
          <TableUpdate index={index} house={house}></TableUpdate>
        </td>
        <td>
          <RiDeleteBin6Fill className=" text-center text-2xl text-red-500 ml-2 hover:cursor-pointer" />
        </td>
      </tr>
    </>
  );
};

HouseTable.propTypes = {
  index: PropTypes.number,
  house: PropTypes.object,
};

export default HouseTable;
