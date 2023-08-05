import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AcademicEnrichment from "../Pages/Courses/AcademicEnrichment";
import Art from "../Pages/Courses/Art";
import CategoryCard from "../Pages/Courses/CategoryCard";
import LifeSkill from "../Pages/Courses/LifeSkill";
import SingleCourseCard from "../Pages/Courses/SingleCourseCard";
import SportFitness from "../Pages/Courses/SportFitness";
import AboutUs from "../Pages/FooterComponents/AboutUs";
import Blogs from "../Pages/FooterComponents/Blogs";
import ContactUs from "../Pages/FooterComponents/ContactUs";
import Event from "../Pages/FooterComponents/Event";
import News from "../Pages/FooterComponents/News";
import Specialized from "../Pages/Home/Specialized";
import InstructorCourses from "../Pages/Instructor/InstructorCourses";
import InstructorDetails from "../Pages/Instructor/InstructorDetails";
import InstructorList from "../Pages/Instructor/InstructorList";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";
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
        path: "/instructors",
        element: <InstructorList />,
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
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
