/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "aos/dist/aos.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import LoadingSpinner from "../Shared/LoadingSpinner";
import NoteCard from "../Shared/NoteCard";
import { useEffect, useState } from "react";

const NotePage = ({ filteredNotes ,isLoading }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = '';

    if (currentHour >= 0 && currentHour < 12) {
      newGreeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = 'Good Afternoon';
    } else {
      newGreeting = 'Good Evening';
    }

    setGreeting(newGreeting);
  }, []);



  if (!filteredNotes) {
    return <div>No Notes available.</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const pinnedNotes = filteredNotes.filter((course) => course.pinNote);
  const unpinnedNotes = filteredNotes.filter((course) => !course.pinNote);
const name = localStorage.getItem('name')
  return (
    <div className="">
      <SectionTitle data-aos="fade-right" heading={`${greeting}🙋‍♂️ ${name}, Your Notes`}>

      </SectionTitle>
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
