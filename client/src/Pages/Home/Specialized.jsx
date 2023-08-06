/* eslint-disable no-unused-vars */
import "aos/dist/aos.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCourses from "../../Hooks/useCourses";
import CourseCard from "../Shared/CourseCard";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Specialized = () => {
  const [courses, loading, refetch] = useCourses();
  const noteArray = courses?.data;

  if (!noteArray) {
    return <div>No Notes available.</div>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }
  // Separate the pinned and unpinned notes
  const pinnedNotes = noteArray.filter((course) => course.pinNote);
  const unpinnedNotes = noteArray.filter((course) => !course.pinNote);

  return (
    <div className="">
      <SectionTitle data-aos="fade-right" heading={"Your Notes"}></SectionTitle>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
           {pinnedNotes.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}

          {/* Render unpinned notes */}
          {unpinnedNotes.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialized;
