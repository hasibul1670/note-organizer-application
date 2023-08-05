/* eslint-disable react/prop-types */

const Popup = ({ course, onClose }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">{course.title}</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default Popup;
