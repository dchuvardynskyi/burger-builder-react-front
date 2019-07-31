import React from 'react'

import clases from './Backdrop.css'


const backdrop = (props) => {
    return (
        props.show ? <div className={clases.Backdrop} onClick={props.clicked}></div> : null
    )
}


export default backdrop;
