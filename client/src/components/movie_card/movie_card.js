import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import FavoriteBtn from "../favoriteBtn/favoriteBtn";
import { Link } from "react-router-dom";

import "./movie_card.css";

const Card = ({ movie, addToFavourite }) => {
  useEffect(() => {
  }, []);

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="image"
      />
      <FavoriteBtn
        addToFavourite={() => {
          addToFavourite(movie.id);
        }}
      />
      <div className="rating_date_container">
        <p className="date">{movie.release_date}</p>{" "}
        <span className="rating">
          {movie.vote_average} <IoStar className="gold" />
        </span>
      </div>
      <h4>{movie.title}</h4>

      <Link to={`movie/${movie.id}`}>View</Link>
    </div>
  );
};

export default Card;
