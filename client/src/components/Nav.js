import React from "react";

const Nav = () => {
  return (
    <div>
      <div>
        <nav
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            backgroundImage: "linear-gradient(to right, #F2A65A , #772F1A)",
          }}
        >
          <a href="/main">Main</a>
          <a href="/recipes">Recipe</a>
          <a href="/locate">Info</a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
