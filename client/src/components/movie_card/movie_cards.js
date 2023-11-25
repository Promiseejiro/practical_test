import React, { useState, useEffect } from "react";

import "./movie_card.css";

import Card from "./movie_card";

const Cards = ({ movies }) => {
  
  const [favouriteMovie, setfavouriteMovie] = useState([]);

  const addToFavourite = (movieId) => {
    
    movies.map((newMovie) => {
      if (newMovie.id === movieId) {
        const newfavMovies = [...favouriteMovie, newMovie];
        setfavouriteMovie(newfavMovies);
        localStorage.setItem("favoriteMovie", JSON.stringify(newfavMovies));
      } else {
      }
    });
  };

  useEffect(() => {
    var localFavMovies = localStorage.getItem("favoriteMovie");
    if (localFavMovies) {
      setfavouriteMovie(JSON.parse(localFavMovies));
    } else {
      setfavouriteMovie([]);
    }
  }, []);

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
