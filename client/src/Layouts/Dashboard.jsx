import { Outlet } from "react-router-dom";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Dashboard = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <DashboardHome />
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
