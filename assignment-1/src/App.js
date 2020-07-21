import React from 'react';
import './App.css';

import { UserInput } from './components/UserInput/UserInput';
import { UserOutput } from './components/UserOutput/UserOutput';

export class App extends React.Component {
	state = {
		users: [
			{
				username: 'ashwin',
				para1: "This is Ashwin's 1st paragraph",
				para2: 'This is his 2nd paragraph',
			},
			{
				username: 'dholu',
				para1: "This is Dholu's 1st paragraph.",
				para2: 'This is her 2nd paragraph.',
			},
		],
	};

	nameChangeHandler = (event) => {
		const newUsername = event.target.value;
		const newUsers = [...this.state.users];
		newUsers.forEach((user) => {
			user.username = newUsername;
		});

		this.setState({ users: newUsers });
	};

	render() {
		return (
			<div className="App">
				<UserInput
					nameChanged={this.nameChangeHandler}
					value={
						this.state.users.length
							? this.state.users[0].username
							: ''
					}
				/>
				<section
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						marginTop: '8px',
					}}
				>
					{this.state.users.map((user, i) => {
						return (
							<UserOutput
								username={user.username}
								para1={user.para1}
								para2={user.para2}
								key={i}
							/>
						);
					})}
				</section>
			</div>
		);
	}
}

export default App;
