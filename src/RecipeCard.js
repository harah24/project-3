// rendering info on page based on info passed to here from recipe ... info in here updates when there is change within Recipe comp 


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