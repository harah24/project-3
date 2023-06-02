// rendering info on page based on info passed to here from recipe ... info in here updates when there is change within Recipe comp 

import { useEffect, useState } from "react";
import axios from "axios";


const RecipeCard = ({ title, img, id }) => {

  const [card, setCard] = useState([]);

  //recipe card needs to recieve the ID of each meal 
  //useeffect on component load to fetch the recipe using the create recipe card endpoint 
  // render the info to the page 

  // useEffect( () => {


  //   // const apiKey = `574bcbf6954c4c3789c2da6d9cd2f939`;

  //   axios({
  //     url: `https://api.spoonacular.com/recipes/${id}/card`,
  //     method: "GET",
  //     responseType: "json",
  //     params: {
  //       apiKey: "b495f0158e104ece9e50b6ec956a0921",
  //       format: "json",
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     setCard(response.data)

  //   });
  // },[] );
  
  return (
    //destructured
    <li className="photo-container">
      {<img src={img} alt={`image of ${title}`}></img>}
      <p>{title}</p>

      {/* anchor tag with url - in the a tag have an attribute of target = "_blank"*/}
      {/* <a href={card.url} target="_blank">Recipe Link</a> */}
      
    </li>
  );
};

export default RecipeCard; 