import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteBtn from "../../components/favoriteBtn/favoriteBtn";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { FaArrowLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useParams } from "react-router-dom";
import base_url from "../../utils/utils";
import "./movie.css";
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const fetchMovie = () => {
    fetch(`${base_url}/movie/${movieId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFavourite = () => {
    var localFavMovies = localStorage.getItem("favoriteMovie");
    if (localFavMovies) {
      localFavMovies = JSON.parse(localStorage.getItem("favoriteMovie"));
      console.log(localFavMovies);
    } else {
      localFavMovies = [];
    }
    localFavMovies.push(movie);
    localStorage.setItem("favoriteMovie", JSON.stringify(localFavMovies));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie_page">
      <Header />
      <div className="btn_container">
        <Link to="../">
          <FaArrowLeft className="back_btn" />
        </Link>
      </div>
      {movie.genres && (
        <div>
          <div className="movie_container">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <FavoriteBtn addToFavourite={addToFavourite} />
          </div>

          <div className="movie_discription">
            <h2>{movie.original_title}</h2>
            <p>Release date: {movie.release_date}</p>
            <div className="ratin_container">
              <p>Rating </p> <span>{movie.vote_average}</span>
              <IoStar className="gold" />
            </div>
            <div className="genre">
              <span>Genre: </span>{" "}
              <ul className="movie_ul">
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MoviePage;
