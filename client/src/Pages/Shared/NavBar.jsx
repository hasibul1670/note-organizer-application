/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../../App";
import { AuthContext } from "../../Providers/AuthProvider";



const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const [loggInUser] = useContext(userDataContext);

  const name2 = loggInUser?.name?.firstName;

  const navOptions = (
    <>
      <li className=" ">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered h-10 w-32 md:w-auto"
          />
        </div>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  const email = localStorage.getItem("email");


  return (
    <div className="navbar  z-20  max-w-screen-2xl bg-gray-600	 ">
      <div className="navbar-start">

        <div className="dropdown ">
          {!isDropdownOpen ? (
            <label
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost  text-white  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  "
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
            </label>
          ) : (
            <label
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost  text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/1990/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          )}

          {isDropdownOpen && (
            <div>
              <ul
                tabIndex={0}
                className="menu menu-compact bg-black  dropdown-content mt-3 p-2 text-primary font-bold shadow  rounded-box w-52 z-50"
              >
                <div className="navbar-end">
                  {user?.email ? (
                    <>
                      <Link
                        to="/"
                        className="ml-3 font-bold text-sm text-white  mr-2 "
                      >
                        {name2 || "null"}
                      </Link>

                      <button
                        onClick={handleLogOut}
                        className="btn btn-sm btn-outline "
                      >
                        <span className="text-white text-xs">logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        {" "}
                        <button className="btn btn-sm btn-primary">
                          Sign In
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </ul>

            </div>
          )}
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
          Notes{" "}
        </Link>

      </div>

      <div className="navbar-end">
        {user?.email ? (
          <>
            <div className="navbar-center   lg:flex">
              <ul className="menu font-bold menu-horizontal   px-1 ">
                {navOptions}
              </ul>
            </div>
            <Link to="/" className=" font-bold hidden  lg:block text-sm text-white  mr-2 ">
              {name2 || "null"}
            </Link>

            <button onClick={handleLogOut} className="btn btn-sm btn-outline  hidden  lg:block">
              <span className="text-white text-xs">logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="btn btn-sm btn-primary">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
