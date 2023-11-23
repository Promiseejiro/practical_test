import express from "express";
import { fetch_movies, getGenre } from "../controller/controller.js";

const router = express.Router();

router.route("/fetch").get(fetch_movies);
router.route("/genre").get(getGenre);

export default router;
