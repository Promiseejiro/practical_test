import express from "express";
import {
  fetch_movies,
  getGenre,
  searchMovie,
} from "../controller/controller.js";

const router = express.Router();

router.route("/fetch").get(fetch_movies);
router.route("/genre").get(getGenre);
router.route("/search").get(searchMovie);

export default router;
