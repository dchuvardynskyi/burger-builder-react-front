import React from 'react'

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];


const buildControls = (props) => {
    const buildControlsElement = controls.map( (ctrl) => {
        return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    isDisabled={props.disableInfo[ctrl.type]}
                    addClick={() => props.ingredientAdd(ctrl.type)} 
                    removeClick={() => props.ingredientRemove(ctrl.type)}
                />
    })

    return (
        <div className={classes.BuildControls}> 
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {buildControlsElement}
        </div>
    )
}


export default buildControls;
