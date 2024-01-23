import MobileSidebar from "./MobileSidebar";
import { MdDashboard } from "react-icons/md";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useUser from "../../Hooks/useUser";
const DashSideBar = () => {
  const [users] = useUser();

  const links = (
    <>
      {users.role === "House Owner" ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100"
            }
            to={"/"}
          >
            <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100">
              <FaHouseChimneyWindow className="text-2xl" />
              <span className="mx-4 font-medium">Home</span>
            </a>
          </NavLink>
          <NavLink
            to={"owner-profile"}
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none"
            }
          >
            <a className="flex items-center px-4 py-2 mt-5 hover:bg-gray-100 ">
              <MdDashboard className="text-2xl" />

              <span className="mx-4 font-medium">Dashboard</span>
            </a>
          </NavLink>
          <NavLink
            to={"owner-house"}
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none hover:bg-slate-200"
            }
          >
            <a className="flex items-center px-4 py-2 mt-5  hover:bg-gray-100">
              <FaBuilding className="text-2xl" />

              <span className="mx-4 font-medium">Owned Houses</span>
            </a>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100"
            }
            to={"/"}
          >
            <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100">
              <FaHouseChimneyWindow className="text-2xl" />
              <span className="mx-4 font-medium">Home</span>
            </a>
          </NavLink>
          <NavLink
            to={"renter-profile"}
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none"
            }
          >
            <a className="flex items-center px-4 py-2 mt-5 hover:bg-gray-100 ">
              <MdDashboard className="text-2xl" />

              <span className="mx-4 font-medium">Dashboard</span>
            </a>
          </NavLink>
          <NavLink
            to={"rented-house"}
            className={({ isActive }) =>
              isActive
                ? " bg-gray-200 text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none hover:bg-slate-200"
            }
          >
            <a className="flex items-center px-4 py-2 mt-5  hover:bg-gray-100">
              <FaBuilding className="text-2xl" />

              <span className="mx-4 font-medium">Rented Houses</span>
            </a>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="hidden lg:block">
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 ">
          <div className="mx-auto">
            <p className="text-2xl font-semibold">House Hunter</p>
          </div>

          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              {users?.name}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              {users.email}
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>{links}</nav>
          </div>
        </aside>
      </div>
      <MobileSidebar />
    </>
  );
};

export default DashSideBar;
