import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./SliderCategory";

import FAQ from "./FAQ";
import HomeCoursesCategory from "./HomeDisplayCourses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Sunlight Academy | Home</title>
      </Helmet>

      <Banner />

      <Category />

      <HomeCoursesCategory />

      <FAQ />
    </div>
  );
};

export default Home;
