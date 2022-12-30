require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 7777;
const cors = require("cors");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  async function getRecipe() {
    // document.getElementById("getRecipe").disabled = true;
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=coffee&number=2&ignorePantry=true&ranking=1",
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
    if (typeof window !== "undefined") {
      localStorage.setItem("data", JSON.stringify(data));
    } else console.log(data);

    res.send(data);
  }
  getRecipe();
});

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
