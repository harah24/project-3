import Form from "./Form";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";

 
const Recipe = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {

    // create recipe card - https://api.spoonacular.com/recipes/{id}/card

    const apiKey = `b495f0158e104ece9e50b6ec956a0921 `;

    axios({
      url: `https://api.spoonacular.com/recipes/complexSearch?${apiKey}`,
      method: "GET",
      dataResponse: "json",
      params: {
        apiKey: "b495f0158e104ece9e50b6ec956a0921",
        format: "json",
        cuisine: "asian",
        instructionsRequired: true,
      },
    }).then((apiData) => {
      // console.log(apiData.data.results);
      setRecipes(apiData.data.results);
    });
  }, []);

  return (
    <section>
      <Form/>
      <ul className="photos">

        {

          recipes.map( (recipeObject) => {
            return <RecipeCard
              key={recipeObject.id}
              img={recipeObject.image}
              alt={recipeObject.title}
            />
          })

        }

      </ul>
    </section>
  )

}

export default Recipe;

