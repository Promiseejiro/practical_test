import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import Favorite_card from "./favorite_card";
import Button from "../button/button";

import "./favorite_card.css";
const Favorite_cards = ({ hideFavoriteHandler }) => {
  const [favoriteMovies, setFavouriteMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cleared, setCleared] = useState(false);

  const closeHandler = () => {
    setShowModal(!showModal);
  };

  const clearHandler = () => {
    localStorage.setItem("favoriteMovie", JSON.stringify([]));
    closeHandler();
    setCleared(true);
    hideFavoriteHandler();
    setTimeout(() => {
      setCleared(false);
    }, 2000);
  };

  const removeMovie = (id) => {
    const newMovies = favoriteMovies.filter((movie) => movie.id !== id);
    setFavouriteMovie(newMovies);
    localStorage.setItem("favoriteMovie", JSON.stringify(newMovies));
  };

  useEffect(() => {
    const localFavMovies = localStorage.getItem("favoriteMovie");
    if (localFavMovies) {
      setFavouriteMovie(JSON.parse(localFavMovies));
    } else {
      setFavouriteMovie([]);
    }
  }, []);

  return (
    <div>
      <ul>
        {favoriteMovies.map((movie, index) => (
          <div key={index}>
            <Favorite_card movie={movie} removeMovie={removeMovie} />
          </div>
        ))}
      </ul>

      <div className="fav_btn_container">
        {favoriteMovies.length > 0 ? (
          <Button
            label={"Clear favourite"}
            icon={null}
            type={"primary"}
            size={"medium"}
            clickHandler={closeHandler}
          />
        ) : (
          <p>No favorite</p>
        )}
      </div>

      {showModal && (
        <Modal clearHandler={clearHandler} closeHandler={closeHandler} />
      )}
      {cleared && <p className="cleared_alert">Favorite cleared</p>}
    </div>
  );
};

export default Favorite_cards;
