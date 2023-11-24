import React, { useState, useEffect } from "react";
import "./movie_card.css";

import Card from "./movie_card";

const Cards = ({ movies }) => {
  const [favouriteMovie,setfavouriteMovie]=useState([]);
  
  const addToFavourite=(movieId)=>{
    movies.map((newMovie)=>{
      if(newMovie.id===movieId){
  setfavouriteMovie([newMovie,...favouriteMovie]);
  localStorage.setItem("favoriteMovie",favouriteMovie);
}else{
}
    })
  }
  
  
  useEffect(() => {
    const localMovie =JSON.parse(localStorage.getItem("favoriteMovie"))
    setfavouriteMovie([localMovie])
  }, []);
  return (
    <div className="card_container">
      {movies.map((movie, index) => (
        <div key={index}>
          <Card movie={movie}addToFavourite={addToFavourite} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
