import React from 'react'

import Aux from '../../../hoc/Aux'


const orderSummury = (props) => {

    const ingredientsSummury = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
    );

    })
    return (
        <Aux>
            <h3>You Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummury}
            </ul>
        </Aux>
    )
}


export default orderSummury
