import React from "react";
import "./button.css";

const Button = ({ label, type, icon, onClick, size }) => {
  return (
    <button className={`btn btn--primary  btn--${size} `} onClick={onClick}>
      <span className="button-icon">{icon}</span>
      <span className="button-text">{label}</span>
    </button>
  );
};

export default Button;
