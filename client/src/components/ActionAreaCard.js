import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ReactComponent as Logo } from "./CSS/images/coffee.svg";

export default function ActionAreaCard() {
  // const [displayed, setDisplayed] = useState(true);
  // const cycle = (event) => {
  //   setDisplayed((current) => !current);
  // };
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
      ", also" +
      recipes.usedIngredients[0].original
    );
  });
  console.log(recipeInfo);
  //   recipePic.forEach((recipePic) => {
  //     const recipeDisplay = document.getElementById("recipePic");
  //     const img = document.createElement("img");
  //     img.src = recipePic;
  //     recipeDisplay.insertBefore(img, recipeDisplay.children[0]);
  //   });

  //   recipeTitle.forEach((recipeTitle) => {
  //     const recipeTitleDisplay = document.getElementById("recipeTitle");
  //     const h1 = document.createElement("h1");
  //     h1.innerHTML = recipeTitle;
  //     recipeTitleDisplay.insertBefore(h1, recipeTitleDisplay.children[0]);
  //   });

  //   recipeInfo.forEach((recipeInfo) => {
  //     const recipeInfoDisplay = document.getElementById("recipeInfo");
  //     const h5_1 = document.createElement("h2");
  //     h5_1.innerHTML = recipeInfo;
  //     recipeInfoDisplay.insertBefore(h5_1, recipeInfoDisplay.children[0]);
  //   })

  const titles = document.getElementsByTagName("h1");
  const info = document.getElementsByTagName("h2");
  const nextBtn = document.getElementById("nextRecipe");
  const recipe = document.getElementsByTagName("img");
  const recipeDisplay = document.getElementById("recipePic");
  const recipeInfoDisplay = document.getElementById("recipeInfo");
  const recipeTitleDisplay = document.getElementById("recipeTitle");

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
    <div>
      <div id="btns">
        <button onClick={next} id="getRecipe">
          <Logo /> BREW
        </button>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            id="recipePic"
            component="img"
            height="140"
            image={recipePic.forEach((recipePic) => {
              const recipeDisplay = document.getElementById("recipePic");
              const img = document.createElement("img");
              img.src = recipePic;
              recipeDisplay.insertBefore(img, recipeDisplay.children[0]);
              // img.style.display = "none";
            })}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipeTitle.forEach((recipeTitle) => {
                const recipeTitleDisplay =
                  document.getElementById("recipeTitle");
                const h1 = document.createElement("h1");
                h1.innerHTML = recipeTitle;
                recipeTitleDisplay.insertBefore(
                  h1,
                  recipeTitleDisplay.children[0]
                );
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipeInfo.forEach((recipeInfo) => {
                const recipeInfoDisplay = document.getElementById("recipeInfo");
                const h5_1 = document.createElement("h2");
                h5_1.innerHTML = recipeInfo;
                recipeInfoDisplay.insertBefore(
                  h5_1,
                  recipeInfoDisplay.children[0]
                );
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
