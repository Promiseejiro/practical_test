import express from "express";
import fetch_movies from "../controller/controller.js";

const router = express.Router();

router.route("/fetch").get(fetch_movies);

export default router;
