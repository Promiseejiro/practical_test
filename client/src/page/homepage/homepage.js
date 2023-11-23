import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Logo from "../../components/logo/logo";
import Favourite from "../../components/favorite/favorite";
import Search from "../../components/search/search";
import Select from "../../components/select/select";
import { MdSlowMotionVideo } from "react-icons/md";
// import {base_uri} from "../../../utils/utils";
import "./homepage.css";
import Cards from "../../components/movie_card/movie_cards";

const base_uri = "http://localhost:8080";
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch(`${base_uri}/fetch`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/*  <Button label={"movie"} icon={<RiMovieLine />} type={"primary"} size={"large"}/>
       */}
      <div
        className="hero_container"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FZ4X2C66Fjv05H626i9w--ZQCAZ6F4p4gw&usqp=CAU)`,
        }}
      >
        <div className="overlay">
          <header className="header">
            <Logo />
            <Favourite />
          </header>
          <div className="filter_component">
            <Search />
            <Select />
          </div>
          <div className="current_hero_movie_details">
            <h1 className="hero_movie_title">The creator</h1>
            <p className="hero_movie_test">
              A student and her photographer boyfriend visit an island off of
              Massachusetts to research a hotel supposedly haunted by a witch.
            </p>
            <Button
              label={"Watch"}
              icon={<MdSlowMotionVideo />}
              type={"primary"}
              size={"medium"}
            />
          </div>
        </div>
      </div>
      <div className="body">
      <div className="body_header">
        <h2 >All movies</h2>
        </div>
        {movies && <Cards movies={movies} />}
      </div>
    </div>
  );
};

export default Homepage;
