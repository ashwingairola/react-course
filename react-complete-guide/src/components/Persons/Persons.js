import React from 'react';

import Person from './Person/Person';

class Persons extends React.PureComponent {
	state = {};

	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	}

	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWillReceiveProps');
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	return nextProps.persons !== this.props.persons;
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	// componentWillUpdate() {
	// 	console.log('[Persons.js] componentWillUpdate');
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] render');

		return this.props.persons.map((person, i) => (
			<Person
				name={person.name}
				age={person.age}
				key={i}
				click={() => this.props.clicked(i)}
				changed={(event) => this.props.changed(event, person.id)}
			/>
		));
	}
}

export default Persons;
