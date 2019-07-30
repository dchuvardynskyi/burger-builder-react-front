import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


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
        totalPrice: 4
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
        }
    }
    disableInfo = () => {
        const ingredients = {
            ...this.state.ingredients
        }
        for (let ingredientType in ingredients) {
            ingredients[ingredientType] = ingredients[ingredientType] <= 0
        }
        console.log(ingredients)
        return ingredients
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    disableInfo={this.disableInfo()}
                    ingredientAdd={this.addIngredientHandler} 
                    ingredientRemove={this.removeIngredientHandler}
                    totalPrice={this.totalPrice}
                />
            </Aux>
        );
    }
}


export default BurgerBuilder;
