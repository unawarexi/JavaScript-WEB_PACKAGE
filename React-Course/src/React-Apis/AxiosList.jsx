import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosList() {
  const [recipes, setRecipes] = useState([]);

  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          s: query,
        },
      });
      setRecipes(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.idMeal}>
              <h2>{recipe.strMeal}</h2>
              <p>{recipe.strInstructions}</p>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
}

export default AxiosList;
