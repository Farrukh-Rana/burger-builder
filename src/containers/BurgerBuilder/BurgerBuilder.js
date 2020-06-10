import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 1.0,
    bacon: 8.0,
    cheese: 1.5,
    meat: 2.0
} 

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    }

    addIngredientHandler = type => {
        this.setState((prevState, props) => {
            const newIngredients = {...prevState.ingredients}
            newIngredients[type] += 1

            const newPrice = prevState.totalPrice + INGREDIENT_PRICES[type]
            return {ingredients: newIngredients, totalPrice: newPrice}
        }) 
    }

    removeIngredientHandler = type => {
        this.setState((prevState, props) => {
            const newIngredients = {...prevState.ingredients}
            if (newIngredients[type] === 0) {
                return null
            }
            newIngredients[type] -= 1

            const newPrice = prevState.totalPrice - INGREDIENT_PRICES[type]
            return {ingredients: newIngredients, totalPrice: newPrice}
        }) 
    }

    render () {
        const disabledInfo = {...this.state.ingredients}
        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0
        }

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls 
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled={disabledInfo}
                            price={this.state.totalPrice} />
            </Fragment>
        );
    };
};

export default BurgerBuilder;