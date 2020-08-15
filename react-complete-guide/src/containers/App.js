import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
		this.state = {
			persons: [
				{ id: 'owdow', name: 'Max', age: 28 },
				{ id: 'qwewr', name: 'Manu', age: 29 },
				{ id: 'wfwfw', name: 'Stephanie', age: 26 }
			],
			otherState: 'some other value',
			showPersons: false,
			showCockpit: true
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

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
		console.log('[App.js] render');

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
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						personsLength={this.state.persons.length}
						showPersons={this.state.showPersons}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</div>
		);
	}
}

export default App;
