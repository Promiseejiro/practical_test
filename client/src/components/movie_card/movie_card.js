import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
// import { base_uri } from "../../../utils/utils";

import "./movie_card.css";
const base_uri = "http://localhost:8080";
const Card = ({ movie }) => {
  const [genreName, setgenreName] = useState([]);
  const [clicked, setClicked] = useState(true);
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const sort_genre = (all_genre_ids, movie_genre_ids) => {
    all_genre_ids.filter((genre) => {
      movie_genre_ids.map((movie_genre) => {
        if (genre.id == movie_genre) {
          setgenre({ ...genreName, genre });
        }
      });
    });

    // console.log(commonItems);
  };

  const get_genre = () => {
    console.log("this");
    fetch(`${base_uri}/genre`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        sort_genre(data, movie.genre_ids);
        // setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_genre();
  }, []);

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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
        <p className="date">{movie.release_date}</p>{" "}
        <span className="rating">
          4.5 <IoStar className="gold" />
        </span>
      </div>

      <h4>{movie.title}</h4>
    </div>
  );
};

export default Card;
