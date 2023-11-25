import React ,{useState} from "react"
import { MdFavorite } from "react-icons/md";

import "./favoriteBtn.css"

const FavoriteBtn=({addToFavourite})=>{
  
  const [clicked, setClicked] = useState(false);
  
  const clickedHandler = () => {
    setClicked(!clicked);
    addToFavourite();
  };
  return (
          <button
        className="favorite"
        style={{
          color: `${clicked ? "red" : ""}`,
        }}
        onClick={ clickedHandler}
      >
        <MdFavorite />
      </button>
    )
}

export default FavoriteBtn