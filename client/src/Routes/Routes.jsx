import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AcademicEnrichment from "../Pages/Courses/AcademicEnrichment";
import Art from "../Pages/Courses/Art";
import CategoryCard from "../Pages/Courses/CategoryCard";
import LifeSkill from "../Pages/Courses/LifeSkill";
import SingleCourseCard from "../Pages/Courses/SingleCourseCard";
import Specialized from "../Pages/Courses/Specialized";
import SportFitness from "../Pages/Courses/SportFitness";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AboutUs from "../Pages/FooterComponents/AboutUs";
import Blogs from "../Pages/FooterComponents/Blogs";
import ContactUs from "../Pages/FooterComponents/ContactUs";
import Event from "../Pages/FooterComponents/Event";
import News from "../Pages/FooterComponents/News";
import InstructorCourses from "../Pages/Instructor/InstructorCourses";
import InstructorDetails from "../Pages/Instructor/InstructorDetails";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
import AllProductPage from "../Pages/products/AllProductPage";
import Home from "./../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "courses",
        element: <CategoryCard></CategoryCard>,
      },
      {
        path: "courses/:id",
        element: <SingleCourseCard />,
      },
      {
        path: "/courses/lifeskills",
        element: <LifeSkill></LifeSkill>,
      },
      {
        path: "/courses/sports",
        element: <SportFitness></SportFitness>,
      },
      {
        path: "/courses/art",
        element: <Art />,
      },
      {
        path: "/courses/academic-enrichment",
        element: <AcademicEnrichment />,
      },
      {
        path: "/courses/specialized-interest",
        element: <Specialized />,
      },

      {
        path: "/products/category",
        element: <AllProductPage />,
      },
      {
        path: "/instructors/:id",
        element: <InstructorDetails />,
      },
      {
        path: "/courses/instructor/:id",
        element: <InstructorCourses />,
      },

      {
        path: "events",
        element: <Event></Event>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashboardhome",
        element: <DashboardHome></DashboardHome>,
      },
    ],
  },
  {
    path: "*", // Match any unrecognized path
    element: <NotFound></NotFound>, // Replace "NotFound" with your own component
  },
]);
