
function Recipe(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <img src={props.imagePath} alt={props.alt}/>
    </div>
  );
}

export default Recipe;