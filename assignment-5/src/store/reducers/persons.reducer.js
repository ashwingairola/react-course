import * as actions from '../actions';

const initialState = {
	persons: [],
};

const personsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_PERSON:
			return {
				...state,
				persons: state.persons.concat(action.value.person),
			};

		case actions.DELETE_PERSON:
			return {
				...state,
				persons: state.persons.filter(
					(person) => person.id !== action.value.id
				),
			};

		default:
			return state;
	}
};

export default personsReducer;
