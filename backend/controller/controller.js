import base_uri from "../util/base_url.js";
import fetch from "node-fetch";

const fetch_movies = async (req, res) => {
  const { category, page } = req.query;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["ACCESS_TOKEN"]}`,
    },
  };
  fetch(`${base_uri}/movie/${category}?language=en-US&page=${page}`, options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: "An error occured" });
    });
};

const searchMovie = async (req, res) => {
  const queryString = req.query.movie;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["ACCESS_TOKEN"]}`,
    },
  };

  fetch(
    `${base_uri}/search/movie?query=${queryString}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: "An error occured" });
    });
};

const getSingleMovie = (req, res) => {
  const movieId = req.params.movieId;
  console.log(req.params);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["ACCESS_TOKEN"]}`,
    },
  };
  fetch(`${base_uri}/movie/${movieId}?language=en-US`, options)
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.error("error:" + err));
};

export { fetch_movies, searchMovie, getSingleMovie };
