import Form from "./Form";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";

 
const Recipe = () => {

  const [recipes, setRecipes] = useState([]);

  const [cuisine, setCuisine ] = useState("");

  // state to track if the user clicked the button or not
  const [submitted, setSubmitted] = useState(false);

  useEffect( () => {

    axios({
      url: `https://api.spoonacular.com/recipes/complexSearch`,
      method: "GET",
      dataResponse: "json",
      params: {
        apiKey: "6a9eaeda2b754307a8d5eb95b29a998c",
        format: "json",
        cuisine,
        addRecipeInformation:true,
      },
    }).then((apiData) => {
		  setRecipes(apiData.data.results);
    });
     setSubmitted(false);
  }, [submitted]);

    // selectCusine function will track changes in user selection by passing it into the form as a prop
    const selectCuisine = (paramTarget) =>{      
     
      //paramtarget = e.target.value 
      setCuisine(paramTarget)
    }

    // function to handle submit 
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    }

  return (
    <section>
      <Form 
      selectCuisine={selectCuisine} 
      handleSubmit={handleSubmit}
      cuisine={cuisine}
      />
      <ul className="photos">
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

