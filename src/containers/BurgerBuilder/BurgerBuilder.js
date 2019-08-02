import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummury from '../../components/Burger/OrderSummury/OrderSummury'
import Modal from '../../UI/Modal/Modal'

const INGREDIENTS_PRICES = {
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.2,
    salad: 0.4,
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        totalPrice: 4,
        orderDisabled: true,
        purchasing: false,
    }

    addIngredientHandler = (ingredientType) => {
        const oldtCount = this.state.ingredients[ingredientType]
        const updatedCount = oldtCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[ingredientType] = updatedCount
        const oldTotalPrice = this.state.totalPrice
        const updatedTotalPrice = oldTotalPrice + INGREDIENTS_PRICES[ingredientType]
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })
        this.updateOrderDisabledState(updatedIngredients)
    }

    removeIngredientHandler = (ingredientType) => {
        const oldtCount = this.state.ingredients[ingredientType]
        if (oldtCount > 0) {
            const updatedCount = oldtCount - 1
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[ingredientType] = updatedCount
            const oldTotalPrice = this.state.totalPrice
            const updatedTotalPrice = oldTotalPrice - INGREDIENTS_PRICES[ingredientType]
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedTotalPrice
            })
            this.updateOrderDisabledState(updatedIngredients)
        }
    }

    disableInfo = () => {
        const ingredients = {
            ...this.state.ingredients
        }
        for (let ingredientType in ingredients) {
            ingredients[ingredientType] = ingredients[ingredientType] <= 0
        }
        return ingredients
    }

    updateOrderDisabledState (ingredients) {
        const totalIngredientsCount = Object.keys(ingredients)
        .map( (ingredientType) => {
            return ingredients[ingredientType]
        })
        .reduce( (sum, currentCount) => {
            return sum + currentCount
        })
        this.setState({orderDisabled: totalIngredientsCount <= 0})
    }

    purchasingHandler = () => {
        this.setState({purchasing: true})
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchasingContinueHandler = () => {
        alert('You are continue')
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    <OrderSummury 
                        ingredients={this.state.ingredients}
                        purchasingContinue={this.purchasingContinueHandler} 
                        purchasingCancel={this.purchasingCancelHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    disableInfo={this.disableInfo()}
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    ordered={this.purchasingHandler}
                    orderDisabled={this.state.orderDisabled}
                />
            </Aux>
        );
    }
}


export default BurgerBuilder;
