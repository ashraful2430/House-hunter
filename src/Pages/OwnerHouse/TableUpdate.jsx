import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import swal from "sweetalert";

const TableUpdate = ({ house, index, refetch }) => {
  const axiosPublic = useAxiosPublic();
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
    details,
    _id,
  } = house;
  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setValue("houseName", houseName);
    setValue("address", address);
    setValue("city", city);
    setValue("bedroom", bedroom);
    setValue("bathrooms", bathrooms);
    setValue("size", size);
    setValue("date", date);
    setValue("rent", rent);
    setValue("image", image);
    setValue("number", number);
    setValue("details", details);
  }, [
    houseName,
    address,
    city,
    bedroom,
    bathrooms,
    size,
    date,
    rent,
    image,
    number,
    details,
    setValue,
  ]);
  const onSubmit = async (data) => {
    const updatedInfo = {
      houseName: data.houseName,
      address: data.address,
      bathrooms: data.bathrooms,
      bedroom: data.bedroom,
      city: data.city,
      date: data.date,
      image: data.image,
      number: data.number,
      rent: data.rent,
      size: data.size,
      details: data.details,
    };
    const response = await axiosPublic.patch(`/rented/${_id}`, updatedInfo);
    if (response.data.modifiedCount > 0) {
      swal("Good job!", "You House Info updated successfully!", "success");
      document.getElementById(`${index}`).close();
      refetch();
    }
  };
  return (
    <>
      <button
        className=" "
        onClick={() => document.getElementById(`${index}`).showModal()}
      >
        <span className="lg:block">Update</span>
      </button>
      <dialog id={index} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="my-3 font-semibold">
              Please Provide the necessary informations.
            </h3>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center mb-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="text"
                  placeholder="House Name"
                  defaultValue={houseName}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("houseName", { required: true })}
                />
                {errors.houseName && (
                  <span className="text-red-500">House name is required</span>
                )}

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  House Name
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="text"
                  placeholder="House Address"
                  defaultValue={address}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  House Address
                </span>
              </label>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center mb-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="text"
                  placeholder="City Name"
                  defaultValue={city}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="text-red-500">Your email is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  City Name
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="number"
                  placeholder="Bedroom"
                  defaultValue={bedroom}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("bedroom", { required: true })}
                />
                {errors.bedroom && (
                  <span className="text-red-500">
                    Bedroom information is required
                  </span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Bedrooms
                </span>
              </label>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center mb-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="number"
                  placeholder="Bathrooms"
                  defaultValue={bathrooms}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("bathrooms", { required: true })}
                />
                {errors.bathrooms && (
                  <span className="text-red-500">
                    Bathroom info is required
                  </span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Bathrooms
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="text"
                  placeholder="Room size"
                  defaultValue={size}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("size", { required: true })}
                />
                {errors.size && (
                  <span className="text-red-500">Room Size is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Room size
                </span>
              </label>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center mb-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="date"
                  placeholder="date"
                  defaultValue={date}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-red-500">Date is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Availability Date
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="number"
                  placeholder="Rent"
                  defaultValue={rent}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("rent", { required: true })}
                />
                {errors.rent && (
                  <span className="text-red-500">Rent is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Rent Per Month
                </span>
              </label>
            </div>
            <div>
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1  flex-1">
                <input
                  type="text"
                  placeholder="Picture Link"
                  defaultValue={image}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Picture Link
                </span>
              </label>
            </div>
            <div className="my-2">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  focus-within:ring-1 focus-within:ring-blue-600 flex-1">
                <input
                  type="number"
                  placeholder="Number"
                  defaultValue={number}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("number", {
                    required: true,
                    pattern: /^(01)\d{9}$/,
                  })}
                />
                {errors.number && (
                  <span className="text-red-500">
                    Your number should be Bangladeshi
                  </span>
                )}
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Phone Number
                </span>
              </label>
            </div>
            <div>
              <div>
                <label
                  htmlFor="Description"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Description
                </label>

                <textarea
                  placeholder="Description"
                  defaultValue={details}
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  {...register("details", { required: true })}
                ></textarea>
                {errors.details && (
                  <span className="text-red-500">Detail is required</span>
                )}
              </div>
            </div>
            <div className="w-full mt-2">
              <button className="btn btn-outline btn-info w-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

TableUpdate.propTypes = {
  house: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default TableUpdate;
