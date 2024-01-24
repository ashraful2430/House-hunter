import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useUser from "../../Hooks/useUser";
import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import useBookedCount from "../../Hooks/useBookedCount";

const BookHouseModal = ({ house, index }) => {
  const navigate = useNavigate();
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
  const [users, isLoading] = useUser();

  const [count, refetch] = useBookedCount();

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("name", users.name);
    setValue("email", users.email);
    setValue("number", users.number);
  }, [users.name, users.email, users.number, setValue]);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-xl md:text-3xl font-medium">
        Loading....
      </p>
    );
  }

  const onSubmit = (data) => {
    if (users.role === "House Owner") {
      swal("Sorry!", "House Owner can not book houses", "error");
      document.getElementById(`${index}`).close();
      return;
    }
    if (count.count >= 2) {
      document.getElementById(`${index}`).close();
      swal(
        "Limit Exceeded",
        "You have reached the maximum booking limit",
        "error"
      );
      refetch();

      return;
    }
    const bookingInfo = {
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
      bookedUser: data.name,
      bookedEmail: data.email,
      bookedNumber: data.number,
    };

    axiosPublic.post("/booked", bookingInfo).then((res) => {
      if (res.data.insertedId) {
        swal("Thank You!", "You have booked successfully!", "success");
        document.getElementById(`${index}`).close();

        navigate("/dashboard/rented-house");
      }
    });
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mx-auto mb-5"
        onClick={() => document.getElementById(`${index}`).showModal()}
      >
        Book House
      </button>
      <dialog id={index} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="text"
                  readOnly
                  placeholder="Name"
                  defaultValue={users.name}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Name
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="email"
                  placeholder="Email"
                  readOnly
                  defaultValue={users.email}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="number"
                  placeholder="number"
                  readOnly
                  defaultValue={users.number}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("number", { required: true })}
                />
                {errors.number && (
                  <span className="text-red-500">Number is required</span>
                )}

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Number
                </span>
              </label>
            </div>
            <div className="w-full mt-2">
              <button className="btn btn-outline btn-info w-full">Book</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

BookHouseModal.propTypes = {
  house: PropTypes.object,
  index: PropTypes.number,
};

export default BookHouseModal;
