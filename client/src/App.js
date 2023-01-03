import React from "react";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Recipes from "./components/Recipes";
import Info from "./components/Info";
import "./components/CSS/Main.css";
import "./components/CSS/Hero.css";
import "./components/CSS/Recipe.css";
import "./components/CSS/Info.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/main" element={<Main />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
