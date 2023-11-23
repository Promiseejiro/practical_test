import React,{useState,useEffect} from "react"

import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

import "./select.css";

const Select = ({ handleFetch }) => {
  const dropDownOptions=[
    "All",
    "Popular",
    "Regular"
    ]
  
  const [showDropdown,setShowDropDown]=useState(false);
  
  const handleDropDown=()=>{
    setShowDropDown(!showDropdown);
  }
  
  const chooseOptionHandler=()=>{
    //get the value
    setShowDropDown(false)
  }
  
  return (
    <div className="select_container">
      <fieldset>
        <legend>Filter by...</legend>
      <div className="drop_down_menu">
      <div className="drop_down_value" onClick={handleDropDown}>
      <span>All</span>
      {!showDropdown ? (      <IoIosArrowDown className="drop-down-icon"/>):(      <IoIosArrowUp className="drop-down-icon"/>)}
      </div>
      {showDropdown && (     <ul className="option_container">

{dropDownOptions.map((option,index)=>(
     <li key={index} onClick={chooseOptionHandler}>{option}</li>
))}
     </ul>)}
      </div> 
      </fieldset>
    </div>
  );
};

export default Select;
