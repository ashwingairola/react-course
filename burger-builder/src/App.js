import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1>Buhguh App</h1>
					<p>Have a buhguh, dumdum!</p>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
