import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./CSS/images/coffee.svg";

const Recipes = () => {
  const [displayed, setDisplayed] = useState(true);
  const cycle = (event) => {
    setDisplayed((current) => !current);
  };
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7777")
      .then((data) => data.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(recipes);

  const recipePic = recipes.map((recipes) => {
    return recipes.image;
  });
  console.log(recipePic);

  const recipeTitle = recipes.map((recipes) => {
    return recipes.title;
  });
  console.log(recipeTitle);

  const recipeInfo = recipes.map((recipes) => {
    return (
      recipes.missedIngredients[0].original +
      ", also " +
      recipes.usedIngredients[0].original
    );
  });
  console.log(recipeInfo);
  recipePic.forEach((recipePic) => {
    const recipeDisplay = document.getElementById("recipePic");
    const img = document.createElement("img");
    img.src = recipePic;
    recipeDisplay.insertBefore(img, recipeDisplay.children[0]);
    // img.style.display = "none";
  });

  recipeTitle.forEach((recipeTitle) => {
    const recipeTitleDisplay = document.getElementById("recipeTitle");
    const h1 = document.createElement("h1");
    h1.innerHTML = recipeTitle;
    recipeTitleDisplay.insertBefore(h1, recipeTitleDisplay.children[0]);
    // h1.style.display = "none";
  });

  recipeInfo.forEach((recipeInfo) => {
    const recipeInfoDisplay = document.getElementById("recipeInfo");
    const h5_1 = document.createElement("h2");
    h5_1.innerHTML = recipeInfo;
    recipeInfoDisplay.insertBefore(h5_1, recipeInfoDisplay.children[0]);
    // h5_1.style.display = "none";
  });

  const titles = document.getElementsByTagName("h1");
  const info = document.getElementsByTagName("h2");
  const nextBtn = document.getElementById("nextRecipe");
  const recipe = document.getElementsByTagName("img");
  const recipeDisplay = document.getElementById("recipePic");
  const recipeInfoDisplay = document.getElementById("recipeInfo");
  const recipeTitleDisplay = document.getElementById("recipeTitle");
  const recipeInfoWindow = document.getElementById("recipeInfoWindow");

  // const adjective = document.getElementById("adjectives");
  // const adjectives = [
  //   "😍😍😍",
  //   "🤤🤤🤤",
  //   "😋😋😋",
  //   "Stunning",
  //   "Amazing",
  //   "Decadent",
  // ];

  let i = 0;
  let o = 0;
  let u = 0;
  function next() {
    // nextBtn.dangerouslySetInnerHTML = "Cycle Recipes";
    recipeDisplay.style.display = "flex";
    recipeInfoDisplay.style.display = "flex";
    recipeTitleDisplay.style.display = "flex";
    Array.from(recipe).forEach((recipe) => {
      recipe.className = "in-active";
    });
    Array.from(titles).forEach((title) => {
      title.className = "in-active";
    });
    Array.from(info).forEach((info) => {
      info.className = "in-active";
    });

    if ((i == 0) & (o == 0) & (u == 0)) {
      recipe[i].className = "active";
      info[o].className = "active";
      titles[u].className = "active";
    } else if (
      (i == recipe.length) &
      (o == info.length) &
      (u == titles.length)
    ) {
      recipe[i - 1].className = "in-active";
      recipe[0].className = "active";
      info[o - 1].className = "in-active";
      info[0].className = "active";
      titles[u - 1].className = "in-active";
      titles[0].className = "active";
      i = 0;
      o = 0;
      u = 0;
    } else {
      recipe[i - 1].className = "in-active";
      recipe[i].className = "active";
      info[o - 1].className = "in-active";
      info[o].className = "active";
      titles[u - 1].className = "in-active";
      titles[u].className = "active";
    }
    i++;
    o++;
    u++;
  }

  return (
    <div className="recipe-style">
      {/* <button onClick={cycle}>Start</button> */}
      <div id="btns">
        <button onClick={next} id="getRecipe">
          <Logo /> BREW
        </button>
      </div>
      <div className="recipeWindow">
        <h3 id="adjectives"></h3>

        <div id="recipePic" style={{ display: displayed ? "none" : "flex" }}>
          {recipes.map((recipes) => {
            <img src={recipes.image} className="in-active"></img>;
          })}
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="recipeInfoWindow">
          <div
            id="recipeTitle"
            style={{ display: displayed ? "none" : "flex" }}
          >
            {recipes.map((recipes) => (
              <h1 className="in-active">{recipes.title}</h1>
            ))}
          </div>
          <br />
          <br />
          <div id="recipeInfo" style={{ display: displayed ? "none" : "flex" }}>
            {recipeInfo.map((recipeInfo) => (
              <h2 className="in-active">{recipeInfo}</h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
