import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.css'


class Layout extends Component {
    state ={
        showSideDrawer: false
    }

    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    drawToggleClick={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedhandler}
                />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout
