import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to={"/main"}>
        <button id="explore">Explore</button>
      </Link>
    </div>
  );
};

export default Button;
