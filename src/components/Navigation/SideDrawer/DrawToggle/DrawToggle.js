import React from 'react'

import classes from './DrawToggle.css'


const drawToggle = (props) => {
    return (
        <div 
            className={classes.DrawerToggle}
            onClick={props.clicked}
        >MENU</div>
    )
}


export default drawToggle
