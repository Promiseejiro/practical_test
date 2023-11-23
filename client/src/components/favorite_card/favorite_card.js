import Button from "../button/button";
import "./favorite_card.css"

const Favorite_card=()=>{
  return (
    <li className="list_item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FZ4X2C66Fjv05H626i9w--ZQCAZ6F4p4gw&usqp=CAU"/>
  <div>
  <div><h5>Movie name</h5>
  <span className="fav_rating">Rating</span>
  </div>
       <Button
              label={"Remove"}
              icon={null}
              type={"gray"}
              size={"small"}
            />
  </div>
    </li>
    )
}

export default Favorite_card