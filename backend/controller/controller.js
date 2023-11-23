import base_uri from "../util/base_url.js";

const fetch_movies = async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["ACCESS_TOKEN"]}`,
    },
  };
  fetch(`${base_uri}/movie/popular?language=en-US&page=1`, options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: "An error occured" });
    });
};

const getGenre = (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["ACCESS_TOKEN"]}`,
    },
  };
  fetch(`${base_uri}/genre/movie/list?language=en`, options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json(response.genres);
    })
    .catch((err) => {
      res.status(400).json({ message: "An error occured" });
    });
};

export { fetch_movies, getGenre };
