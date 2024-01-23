import { MdDashboard } from "react-icons/md";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const MobileSidebar = () => {
  const [users] = useUser();
  const links = (
    <>
      {users.role === "House Owner" ? (
        <>
          {/* home */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100"
            }
            to={"/"}
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <FaHouseChimneyWindow className="text-2xl" />
            </p>
          </NavLink>
          {/* dashboard */}
          <NavLink
            to={"owner-profile"}
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none"
            }
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <MdDashboard className="text-2xl" />
            </p>
          </NavLink>

          {/* houses */}
          <NavLink
            to={"owner-house"}
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none hover:bg-slate-200"
            }
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <FaBuilding className="text-2xl" />
            </p>
          </NavLink>
        </>
      ) : (
        <>
          {/* home */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100"
            }
            to={"/"}
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <FaHouseChimneyWindow className="text-2xl" />
            </p>
          </NavLink>
          {/* dashboard */}
          <NavLink
            to={"renter-profile"}
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none"
            }
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <MdDashboard className="text-2xl" />
            </p>
          </NavLink>

          {/* houses */}
          <NavLink
            to={"rented-house"}
            className={({ isActive }) =>
              isActive
                ? "  text-blue-500 font-bold"
                : "hover:text-blue-400 transition duration-300 delay-100 bg-none hover:bg-slate-200"
            }
          >
            <p className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <FaBuilding className="text-2xl" />
            </p>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="block lg:hidden">
        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
          <nav className="flex flex-col flex-1 space-y-6">
            <div>
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt=""
              />
            </div>
            {links}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default MobileSidebar;
