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

    const apiKey = `b495f0158e104ece9e50b6ec956a0921 `;

    axios({
      url: `https://api.spoonacular.com/recipes/complexSearch?${apiKey}`,
      method: "GET",
      dataResponse: "json",
      params: {
        apiKey: "b495f0158e104ece9e50b6ec956a0921",
        format: "json",
        cuisine, 
        instructionsRequired: true,
      },
    }).then((apiData) => {
      console.log(apiData.data.results);
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
      />
      <ul className="photos">
        {recipes.map((recipeObject) => {
          return (
            <RecipeCard
              key={recipeObject.id}
              img={recipeObject.image}
              alt={recipeObject.title}
            />
          );
        })}
      </ul>
    </section>
  );

}

export default Recipe;

