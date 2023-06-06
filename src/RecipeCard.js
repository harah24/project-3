
const RecipeCard = ({ title,img,link }) => {

  return (
    <li className="recipe-card">
      {<img src={img} alt={`recipe for ${title}`}></img>}
      <p>{title}</p>
      <a href={link} target="_blank">Find Recipe</a>
    </li>
  );
};


export default RecipeCard; 

