/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "aos/dist/aos.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCourses from "../../Hooks/useNotes";

import LoadingSpinner from "../Shared/LoadingSpinner";
import NoteCard from "../Shared/NoteCard";

const NotePage = ({ filteredNotes }) => {
  const [courses, loading, refetch] = useCourses();

  if (!filteredNotes) {
    return <div>No Notes available.</div>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const pinnedNotes = filteredNotes.filter((course) => course.pinNote);
  const unpinnedNotes = filteredNotes.filter((course) => !course.pinNote);

  return (
    <div className="">
      <SectionTitle data-aos="fade-right" heading={"Your Notes"}></SectionTitle>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {pinnedNotes.map((course) => (
            <NoteCard key={course._id} course={course}></NoteCard>
          ))}

          {/* Render unpinned notes */}
          {unpinnedNotes.map((course) => (
            <NoteCard key={course._id} course={course}></NoteCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotePage;
