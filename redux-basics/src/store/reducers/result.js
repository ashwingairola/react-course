import * as actionTypes from '../actions';

const initialState = {
	results: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({
					id: new Date().getTime(),
					value: action.value,
				}),
			};

		case actionTypes.DELETE_RESULT:
			// const id = action.value;
			// const newArray = [...state.results];
			// newArray.splice(id, 1);

			const updatedArray = state.results.filter(
				(result) => result.id !== action.value
			);

			return {
				...state,
				results: updatedArray,
			};
	}

	return state;
};

export default reducer;
