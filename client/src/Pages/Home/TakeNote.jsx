/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiNotepad } from "react-icons/bi";
import useCourses from "../../Hooks/useCourses";
import { usePostNoteMutation } from "../../redux/features/note/noteApi";

const TakeNote = () => {
  const [courses, loading, refetch] = useCourses();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCardClick = () => {
    window.my_modal_2.showModal();
    setPopupVisible(true);
  };
  const handleCloseModal = () => {
    setPopupVisible(false);
  };

  const DropdownOptions = [
    "Personal Note",
    "Work Note",
    "Study Note",
    "Shopping Note",
  ];
  const [category, setCategory] = useState(DropdownOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [postNote] = usePostNoteMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCategoryChange = (data) => {
    setCategory(data.category);
  };

  const userID = localStorage.getItem("userId");

  const onSubmit = async (data) => {
    const options = {
      data: {
        title: data.title,
        noteDescription: data.noteDescription,
        category: category,
        userID: userID,
        bgColor: "#ffec99", 
      },
    };
    try {
      const result = await postNote(options).unwrap();
      const { statusCode, status } = result;

      if (statusCode === 200) {
        toast.success("Note Added Successfully");
        reset();
        refetch();
      }
      if (status === 409) {
        toast.error("This Note Already Exists");
      }
    } catch (error) {
      if (error.status === 409) {
        toast.error("This Note Already Exists");
      }
    }
  };

  useEffect(() => {
    if (!isPopupVisible) {
      handleSubmit(onSubmit)();
    }
  }, [category, isPopupVisible]);

  return (
    <div className="flex justify-center">
      <button
        className="btn capitalize  btn-primary "
        onClick={handleCardClick}
      >
        Add a Note{" "}
        <span className="text-xl">
          {" "}
          <BiNotepad />
        </span>
      </button>
      <dialog id="my_modal_2" className=" modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box w-11/12 bg-base-300 h-64 max-w-2xl"
        >
          <input
            type="text"
            placeholder="Title"
            className="input font-bold input-ghost w-96   mb-2"
            {...register("title", { required: true })}
          />
          <div className="dropdown ml-5 dropdown-hover">
            <p
              tabIndex={0}
              className="rounded p-1 capitalize btn-primary ml-1"
              onClick={toggleDropdown}
            >
              {category ? category : DropdownOptions[0]}
            </p>

            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2  shadow bg-base-100 rounded-box w-52"
              >
                {DropdownOptions.map((option, index) => (
                  <li key={index}>
                    <a
                      onClick={() => {
                        handleCategoryChange({ category: option });
                        toggleDropdown();
                      }}
                    >
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <textarea
            placeholder="Take a note..."
            className="textarea textarea-ghost w-96 "
            {...register("noteDescription", { required: true })}
          ></textarea>
          <button
            onClick={handleCloseModal}
            className="btn ml-5  btn-xs capitalize"
          >
            Save
          </button>
        </form>

        <form
          method="dialog"
          onClick={handleCloseModal}
          className="modal-backdrop"
        >
          <button>Save</button>
        </form>
      </dialog>
    </div>
  );
};

export default TakeNote;
