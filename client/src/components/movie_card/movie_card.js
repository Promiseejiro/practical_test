import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

import "./movie_card.css";
const Card = () => {
  const [clicked, setClicked] = useState(true);
  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FZ4X2C66Fjv05H626i9w--ZQCAZ6F4p4gw&usqp=CAU" />
      <button
        style={{
          color: `${clicked ? "#3c11119" : "#fff"}`,
        }}
        className="favorite"
        onClick={clickHandler}
      >
        <MdFavorite />
      </button>
      <div className="rating_date_container">
        <p className="date">19-6-2023</p>{" "}
        <span className="rating">
          4.5 <IoStar className="gold" />
        </span>
      </div>

      <h4>Movie title</h4>
    </div>
  );
};

export default Card;
