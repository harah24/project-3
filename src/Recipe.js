import Form from "./Form";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";

 
const Recipe = () => {
	
	const [recipes, setRecipes] = useState([]);

  const [cuisine, setCuisine ] = useState("");

  const [submitted, setSubmitted] = useState(false);

  useEffect( () => {
    axios({
        url: `https://api.spoonacular.com/recipes/complexSearch`,
        method: "GET",
        dataResponse: "json",
        params: {
          apiKey: "b495f0158e104ece9e50b6ec956a0921",
          format: "json",
          cuisine,
          addRecipeInformation: true,
        },
      }).then((apiData) => {
        setRecipes(apiData.data.results);
      });
      setSubmitted(false);
  }, [submitted]);
	
	const selectCuisine = (paramTarget) => { 
		setCuisine(paramTarget)
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	}

  return (
	<section>
		<Form 
		selectCuisine={selectCuisine} 
    handleSubmit={handleSubmit}
    />
	  <ul className="recipes">
			{recipes.map((recipeObject) => {
				return (
				<RecipeCard
				key={recipeObject.id}
        img={recipeObject.image}
        title={recipeObject.title}
        link={recipeObject.sourceUrl}
				/>
				);
				})}
    </ul>
  </section>
	);
}


export default Recipe;


