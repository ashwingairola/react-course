import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
	const [ingredients, setIngredients] = useState([]);

	const filteredIngredientsHandler = useCallback(
		(filteredIngredients) => {
			setIngredients(filteredIngredients);
		},
		[setIngredients]
	);

	const addIngredientHandler = (ingredient) => {
		fetch(
			'https://react-hooks-update-c0889.firebaseio.com/ingredients.json',
			{
				method: 'POST',
				body: JSON.stringify(ingredient),
				headers: { 'Content-Type': 'application/json' },
			}
		)
			.then((response) => response.json())
			.then((responseData) => {
				setIngredients((prevIngredients) => [
					...prevIngredients,
					{ id: responseData.name, ...ingredient },
				]);
			});
	};

	const removeIngredientHandler = (id) => {
		setIngredients((prevIngredients) =>
			prevIngredients.filter((ingredient) => ingredient.id !== id)
		);
	};

	return (
		<div className="App">
			<IngredientForm onAddIngredient={addIngredientHandler} />

			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				<IngredientList
					ingredients={ingredients}
					onRemoveItem={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
