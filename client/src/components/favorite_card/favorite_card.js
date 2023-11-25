import Button from "../button/button";
import { IoStar } from "react-icons/io5";
import "./favorite_card.css";

const Favorite_card = ({ movie, removeMovie }) => {
  const findMovie = (id) => {
    console.log(id);
    removeMovie(id);
  };

  return (
    <li className="list_item">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <div>
        <div>
          <h5>{movie.original_title}</h5>
          <span className="fav_rating count">
            {movie.vote_average} <IoStar className="gold" />
          </span>
        </div>
        <Button
          label={"Remove"}
          icon={null}
          type={"gray"}
          size={"vsmall"}
          clickHandler={() => {
            findMovie(movie.id);
          }}
        />
      </div>
    </li>
  );
};

export default Favorite_card;
