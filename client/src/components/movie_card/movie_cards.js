import React, { useState, useEffect } from "react";
import "./movie_card.css";

import Card from "./movie_card";

const Cards = ({ movies }) => {
  useEffect(() => {}, []);
  return (
    <div className="card_container">
      {movies.map((movie, index) => (
        <div key={index}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
