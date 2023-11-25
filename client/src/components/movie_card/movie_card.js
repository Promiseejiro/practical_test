import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
// import { base_uri } from "../../../utils/utils";

import "./movie_card.css";
const base_uri = "http://localhost:8080";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
const Card = ({ movie, addToFavourite }) => {
  const [clicked, setClicked] = useState(false);
  const [genre, setgenre] = useState([]);

  const clickedHandler = (movieId) => {
    setClicked(!clicked);
    addToFavourite(movieId);
  };

  const getGenre = () => {
    genres.map((gen) => {
      if (gen.id == 28) {
        const newgenre =[]
        setgenre([...genre, gen]);
      }
    });
  };

  useEffect(() => {
    //   console.log(getGenre());
    getGenre();
  }, []);

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
      {/* {genre.map((gen) => (
        <p>{gen.id}</p>
      ))} */}
    </div>
  );
};

export default Card;
