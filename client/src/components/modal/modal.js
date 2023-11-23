import { LiaTimesSolid } from "react-icons/lia";
import Button from "../button/button";

import "./modal.css";
const Modal = ({ clearHandler, closeHandler }) => {
  return (
    <div className="modal_container">
      <div>
        <button className="modal-icon" onClick={closeHandler}>
          <LiaTimesSolid />
        </button>
        <p>Are you sure your want to clear favourite ?</p>
        <div className="btn-container">
          <Button
            label={"Clear"}
            type="primary"
            icon={null}
            size={"medium"}
            clickHandler={clearHandler}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
