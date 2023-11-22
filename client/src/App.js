import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./page/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/path" element={<Homepage />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
