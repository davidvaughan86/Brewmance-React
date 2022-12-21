import React from "react";
import Map from "./Map";

const Info = () => {
  return (
    <div className="info-style">
      <div className="locateContainer">
        <div className="top">
          <nav>
            <a href="/main">Main</a>
            <a href="/recipe">Recipe</a>

            <a href="/locate">Info</a>
          </nav>
          <h1>INTERESTING FACTS ABOUT COFFEE YOU DIDN'T KNOW</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul>
            <li>
              <h4>1. Coffee has been around since 800 A.D.</h4>
            </li>
            <li>
              <h4>2. Technically, coffee beans are seeds</h4>
            </li>
            <li>
              <h4>3. Brazil is the world's largest coffee producer</h4>
            </li>
            <li>
              <h4>4. Several people have attempted to outlaw coffee</h4>
            </li>
            <li>
              <h4>5. Coffee drinkers live longer than non-coffee users</h4>
            </li>
          </ul>
          <h3 id="too-large">Your screen is too large to display the map</h3>
          <h3 id="not-too-large">
            Click the Map Marker for more information about Coffee
          </h3>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Info;
