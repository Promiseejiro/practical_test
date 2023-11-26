import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Search from "../../components/search/search";
import Select from "../../components/select/select";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import base_url from "../../utils/utils";
import "./homepage.css";
import Cards from "../../components/movie_card/movie_cards";

const Homepage = () => {
  const [movies, setMovies] = useState([
    {
      original_title: "Trolls Band Together",
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      overview:
        "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite",
    },
  ]);
  const [category, setCategory] = useState("popular");
  const [search, setSearch] = useState("");
  const [screenPos, setScreenPos] = useState(0);
  const [page, setPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const fetchData = () => {
    if (!search) {
      fetch(`${base_url}/fetch?category=${category}&&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setMovies(data.results);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(`${base_url}/search?movie=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setMovies(data.results);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const optionHandler = (option) => {
    setSearch("");
    if (option === "popular") {
      setCategory("popular");
    }
    if (option === "Rated") {
      setCategory("top_rated");
    }
    if (option === "Now playing") {
      setCategory("now_playing");
    }
    if (option === "Upcoming") {
      setCategory("upcoming");
    }
  };

  const onChangeHandler = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (movies.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentMovie(currentMovie + 1);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [search, category, page]);
  return (
    <div className="homepage">
      <div
        className="haeder_container"
        style={{
          backgroundColor: `${scrollY > 50 ? "rgba(0,0,0,.5)" : "transparent"}`,
        }}
      >
        <Header />
        {scrollY < 50 && (
          <div className="filter_component">
            <Search onChangeHandler={onChangeHandler} />
            <Select optionHandler={optionHandler} />
          </div>
        )}
      </div>
      <div></div>
      {!search && (
        <div
          className="hero_container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[currentMovie].poster_path})`,
          }}
        >
          <div className="overlay">
            <div className="current_hero_movie_details">
              <h1 className="hero_movie_title">
                {movies[currentMovie].original_title}
              </h1>
              <p className="hero_movie_test">{movies[currentMovie].overview}</p>
              <Link to={`movie/${movies[currentMovie].id}`}>
                <Button label={"View"} type={"primary"} size={"medium"} />
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="body">
        <div className="body_header">
          {search ? (
            <h2 className="discover_header">Discover</h2>
          ) : (
            <h2>All movies</h2>
          )}
        </div>
        {movies && <Cards movies={movies} />}
        <Button
          label={"See More"}
          type="outline"
          size={"medium"}
          clickHandler={nextPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
