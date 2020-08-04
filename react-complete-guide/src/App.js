import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

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
		let btnClass = [];

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, i) => (
						<Person
							name={person.name}
							age={person.age}
							key={i}
							click={() => this.deletePersonHandler(i)}
							changed={(event) => this.nameChangedHandler(event, person.id)}
						/>
					))}
				</div>
			);

			btnClass.push(classes.Red);
		}

		// let classes = ['red', 'bold'].join(' ');
		let assignedClasses = [];

		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}

		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button
					className={btnClass.join(' ')}
					alt={this.state.showPersons}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
