/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ activeMenu, onMenuClick }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleMenuItemClick = (menu) => {
    onMenuClick(menu);
    setDrawerOpen(false);
  };

  return (
    <div className="w-full">
     
      <label
        htmlFor="drawer-toggle"
        className="block lg:hidden bg-blue-800 text-white px-4 py-2 cursor-pointer"
      >
        Open Dashboard
      </label>
    
      <input
        type="checkbox"
        id="drawer-toggle"
        className="hidden"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div
        className={`${
          isDrawerOpen ? "block" : "hidden"
        } bg-gray-700 font-bold text-cyan-500 min-h-screen w-full lg:w-auto lg:block lg:relative`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                className={`block py-2 px-4  rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "selectedCourses" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("selectedCourses")}
              >
                <small className="">Selected Courses</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "enrolled" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("enrolled")}
              >
                <small className="">Enrolled Courses</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "Calendar" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("Calendar")}
              >
                <small className="">Academic Calendar</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "Resources" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("Resources")}
              >
                <small className="">Resources</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "DiscussionForum" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("DiscussionForum")}
              >
                <small className="">Discussion Forum</small>
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "HelpSupport" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("HelpSupport")}
              >
                <small className="">Help & Support</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "Profile" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("Profile")}
              >
                <small className="">Profile</small>
              </Link>
            </li>

            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "AllUsers" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("AllUsers")}
              >
                <small className="">AllUsers</small>
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "Assignments" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("Assignments")}
              >
                <small className="">Assignments</small>
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white  ${
                  activeMenu === "Enrollments" ? "bg-cyan-700 text-white"  : ""
                }`}
                onClick={() => handleMenuItemClick("Enrollments")}
              >
                <small className="">Enrollments</small>
              </Link>
            </li>


            <li>
              <Link
                to=""
                className={`block py-2 px-4 rounded hover:bg-cyan-500  hover:text-white ${
                  activeMenu === "settings" ? "bg-cyan-700 text-white" : ""
                }`}
                onClick={() => handleMenuItemClick("settings")}
              >
                    <small className="">Log Out</small>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
