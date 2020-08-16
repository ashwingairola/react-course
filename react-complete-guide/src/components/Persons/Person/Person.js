import React from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount() {
		this.inputElementRef.current.focus();
	}

	// shouldComponentUpdate(nextProps) {
	// 	console.log(
	// 		`[Person.js] shouldComponentUpdate ${this.props.name !== nextProps.name}`
	// 	);
	// 	return (
	// 		this.props.name !== nextProps.name || this.props.age !== nextProps.age
	// 	);
	// }

	render() {
		console.log('[Person.js] render');

		return (
			<React.Fragment>
				{this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					// ref={(el) => {
					// 	this.inputElement = el;
					// }}
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.changed}
					defaultValue={this.props.name}
				/>
			</React.Fragment>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, classes.Person);
