import Buttons from "./Buttons";

const Recipes = ({ title }) => {
  // const recipePic = props.map((props) => {
  //   return props.image;
  // });

  // const recipeTitle = props.map((props) => {
  //   return props.title;
  // });

  // const recipeInfo = props.map((props) => {
  //   return (
  //     props.missedIngredients[0].original +
  //     ", also" +
  //     props.usedIngredients[0].original
  //   );
  // });
  // recipePic.forEach((recipePic) => {
  //   const recipeDisplay = document.getElementById("recipePic");
  //   const img = document.createElement("img");
  //   img.src = recipePic;
  //   recipeDisplay.insertBefore(img, recipeDisplay.children[0]);
  //   recipeDisplay.style.display = "none";
  // });

  // recipeTitle.forEach((recipeTitle) => {
  //   const recipeTitleDisplay = document.getElementById("recipeTitle");
  //   const h1 = document.createElement("h1");
  //   h1.innerHTML = recipeTitle;
  //   recipeTitleDisplay.insertBefore(h1, recipeTitleDisplay.children[0]);
  //   recipeTitleDisplay.style.display = "none";
  // });

  // recipeInfo.forEach((recipeInfo) => {
  //   const recipeInfoDisplay = document.getElementById("recipeInfo");
  //   const h5_1 = document.createElement("h2");
  //   h5_1.innerHTML = recipeInfo;
  //   recipeInfoDisplay.insertBefore(h5_1, recipeInfoDisplay.children[0]);
  //   recipeInfoDisplay.style.display = "none";
  // });

  return (
    <div className="recipe-style">
      <Buttons />
      <div className="recipeWindow">
        <h3 id="adjectives"></h3>

        <div id="recipePic"></div>
        <br />
        <br />

        <div className="recipeInfoWindow">
          <div id="recipeTitle"></div>
          <br />

          <br />

          <div id="recipeInfo"></div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
