/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { userDataContext } from "../../App";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineMenuFold } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useGetcartQuery } from "../../redux/features/cart/cartApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import CartSlider from "./CartSlider";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { course, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.classList.toggle("drawer-open");
  };

  const handleCartSliderClose = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove("drawer-open");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const [loggInUser] = useContext(userDataContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );
  const [isDarkMode, setDarkMode] = useState(false);

  const name2 = loggInUser?.name?.firstName;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const handleLogOut = () => {
    logOut();
  };

  const email = localStorage.getItem("email");
  const { data } = useGetcartQuery(email, {
    refetchOnMountOrArgChange: true,
  });

  const cartData = data?.data;

  return (
    <div className="navbar fixed z-20 px-20 max-w-screen-2xl bg-gray-600	 ">
      <div className="flex-1 text-white font-bold ">
       <span className="text-2xl"><AiOutlineMenuFold/> </span> 
        <Link to="/" className="btn btn-ghost normal-case ">E-Medicine</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        {user?.email ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/xCLffBL/ip.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>My Order</a>
                </li>
                <li>
                  <a>My Address</a>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-primary "
                  >
                    <span className="text-white text-xs">logout</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="drawer navbar-end drawer-end mr-5">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
                checked={isDrawerOpen}
                onChange={handleDrawerToggle}
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4">
                  <div className="badge badge-outline badge-primary">
                    <span className="text-xl">
                      <FaShoppingCart></FaShoppingCart>
                    </span>
                    <span>{cartData?.length || 0}</span>
                  </div>
                </label>
              </div>

              <div className="drawer-side ">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                <div className="menu bg-base-300 p-4 w-72 h-full  text-base-content">
                  <ul className="cart-slider-list">
                    <CartSlider onClose={handleCartSliderClose} />
                  </ul>
                </div>
              </div>
            </div>
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

// {user?.email ? (
//   <>
//     <div className="drawer navbar-end drawer-end mr-5">
//       <input
//         id="my-drawer-4"
//         type="checkbox"
//         className="drawer-toggle"
//         checked={isDrawerOpen}
//         onChange={handleDrawerToggle}
//       />
//       <div className="drawer-content">
//         <label htmlFor="my-drawer-4">
//           <div className="badge badge-outline badge-primary">
//             <span>
//               <FaShoppingCart></FaShoppingCart>
//             </span>
//             <span>{cartData?.length || 0}</span>
//           </div>
//         </label>
//       </div>

//       <div className="drawer-side ">
//         <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

//         <div className="menu bg-base-300 p-4 w-72 h-full  text-base-content">
//           <ul className="cart-slider-list">
//             <CartSlider onClose={handleCartSliderClose} />
//           </ul>
//         </div>
//       </div>
//     </div>

//     <Link to="/" className=" font-bold text-sm text-white  mr-2 ">
//       {name2 || "null"}
//     </Link>

//     <button onClick={handleLogOut} className="btn btn-sm btn-outline ">
//       <span className="text-white text-xs">logout</span>
//     </button>
//   </>
// ) : (
//   <>
//     <Link to="/login">
//       {" "}
//       <button className="btn btn-sm btn-primary">Sign In</button>
//     </Link>
//   </>
// )}
