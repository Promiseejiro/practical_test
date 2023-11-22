import { MdFavorite } from "react-icons/md"

import "./favorite.css"
const Favourite= ()=>{
  return (<div className="favorite_container">
  <button className="favorite_icon">
  <MdFavorite/>
  </button>
  <div className="favorite_list_container">
  <ul>
  <li></li>
  </ul>
  </div>
  </div>
  )
}

export default Favourite