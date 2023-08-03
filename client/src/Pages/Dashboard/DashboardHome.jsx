import { useState } from "react";
import AllUsers from "./AllUsers";
import Assignments from "./Assignments";
import Calendar from "./Calendar";
import DiscussionForum from "./DiscussionForum";
import Enrollments from "./Enrollments";
import EntrolledCourses from "./EntrolledCourses";
import HelpSupport from "./HelpSupport";
import Profile from "./Profile";
import Resources from "./Resources";
import SelectedCourses from "./SelectedCourses";
import SideBar from "./SideBar";

const DashboardHome = () => {
  const [activeMenu, setActiveMenu] = useState("selectedCourses");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  let mainContent;
  let headerContent;

  if (activeMenu === "enrolled") {
    mainContent = <EntrolledCourses />;
    headerContent = "My Courses";
  } else if (activeMenu === "selectedCourses") {
    mainContent = <SelectedCourses />;
    headerContent = "Selected Courses";
  } else if (activeMenu === "Resources") {
    mainContent = <Resources />;
    headerContent = "Resources";
  } else if (activeMenu === "Calendar") {
    mainContent = <Calendar />;
    headerContent = "Calendar";
  } else if (activeMenu === "DiscussionForum") {
    mainContent = <DiscussionForum />;
    headerContent = "Discussion Forum ";
  } else if (activeMenu === "Profile") {
    mainContent = <Profile />;
    headerContent = "Your Profile";
  } else if (activeMenu === "HelpSupport") {
    mainContent = <HelpSupport />;
    headerContent = "Help/Support Center";
  } else if (activeMenu === "Assignments") {
    mainContent = <Assignments />;
    headerContent = "Assignments";
  } else if (activeMenu === "AllUsers") {
    mainContent = <AllUsers />;
    headerContent = "All Users Students/Instructors";
  } else if (activeMenu === "Enrollments") {
    mainContent = <Enrollments />;
    headerContent = "Enrollments";
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
