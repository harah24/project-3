
const Form =({selectCuisine, handleSubmit, cuisine}) => {

  return (
  <form action="" onSubmit={ (event) => {handleSubmit(event)}}>
	<label>Find a recipe:</label>
	<select 
		name="" 
    id="" 
    onChange={(event) => {
			selectCuisine(event.target.value)
		}}
		value={cuisine}
		>
		<option value="placeholder" disabled>Select cuisine</option>
    <option value="Caribbean">Caribbean</option>
    <option value="African">African</option>
    <option value="Asian">Asian</option>
    <option value="European">European</option>
    <option value="Middle Eastern">Middle Eastern</option>
    <option value="Latin American">Latin American</option>
    <option value="American">American</option>
  </select>
  <button>Search</button>
 </form>
 );
  
}


export default Form

