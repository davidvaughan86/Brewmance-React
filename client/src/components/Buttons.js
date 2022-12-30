import React from "react";
import { ReactComponent as Logo } from "./CSS/images/coffee.svg";
import { useState, useEffect } from "react";

const Buttons = (props) => {
  return (
    <div id="btns">
      <button onClick={cycle} id="getRecipe">
        <Logo /> BREW
      </button>
    </div>
  );
};

export default Buttons;
