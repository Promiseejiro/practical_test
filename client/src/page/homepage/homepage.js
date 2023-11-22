import React, { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Logo from "../../components/logo/logo";
import Favourite from "../../components/favorite/favorite";
import Search from "../../components/search/search";
import Select from "../../components/select/select";
import { MdSlowMotionVideo } from "react-icons/md";

import "./homepage.css";
import Cards from "../../components/movie_card/movie_cards";

const Homepage = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:8080/fetch`)
      .then((response) => response.json())
      .then((data) => {
        setData([data]);
        // alert(data);
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
        <h2>All movies</h2>
        <Cards />
      </div>
    </div>
  );
};

export default Homepage;
