import React from "react";
import "./button.css";

const Button = ({ label, type, icon, clickHandler, size }) => {
  return (
    <button
      className={`btn btn--${type}  btn--${size} `}
      onClick={clickHandler}
    >
      <span className="button-icon">{icon}</span>
      {label}
    </button>
  );
};

export default Button;
