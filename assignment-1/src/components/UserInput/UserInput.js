import React, { Component } from 'react';
import './UserInput.css';

export class UserInput extends Component {
	render() {
		return (
			<input
				type="text"
				className="UserInput"
				name="userInput"
				value={this.props.value}
				onChange={this.props.nameChanged}
			/>
		);
	}
}
