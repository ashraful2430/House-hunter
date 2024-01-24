import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        role: data.role,
        number: data.number,
      };

      const localInfo = { name: data.name, email: data.email };
      localStorage.setItem("user", JSON.stringify(localInfo));

      const response = await axiosPublic.post("/users", userInfo);

      if (response.data.insertedId) {
        swal("Good job!", "User logged in successfully!", "success");
        if (data.role === "House Owner") {
          navigate("/dashboard/owner-profile");
        } else {
          navigate("/dashboard/renter-profile");
        }
      } else {
        swal("Sorry!", "You have already registered", "error");
      }
    } catch (error) {
      // Show error message
      swal("Sorry!", "You have already registered", "error");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/SrNhcY8/24023256-realtor-02.jpg)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  House Hunter
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Unlock your dream home. Sign in to access exclusive house
                  rental listings and find your perfect space with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="name"
                      placeholder="Your name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        Your name is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email", { required: true })}
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        Your email is required
                      </span>
                    )}
                  </div>

                  <div className="mt-6 relative">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type={showPass ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /^(?=.*[A-Z])(?=.*\d).{6,20}$/,
                      })}
                      className="block  w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-400">
                        Password must be at least 6 characters.
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-400">
                        Password must have one uppercase and one number.
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-400">
                        Password must be under 20 characters.
                      </span>
                    )}
                    <p
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-9 right-3 hover:cursor-pointer"
                    >
                      {showPass ? "Show" : "Hide"}
                    </p>
                  </div>
                  <div className="">
                    <div>
                      <label className="label">
                        <span className="label-text">Roll</span>
                      </label>
                      <select
                        value={watch("role") || ""}
                        name="role"
                        {...register("role", { required: true })}
                        className="select select-bordered w-full"
                      >
                        <option value="" disabled>
                          Select Role
                        </option>
                        <option value="House Owner">House Owner</option>
                        <option value="House Renter">House Renter</option>
                      </select>
                      {errors.role && (
                        <span className="text-red-500">
                          Please choose a role
                        </span>
                      )}
                    </div>
                    <div>
                      <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-300">
                          Phone Number
                        </label>

                        <input
                          type="text"
                          {...register("number", {
                            required: true,
                            pattern: /^(01)\d{9}$/,
                          })}
                          placeholder="Phone Number"
                          className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                        {errors.number && (
                          <span className="text-red-500">
                            Your number is required and must be a valid
                            Bangladeshi number
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Already have an account yet?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Log In
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
