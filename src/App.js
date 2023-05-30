import "./App.css";
import { useEffect, useState} from "react";
import axios from "axios";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiKey = `2c1c356e90294f94b76d787b753db244 `;
    axios({
      url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=2c1c356e90294f94b76d787b753db244",
      method: "GET",
      dataResponse: "json",
      params: {
        key: apiKey,
        format: "json",
        // ingredients: "chicken",
        cuisine: "italian",
      },
    }).then((response) => {
      // console.log(response);
      setRecipes(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <div>
      <h1>Cooking App</h1>
      {recipes.map((meal) => {
        return (
          // <img key={meal.id} src={meal.image} alt={meal.title}/>
          <Recipe 
          imagePath={meal.image} 
          alt={meal.title} 
          title={meal.title}
          key={meal.id}
          />
        )
      })}
      </div>
      {/* <form>
        <input className="search-bar" type="text"></input>
        <button className="search-btn">Search</button>
      </form> */}

    </div>
  );
}

export default App;


