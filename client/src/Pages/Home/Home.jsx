import { Helmet } from "react-helmet-async";

import BabyCare from "./BabyCare";
import Banner from "./Banner";
import FiverAndPain from "./FiverAndPain";
import PetMedicine from "./PetMedicine";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title> E-Medicine | Home</title>
      </Helmet>
      <Banner />
      <p className="text-xl font-bold flex justify-center mt-5 mb-5">
        Our Products{" "}
      </p>
      <FiverAndPain />
      <BabyCare />
      <PetMedicine />
    </div>
  );
};

export default Home;
