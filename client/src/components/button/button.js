import React from "react";
import "./button.css";

const Button = ({ label, type, icon, onClick, size }) => {
  return (
    <button className={`btn btn--${type}  btn--${size} `} onClick={onClick}>
      <span className="button-icon">{icon}</span>
      <span className="button-icon">{label}</span>

    </button>
  );
};

export default Button;
