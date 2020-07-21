import React from 'react';
import './UserOutput.css';

export class UserOutput extends React.Component {
	render() {
		return (
			<section className="UserOutput">
				<div>Username: {this.props.username}</div>
				<p>{this.props.para1}</p>
				<p>{this.props.para2}</p>
			</section>
		);
	}
}
