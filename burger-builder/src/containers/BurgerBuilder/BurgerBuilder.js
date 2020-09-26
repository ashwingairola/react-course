import React from 'react';

import axios from '../../axios-orders';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});

		this.updatePurchaseState();
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}

		const updatedCount = oldCount - 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});

		this.updatePurchaseState();
	};

	updatePurchaseState() {
		this.setState((prevState) => {
			const ingredients = {
				...prevState.ingredients,
			};

			const sum = Object.keys(ingredients)
				.map((key) => ingredients[key])
				.reduce((sum, el) => sum + el, 0);

			return { purchasable: sum > 0 };
		});
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Ashwin',
				address: {
					street: "The street where Ashwin's house is located",
					zipCode: '248005',
					country: 'India',
				},
				email: 'ashwin@gmail.com',
			},
			deliveryMethod: 'fastest',
		};

		axios
			.post('/orders.json', order)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));
	};

	render() {
		const disabledInfo = {};

		for (const key in this.state.ingredients) {
			disabledInfo[key] = this.state.ingredients[key] <= 0;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
