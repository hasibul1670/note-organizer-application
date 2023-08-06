

const TakeNote = () => {
  return (
    <div className="flex justify-center">
      <button
        className="btn  btn-primary "
        onClick={() => window.my_modal_2.showModal()}
      >
        Add a Note
      </button>
      <dialog id="my_modal_2" className=" modal">
        <form method="dialog" className=" modal-box">
     
          <input type="text" placeholder="Title" className="input input-ghost w-full max-w-xs mb-2" />
       

 
          <textarea
            placeholder="Take a note..."
            className="textarea textarea-bordered a textarea-info textarea-lg w-full max-w-xs"
          ></textarea>
             <button  className="btn ml-5  btn-xs capitalize">close</button>
        </form>
     
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default TakeNote;
