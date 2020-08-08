import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		persons: [
			{ id: 'owdow', name: 'Max', age: 28 },
			{ id: 'qwewr', name: 'Manu', age: 29 },
			{ id: 'wfwfw', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	};

	nameChangedHandler = (event, personId) => {
		const personIndex = this.state.persons.findIndex(
			(person) => person.id === personId
		);
		if (personIndex >= 0) {
			const person = {
				...this.state.persons[personIndex],
				name: event.target.value
			};
			const persons = [...this.state.persons];

			persons[personIndex] = person;
			this.setState({ persons });
		}
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						changed={this.nameChangedHandler}
						clicked={this.deletePersonHandler}
					></Persons>
				</div>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
