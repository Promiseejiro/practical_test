import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/button/button";
import Logo from "../../components/logo/logo";
import Footer from "../../components/footer/footer";
import Favourite from "../../components/favorite/favorite";
import Search from "../../components/search/search";
import Select from "../../components/select/select";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io"
// import {base_uri} from "../../../utils/utils";
import "./homepage.css";
import Cards from "../../components/movie_card/movie_cards";

const base_uri = "http://localhost:8080";
const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [search, setSearch] = useState("");
  const [screenPos, setScreenPos] = useState(0);
  const [page, setPage] = useState(1);
  const [currentMovie,setCurrentMovie]=useState(0);


  document.addEventListener("scroll", () => {
    const element = document.querySelector(".hero_container");
    setScreenPos(element.getBoundingClientRect().top);
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const fetchData = () => {
    if (!search) {
      fetch(`${base_uri}/fetch?category=${category}&&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.results);
          setMovies(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(`${base_uri}/search?movie=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
  const nextHandler=()=>{
        if(currentMovie < movies.length-1){
      setCurrentMovie(currentMovie +1)
    }else{
      setCurrentMovie(0)
    }
  }
  
  const prevHandler=()=>{
    if(currentMovie < 1){
      setCurrentMovie(currentMovie-1)
    } else {
      
  }}
  
  setInterval(()=>{
    if(currentMovie < movies.length-1){
      setCurrentMovie(currentMovie +1)
    }else{
      setCurrentMovie(0)
    }
  },5000);

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
    fetchData();
  }, [search, category, page]);
  return (
    <div>
      {/*  <Button label={"movie"} icon={<RiMovieLine />} type={"primary"} size={"large"}/>
       */}
      <div
        className="haeder_container"
        style={{
          backgroundColor: `${
            screenPos < -50 ? "rgba(0,0,0,.5)" : "transparent"
          }`,
        }}
      >
        <header className="header">
          <Logo />
          <Favourite />
        </header>
        {screenPos > -50 && (
          <div className="filter_component">
            <Search onChangeHandler={onChangeHandler} />
            <Select optionHandler={optionHandler} />
          </div>
        )}
      </div>
      {!search && (
        <div
          className="hero_container"
        /*  style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[1].poster_path})`,
          }}*/
        >
          <div className="overlay">
            <div className="current_hero_movie_details">
              <h1 className="hero_movie_title">The creator</h1>
              <p className="hero_movie_test">
                A student and her photographer boyfriend visit an island off of
                Massachusetts to research a hotel supposedly haunted by a witch.
              </p>
              <Button
                label={"View"}
                icon={<MdSlowMotionVideo />}
                type={"primary"}
                size={"medium"}
              />
            </div>
            
            <div className="control_container">
           <button onClick={prevHandler}><IoIosArrowBack/></button> 
           <button onClick={nextHandler}><IoIosArrowForward/></button> 
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
<Footer/>
    </div>
  );
};

export default Homepage;
