import React from 'react'

import classes from './Burgeringredient.css'

const burgerIngredient = (props) => {
    let ingredient = null

    switch ( props.type ) {
        case ( 'bread-bottom' ):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ( 'bread-top' ):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                </div>
            );
            break;
        case ( 'meat' ):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ( 'Cheese' ):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ( 'salad' ):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ( 'becon' ):
            ingredient = <div className={classes.Becon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

export default burgerIngredient;
