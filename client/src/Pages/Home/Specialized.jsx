/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCourses from "../../Hooks/useCourses";
import CourseCard from "../Shared/CourseCard";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Modal from "../Shared/Popup";

const Specialized = () => {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [courses, loading, refetch] = useCourses();
  const courseArray = courses?.data?.data;
 
  if (!courseArray) {
    return <div>No Notes available.</div>;
  }
 

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {

    return <LoadingSpinner/>
  }


    return (
      <div className="">
      <SectionTitle
        data-aos="fade-right"
        heading={"specialized Interest Courses"}
      ></SectionTitle>
      <div
        className="flex justify-center  container mx-auto mb-5    px-4"
      >


        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {courseArray.slice(5,8).map((course) => (
            <CourseCard key={course._id} course={course} 
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            selectedCourse={selectedCourse}
            >


            </CourseCard>
            
          ))}

        </div>
      </div>
    </div>
  );
};

export default Specialized;
