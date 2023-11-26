import React, { useState, useEffect } from "react";

import "./movie_card.css";
import Card from "./movie_card";

const Cards = ({ movies }) => {
  
  const addToFavourite = (movieId) => {
    const themovie = movies.filter((movie) => movie.id === movieId);
    var localFavMovies = localStorage.getItem("favoriteMovie");
    if (localFavMovies) {
      localFavMovies = JSON.parse(localStorage.getItem("favoriteMovie"));
      console.log(localFavMovies);
    } else {
      localFavMovies = [];
    }
    localFavMovies.push(themovie[0]);
    localStorage.setItem("favoriteMovie", JSON.stringify(localFavMovies));
  };

  useEffect(() => {}, []);

  return (
    <div className="card_container">
      {movies.map((movie, index) => (
        <div key={index}>
          <Card movie={movie} addToFavourite={addToFavourite} />
        </div>
      ))}

      {movies.legth < 1 && <p className="no_movie">No movie available</p>}
    </div>
  );
};

export default Cards;
