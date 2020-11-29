import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

function Ingredients() {
	const [ingredients, setIngredients] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const filteredIngredientsHandler = useCallback(
		(filteredIngredients) => {
			setIngredients(filteredIngredients);
		},
		[setIngredients]
	);

	const addIngredientHandler = (ingredient) => {
		setLoading(true);
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
			})
			.catch((err) => {
				setLoading(false);
				setError(err.message);
			});
	};

	const removeIngredientHandler = (id) => {
		setLoading(true);
		fetch(
			`https://react-hooks-update-c0889.firebaseio.com/ingredients/${id}.json`,
			{ method: 'DELETE' }
		)
			.then(() => {
				setIngredients((prev) =>
					prev.filter((ingredient) => ingredient.id !== id)
				);
			})
			.finally((err) => {
				setLoading(false);
				setError(err.message);
			});
	};

	const clearError = () => setError(null);

	return (
		<div className="App">
			{error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
			<IngredientForm
				onAddIngredient={addIngredientHandler}
				loading={loading}
			/>

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
