import React, { useState, useEffect } from "react";
import Button from "../button/button";
import { MdFavorite } from "react-icons/md";
import Favorite_cards from "../favorite_card/favorite_cards.js";

import "./favorite.css";
import Modal from "../modal/modal.js";
const Favourite = () => {
  const [favoriteMovies,setFavouriteMovie]=useState([]);
  const [showFavContainer, setShowFavContainer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showFavHandler = () => {
    setShowFavContainer(!showFavContainer);
  };

  const closeHandler = () => {
    setShowFavContainer(false);
    setShowModal(!showModal);
  };

  const clearHandler = () => {
    //logic to clear loca storage
    closeHandler();
  };
  
  useEffect(()=>{
    const localFavMovies=JSON.parse(localStorage.getItem("favoriteMovie"));
    setFavouriteMovie(localFavMovies);
  },[])

  return (
    <div className="favorite_container">
      <button className="favorite_nav" onClick={showFavHandler}>
        <MdFavorite />
      </button>
      {showFavContainer && (
        <div className="favorite_list_container">
          <h3>Favorite</h3>
          <Favorite_cards fav={favoriteMovies} />
          <div className="btn_container">
            <Button
              label={"Clear favourite"}
              icon={null}
              type={"primary"}
              size={"medium"}
              clickHandler={closeHandler}
            />
          </div>
        </div>
      )}

      {showModal && (
        <Modal clearHandler={clearHandler} closeHandler={closeHandler} />
      )}
      {<p className="cleared_alert">Favorite cleared</p>}
    </div>
  );
};

export default Favourite;
