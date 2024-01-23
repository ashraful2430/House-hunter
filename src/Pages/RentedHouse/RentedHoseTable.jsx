import PropTypes from "prop-types";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { RiDeleteBin6Fill } from "react-icons/ri";

const RentedHoseTable = ({ house, index, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { houseName, city, _id, rent } = house;

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPublic.delete(`/booked/${id}`).then((res) => {
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
        <td>{rent}$</td>
        <td onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Fill className=" text-center text-2xl text-red-500 ml-2 hover:cursor-pointer" />
        </td>
      </tr>
    </>
  );
};

RentedHoseTable.propTypes = {
  index: PropTypes.number,
  house: PropTypes.object,
  refetch: PropTypes.func,
};

export default RentedHoseTable;
