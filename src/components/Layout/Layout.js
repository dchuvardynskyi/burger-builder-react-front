import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.css'


class Layout extends Component {
    state ={
        showSideDrawer: true
    }

    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar 

                />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedhandler}/
                >
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout
