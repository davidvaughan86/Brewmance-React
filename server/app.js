require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 7777;

app.get("/recipe", (req, res) => {
  async function getRecipe() {
    // document.getElementById("getRecipe").disabled = true;
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=coffee&number=15&ignorePantry=true&ranking=1",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.ApiKey,
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();
    return data;
  }

  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
