import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
	background-color: green;
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: lightgreen;
		color: black;
	}
`;

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

			// style.backgroundColor = 'red';
			// style[':hover'] = {
			// 	backgroundColor: 'salmon',
			// 	color: 'black'
			// };
		}

		// let classes = ['red', 'bold'].join(' ');
		let classes = [];

		// if (this.state.persons.length <= 2) {
		// 	classes.push('red');
		// }

		// if (this.state.persons.length <= 1) {
		// 	classes.push('bold');
		// }

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<StyledButton onClick={this.togglePersonsHandler}>
					Toggle Persons
				</StyledButton>
				{persons}
			</div>
		);
	}
}

export default App;
