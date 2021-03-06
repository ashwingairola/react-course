import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1>Buhguh App</h1>
					<p>Have a buhguh, dumdum!</p>

					<Switch>
						<Route path="/checkout" component={Checkout}></Route>
						<Route path="/" component={BurgerBuilder}></Route>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
