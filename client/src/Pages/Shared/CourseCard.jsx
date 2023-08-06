/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import useCourses from "../../Hooks/useCourses";
import LoadingSpinner from "./LoadingSpinner";

const CourseCard = ({ course }) => {
  const {
    handleRefetch,
    id,
    _id,
    title: initialTitle,
    noteDescription: initialNoteDescription,
    date,
    pinNote,
    category,
    bgColor: initialBgColor,
  } = course;
  const [courses, loading, refetch] = useCourses();
  const [bgColor, setBgColor] = useState(initialBgColor);
  const handleColorSelection = (color) => {
    setBgColor(color);
  };
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { control, handleSubmit } = useForm();
  const handleCardClick = () => {
    setPopupVisible(true);
  };
  const handleCloseModal = () => {
    setPopupVisible(false);
  };
  const token = localStorage.getItem("token");

  const onSubmit = async (data) => {
    const apiUrl = "http://localhost:4000/api/v1/note";
    const { title, noteDescription } = data;
    const itemId = _id;
    const payload = {
      title,
      noteDescription,
      bgColor,
    };
    if (
      (title !== initialTitle) |
      (noteDescription !== initialNoteDescription)
    ) {
      try {
        const response = await axios.patch(`${apiUrl}/${itemId}`, payload, {
          headers: {
            authorization: `${token}`,
          },
        });

        if (response.status === 200) {
          await refetch();
        }
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  };

  useEffect(() => {
    if (!isPopupVisible) {
      handleSubmit(onSubmit)();
    }
  }, [isPopupVisible]);

  if (loading) {
    <LoadingSpinner />;
  }
  return (
    <>
      <div
        onClick={handleCardClick}
        className="card w-64 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 "
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="card-body items-center text-center py-3">
          <h6 className="font-bold text-cyan-700">{initialTitle}</h6>
          <p className="font-semibold">{initialNoteDescription}</p>
          <p className="text-pink-700 font-bold text-xs">{category}</p>
          <p className="text-pink-700 font-bold text-xs">{date}</p>
        </div>
      </div>

      <ReactModal
        isOpen={isPopupVisible}
        onRequestClose={handleCloseModal}
        contentLabel="Popup Modal"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-5 border-gray-300 rounded-lg "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        style={{
          content: {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: bgColor,
          },
        }}
      >
        <form onSubmit={() => handleSubmit(onSubmit)} className="max-w-xs">
          <div className="mb-4">
            <Controller
              name="title"
              control={control}
              defaultValue={initialTitle}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="title"
                  className="input input-bordered w-full"
                  placeholder="Enter title"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="noteDescription"
              control={control}
              defaultValue={initialNoteDescription}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="noteDescription"
                  className="textarea textarea-bordered textarea-lg w-full"
                  placeholder="Enter note description"
                />
              )}
            />
          </div>
        </form>

        <div>
          <button
            onClick={handleCloseModal}
            type="button"
            className={`btn btn-secondary btn-sm mt-2`}
          >
            Close
          </button>

          <div className="mt-4 bg-sky-900 p-2 rounded-lg">
            {[
              "#ffffff",
              "#ffbebe",
              "#ffec99",
              "#c2f0c2",
              "#c2f0f0",
              "#f0e8c2",
              "#f0d4c2",
              "#f0c2e3",
              "#d2c2f0",
              "#c2e3f0",
            ].map((color) => (
              <button
                key={color}
                type="button"
                className="mr-2"
                style={{
                  backgroundColor: color,
                  borderRadius: "9999px", // Use a large value for circular shape
                  width: "40px", // Set the width as needed
                  height: "40px", // Set the height as needed
                }}
                onClick={() => handleColorSelection(color)}
              ></button>
            ))}
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CourseCard;
