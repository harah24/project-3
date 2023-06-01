

const RecipeCard = ({ title, img }) => {
  // console.log(title, img)

  return (
    //destructured
    <li className="photo-container">
      {<img src={img} alt={title} ></img>}
    </li>
  );
};

export default RecipeCard; 