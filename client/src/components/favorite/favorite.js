import React,{useState,useEffect} from "react"
import Button from "../button/button";
import { MdFavorite } from "react-icons/md";
import Favorite_cards from "../favorite_card/favorite_cards.js"

import "./favorite.css";
const Favourite = () => {
  const [showFavContainer,setShowFavContainer]=useState(false)
  
  const showFavHandler=()=>{
    setShowFavContainer(!showFavContainer)
  }
  
  
  return (
    <div className="favorite_container">
      <button className="favorite_nav" onClick={showFavHandler}>
        <MdFavorite />
      </button>
      {showFavContainer &&(
      <div className="favorite_list_container">
      <h3>Favorite</h3>
     <Favorite_cards/>
     <div>
     
       <Button
              label={"Remove"}
              icon={null}
              type={"gray"}
              size={"small"}
            />
     
     </div>
      </div>
   ) }
    </div>
  );
};

export default Favourite;
