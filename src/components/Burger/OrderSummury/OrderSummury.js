import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../UI/Button/Button'


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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button 
                btnType="Danger" 
                clicked={props.purchasingCancel}
            >CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.purchasingContinue}
            >Continue</Button>
        </Aux>
    )
}


export default orderSummury
