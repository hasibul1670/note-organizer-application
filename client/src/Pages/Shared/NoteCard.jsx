/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPinFill } from "react-icons/bs";

import { LuPinOff } from "react-icons/lu";
import ReactModal from "react-modal";
import useCourses from "../../Hooks/useNotes";

import { toast } from "react-hot-toast";
import { CSSTransition } from "react-transition-group";
import { useDeleteNoteMutation } from "../../redux/features/note/noteApi";
const NoteCard = ({ course }) => {
  const {
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
  const [pinStatus, setPinStatus] = useState(pinNote);
  const { control, handleSubmit } = useForm();
  const [deleteNote] = useDeleteNoteMutation();

  const handleCardClick = () => {
    setPopupVisible(true);
  };
  const handleCloseModal = () => {
    setPopupVisible(false);
  };
  const token = localStorage.getItem("token");

  const onSubmit = async (data) => {
    const apiUrl = "https://noteapp-amber.vercel.app/api/v1/note";
    const { title, noteDescription } = data;
    const itemId = _id;
    const payload = {
      title,
      noteDescription,
      bgColor,
      pinNote: pinStatus,
    };
    if (
      (title !== initialTitle) |
      ((noteDescription !== initialNoteDescription) |
        (bgColor !== initialBgColor) |
        (pinNote !== pinStatus))
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
  const handleClickPin = (e) => {
    e.preventDefault();
    setPinStatus(!pinStatus);
  };
  const handleDeleteNote = async (e) => {
    const result = await deleteNote(_id).unwrap();

    if (result?.statusCode === 200) {
      toast.success("Note deleted successfully");
      refetch();
    }
  };

  useEffect(() => {
    if (!isPopupVisible) {
      handleSubmit(onSubmit)();
    }
  }, [bgColor, isPopupVisible]);

  return (
    <>
      {pinNote && (
        <>
          <div
            onClick={handleCardClick}
            className="card w-64 border-solid border-1 border-sky-200 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 "
            style={{
              backgroundColor: bgColor,
            }}
          >
            <div className="card-body items-center text-center py-3">
              <h6 className="font-bold text-amber-800">{initialTitle}</h6>
              <p className="font-semibold text-sm text-cyan-950">
                {initialNoteDescription}
              </p>
              <p className="text-teal-700 font-bold text-xs">
                Category : {category}
              </p>
              <p className="text-pink-700 font-bold text-xs">{date}</p>
              <LuPinOff />
            </div>
          </div>
        </>
      )}

      {!pinNote && (
        <div
          onClick={handleCardClick}
          className="card w-64 border-solid border-1 border-sky-200 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 "
          style={{
            backgroundColor: bgColor,
          }}
        >
          <div className="card-body items-center text-center py-3">
            <h6 className="font-bold text-amber-800">{initialTitle}</h6>
            <p className="font-semibold text-sm text-cyan-950">
              {initialNoteDescription}
            </p>
            <p className="text-teal-700 font-bold text-xs">
              Category : {category}
            </p>
            <p className="text-pink-700 font-bold text-xs">{date}</p>
          </div>
        </div>
      )}

      {/* Popup Section */}
      <CSSTransition
        in={isPopupVisible}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <ReactModal
          isOpen={isPopupVisible}
          onRequestClose={handleCloseModal}
          contentLabel="Popup Modal"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-5  rounded-lg max-w-2xl "
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          style={{
            content: {
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: bgColor,
            },
          }}
        >
          <form onSubmit={() => handleSubmit(onSubmit)} className="max-w-2xl">
            <div className="mb-4 flex justify-between">
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
                    placeholder="Title"
                  />
                )}
              />

              {pinStatus ? (
                <button
                  className="tooltip tooltip-info ml-8 btn btn-sm btn-ghost capitalize"
                  onClick={handleClickPin}
                  data-tip="Unpin note"
                >
                  <LuPinOff />
                </button>
              ) : (
                <button
                  className="tooltip tooltip-info ml-8 btn btn-sm btn-ghost capitalize"
                  onClick={handleClickPin}
                  data-tip="Pin note"
                >
                  <BsFillPinFill />
                </button>
              )}
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
                    className="textarea textarea-bordered h-48 w-full"
                    placeholder="Write note..."
                  />
                )}
              />
            </div>
          </form>

          <div>
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                type="button"
                className={`btn btn-secondary  capitalize btn-sm mt-2`}
              >
                Save
              </button>
              <button
                className="tooltip tooltip-warning text-red-700  text-2xl ml-5 btn btn-sm btn-ghost capitalize"
                onClick={handleDeleteNote}
                data-tip="Delete note"
              >
                <AiOutlineDelete />
              </button>
            </div>

            <div className="mt-4 bg-cyan-950 p-2 rounded-lg">
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
                  className="mr-3"
                  style={{
                    backgroundColor: color,
                    borderRadius: "9999px",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={() => handleColorSelection(color)}
                ></button>
              ))}
            </div>
          </div>
        </ReactModal>
      </CSSTransition>
    </>
  );
};

export default NoteCard;
