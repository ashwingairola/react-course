import React from 'react';

import classes from './Person.css';

class Person extends React.Component {
	shouldComponentUpdate(nextProps) {
		console.log(
			`[Person.js] shouldComponentUpdate ${this.props.name !== nextProps.name}`
		);
		return this.props.name !== nextProps.name;
	}

	render() {
		console.log('[Person.js] render');

		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.changed}
					defaultValue={this.props.name}
				/>
			</div>
		);
	}
}

export default Person;
