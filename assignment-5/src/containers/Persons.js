import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
	personAddedHandler = () => {
		const newPerson = {
			id: Math.random(), // not really unique but good enough here!
			name: 'Ashwin',
			age: Math.floor(Math.random() * 40),
		};

		this.props.onAddPerson(newPerson);
	};

	render() {
		return (
			<div>
				<AddPerson personAdded={this.personAddedHandler} />
				{this.props.persons.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => {
							this.props.onDeletePerson(person.id);
						}}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		persons: state.personsReducer.persons,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPerson: (person) =>
			dispatch({ type: actions.ADD_PERSON, value: { person } }),
		onDeletePerson: (id) =>
			dispatch({ type: actions.DELETE_PERSON, value: { id } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
