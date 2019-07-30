import React from 'react'

import classes from './BuildControl.css'


const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less}
                disabled={props.isDisabled}
                onClick={props.removeClick}
            >
            Less
            </button>
            <button 
                className={classes.More} 
                onClick={props.addClick}
            >
            More
            </button>
        </div>
    )
}


export default buildControl;
