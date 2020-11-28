import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo((props) => {
	const { onLoadIngredients } = props;
	const [filter, setFilter] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			if (filter === inputRef.current.value) {
				const query = !filter.length
					? ''
					: `?orderBy="title"&equalTo="${filter}"`;
				fetch(
					'https://react-hooks-update-c0889.firebaseio.com/ingredients.json' +
						query
				)
					.then((response) => response.json())
					.then((responseData) => {
						const loadedIngredients = [];
						for (const key in responseData) {
							loadedIngredients.push({
								id: key,
								title: responseData[key].title,
								amount: responseData[key].amount,
							});
						}

						onLoadIngredients(loadedIngredients);
					});
			}
		}, 500);
	}, [filter, onLoadIngredients, inputRef]);

	return (
		<section className="search">
			<Card>
				<div className="search-input">
					<label>Filter by Title</label>
					<input
						ref={inputRef}
						type="text"
						onChange={(event) => {
							setFilter(event.target.value);
						}}
					/>
				</div>
			</Card>
		</section>
	);
});

export default Search;
