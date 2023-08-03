import { useState } from "react";

import SideBar from "./SideBar";
import MyOrder from "./MyOrder";
import MyAddress from "./MyAddress";
import ProductRequest from "./ProductRequest";
import Profile from './Profile';

const DashboardHome = () => {
  const [activeMenu, setActiveMenu] = useState("selectedCourses");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  let mainContent;
  let headerContent;

  if (activeMenu === "myOrder") {
    mainContent = <MyOrder />;
    headerContent = "My Order";
  } else if (activeMenu === "myAddress") {
    mainContent = <MyAddress/>;
    headerContent = "My Address";
  } else if (activeMenu === "peoductRequest") {
    mainContent = <ProductRequest />;
    headerContent = "Product Request";
  } else if (activeMenu === "myProfile") {
    mainContent = <Profile />;
    headerContent = "My Profile";
  }

  return (
    <div className="flex py-20 flex-col lg:flex-row">
      <div className="h-screen lg:w-1/6 drawer-overlay overflow-y-auto">
        {/* Sidebar content goes here */}
        <SideBar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>

      <div className="bg-gray-200 flex-grow ">
        <header className="bg-blue-200 shadow-md p-4">
          <h1 className="text-blue-800 font-bold text-xl">{headerContent}</h1>
        </header>

        <main className="p-4">{mainContent}</main>
      </div>
    </div>
  );
};

export default DashboardHome;
