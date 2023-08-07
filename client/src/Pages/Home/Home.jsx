/* eslint-disable no-unused-vars */
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import useCourses from "../../Hooks/useNotes";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

import PrivateRoute from "./../../Routes/PrivateRoute";
import NotePage from "./NotePage";
import TakeNote from "./TakeNote";

const Home = () => {
  const [courses, loading, refetch] = useCourses();
  const noteArray = courses?.data;

  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredNotes(noteArray); // Initially, set filteredNotes to all notes
  }, [noteArray]);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredNotes(noteArray); // Show all notes when search term is empty
    } else {
      const options = {
        keys: ["title", "category", "noteDescription"],
        threshold: 0.3,
      };
      const fuse = new Fuse(noteArray, options);
      const filtered = fuse.search(searchTerm);
      setFilteredNotes(filtered.map((result) => result.item));
    }
  }, [searchTerm, noteArray]);

  return (
    <div className="mb-5">
      <NavBar onSearchChange={handleSearchChange} />
      <NotePage filteredNotes={filteredNotes} />
      <PrivateRoute>
        <TakeNote />{" "}
      </PrivateRoute>
      <Footer />
    </div>
  );
};

export default Home;
