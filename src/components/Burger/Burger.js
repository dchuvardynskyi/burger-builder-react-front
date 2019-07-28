import React from 'react'
import PropTypes from 'prop-types'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import styles from './Burger.css'


const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients ) // array with keys of ingredients, like: ['cheese', 'meat', ]
        .map( igKey => {
            return [...Array(props.ingredients[igKey])] // count of array by key value, like: Array(1), Array(2), etc.
            .map( ( _, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce( (arr, el) => {
            return arr.concat(el); 
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please select ingredients</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}


burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}


export default burger;
