/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Popup from "./Popup";
const CourseCard = ({ course }) => {
  const { id, title, startMonth, endMonth, year } = course;

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCardClick = async () => {
    await setPopupVisible(true);
    await window.my_modal_2.showModal();
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  console.log("Hello", isPopupVisible);
  return (
    <>
      <div
        onClick={() => handleCardClick()}
        className="card w-64 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <div className="card-body items-center text-center py-3">
          <h6 className="text-cyan-400 ">Course Id : {id}</h6>
          <h6 className="font-bold  ">{title}</h6>
          <h6 className="text-cyan-400 ">
            {startMonth} to {endMonth} -{year}{" "}
          </h6>

          <p>$45.95</p>
        </div>
      </div>

      {isPopupVisible && <Popup course={course} isPopupVisible={isPopupVisible} onClose={handlePopupClose} />}
    </>
  );
};

export default CourseCard;
