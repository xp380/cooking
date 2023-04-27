import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ListData.css'

const ListData = () => {
	const [notes, getNotes] = useState('')
	useEffect(() => {
		axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
			getNotes(response.data.meals)
		})
	}, [])
	if (!notes) return null;
	function refreshPage() {
    window.location.reload(false);
  }
	
	return (
		<>
		{notes?.map(data => {
			return (
				<>
					<button onClick={refreshPage}>Click to reload!</button>
					<h1 className='titleMeal'>{data.strMeal}</h1>
					<div className='descriptionMeal'>
					<img className='pictureMeal' alt='example' src={data.strMealThumb}/>
					</div>
					<div className='instructionsMeal'>{data.strInstructions}</div>
					<h2 className='titleListIng'>List of ingredients</h2>
					<ul className='listIng'>
						<li>{data.strMeasure1}-{data.strIngredient1}</li>
						<li>{data.strMeasure2}-{data.strIngredient2}</li>
						<li>{data.strMeasure3}-{data.strIngredient3}</li>
						<li>{data.strMeasure4}-{data.strIngredient4}</li>
						<li>{data.strMeasure5}-{data.strIngredient5}</li>
						<li>{data.strMeasure6}-{data.strIngredient6}</li>
						<li>{data.strMeasure7}-{data.strIngredient7}</li>
						<li>{data.strMeasure8}-{data.strIngredient8}</li>
						<li>{data.strMeasure9}-{data.strIngredient9}</li>
						<li>{data.strMeasure10}-{data.strIngredient10}</li>
					</ul>
				</>
			)
		})}
		</>
	)
}

export default ListData
