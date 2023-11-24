import React, { useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import "./select.css";

const Select = ({ optionHandler }) => {
  const dropDownOptions = ["Popular", "Rated", "Now playing","Upcoming"];

  const [showDropdown, setShowDropDown] = useState(false);
  const [option, setOption] = useState("Popular");

  const handleDropDown = () => {
    setShowDropDown(!showDropdown);
  };

  const chooseOptionHandler = (e) => {
    //get the value
    setShowDropDown(false);
    setOption(e.currentTarget.textContent);
    optionHandler(e.currentTarget.textContent);
  };

  return (
    <div className="select_container">
      <fieldset>
        <legend>Filter by...</legend>
        <div className="drop_down_menu">
          <div className="drop_down_value" onClick={handleDropDown}>
            <span>{option}</span>
            {!showDropdown ? (
              <IoIosArrowDown className="drop-down-icon" />
            ) : (
              <IoIosArrowUp className="drop-down-icon" />
            )}
          </div>
          {showDropdown && (
            <ul className="option_container">
              {dropDownOptions.map((option, index) => (
                <li key={index} onClick={chooseOptionHandler}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default Select;
