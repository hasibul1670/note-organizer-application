import { createBrowserRouter } from "react-router-dom";

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
        element: <SingleCourseCard/>,
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
        element: <InstructorDetails/>,
      },
      {
        path: "/courses/instructor/:id",
        element: <InstructorCourses/>,
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
