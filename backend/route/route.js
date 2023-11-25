import express from "express";
import {
  fetch_movies,
  getGenre,
  searchMovie,
  getSingleMovie
} from "../controller/controller.js";

const router = express.Router();

router.route("/fetch").get(fetch_movies);
router.route("/search").get(searchMovie);
router.route("/movie/:movieId").get(getSingleMovie);

export default router;
