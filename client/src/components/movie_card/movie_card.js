import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
// import { base_uri } from "../../../utils/utils";

import "./movie_card.css";
const base_uri = "http://localhost:8080";
const Card = ({ movie, addToFavourite }) => {
  const [clicked, setClicked] = useState(false);
  const [genreName, setgenreName] = useState([]);

  const clickedHandler = (movieId) => {
    setClicked(!clicked);
    addToFavourite(movieId);
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="image"
      />
      <button
        className="favorite"
        style={{
          color: `${clicked ? "red" : ""}`,
        }}
        onClick={() => {
          clickedHandler(movie.id);
        }}
      >
        <MdFavorite />
      </button>
      <div className="rating_date_container">
        <p className="date">{movie.release_date}</p>{" "}
        <span className="rating">
          {movie.vote_average} <IoStar className="gold" />
        </span>
      </div>

      <h4>{movie.title}</h4>
    </div>
  );
};

export default Card;
