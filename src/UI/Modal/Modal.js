import React from 'react'

import classes from './Modal.css'


const modal = (props) => {
    return (
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'transalteY(0)' : 'transalteY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    )
}


export default modal;
