// render details on the page based on info passed from Recipe.js 

const RecipeCard = ({ title,img,link }) => {

  return (
    <li className="recipe-card">
      {<img src={img} alt={`image of ${title}`}></img>}
      <p>{title}</p>
      <a href={link} target="_blank">Find Recipe</a>
    </li>
  );
};


export default RecipeCard; 

