import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
        return [...Array(props.ingredients[ingredientName])].map((_, index) => <BurgerIngredient key={ingredientName + index} type={ingredientName} />)
    })
    .reduce((elementArray, accumulatedArray) => elementArray.concat(accumulatedArray), []);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients.length === 0 ? <p>Please start adding Ingredients!!!</p> : transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;