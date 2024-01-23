import PropTypes from "prop-types";
import { RiDeleteBin6Fill } from "react-icons/ri";
import TableUpdate from "./TableUpdate";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const HouseTable = ({ house, index, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { houseName, city, _id } = house;
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPublic.delete(`/rented/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            swal("Poof! Your House has been deleted!", {
              icon: "success",
            });
            refetch();
          }
        });
      } else {
        swal("Your House  is safe!");
      }
    });
  };
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{houseName}</td>
        <td>{city}</td>
        <td>
          <TableUpdate
            index={index}
            house={house}
            refetch={refetch}
          ></TableUpdate>
        </td>
        <td onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Fill className=" text-center text-2xl text-red-500 ml-2 hover:cursor-pointer" />
        </td>
      </tr>
    </>
  );
};

HouseTable.propTypes = {
  index: PropTypes.number,
  house: PropTypes.object,
  refetch: PropTypes.func,
};

export default HouseTable;
