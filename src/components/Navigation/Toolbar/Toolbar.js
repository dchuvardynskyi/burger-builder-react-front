import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle'

import classes from './Toolbar.css'


const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <DrawToggle 
            clicked={props.drawToggleClick}
        />
        <Logo/>
        <div className={classes.DesktopOnly}>
            <NavigationItems />
        </div>
    </header>
    )
}

export default toolbar
