import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";

const Navbar = () => {
  const { user, logout } = useAuth();
  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  const [users] = useUser();

  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " bg-none text-blue-500 font-bold"
              : "hover:text-blue-400 transition duration-300 delay-100"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " bg-none text-blue-500 font-bold"
              : "hover:text-blue-400 transition duration-300 delay-100"
          }
          to={"/reviews"}
        >
          Reviews
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className=" bg-base-100 shadow-lg">
        <div className="navbar max-w-[1200px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] px-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">House Hunter</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end z-50 text-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL ? user?.photoURL : defaultPhoto} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none">
                      {user?.displayName}
                    </button>
                  </li>

                  <li>
                    {users.role === "House Owner" ? (
                      <>
                        {" "}
                        <Link
                          className="  mx-auto"
                          to={"dashboard/owner-profile"}
                        >
                          <button className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none">
                            Dashboard
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          className="  mx-auto"
                          to={"dashboard/renter-profile"}
                        >
                          <button className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none">
                            Dashboard
                          </button>
                        </Link>
                      </>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm text-red-500  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
