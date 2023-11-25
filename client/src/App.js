import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./page/homepage/homepage";
import MoviePage from "./page/movie_page/movie.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Homepage />}></Route>
           <Route path="/movie/:movieId" element={<MoviePage />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
