import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
	state = {
		ingredients: {
			bacon: 1,
			meat: 1,
			cheese: 1,
			salad: 1,
		},
	};

	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients} />
			</div>
		);
	}
}

export default Checkout;
