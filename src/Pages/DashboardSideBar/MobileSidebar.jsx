import { MdDashboard } from "react-icons/md";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileSidebar = () => {
  const links = (
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
        <a className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <FaHouseChimneyWindow className="text-2xl" />
        </a>
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
        <a className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <MdDashboard className="text-2xl" />
        </a>
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
        <a className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <FaBuilding className="text-2xl" />
        </a>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="block lg:hidden">
        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
          <nav className="flex flex-col flex-1 space-y-6">
            <a>
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt=""
              />
            </a>
            {links}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default MobileSidebar;
