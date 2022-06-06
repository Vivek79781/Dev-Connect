import React from 'react'
import spinner from './spinner.gif'
import { Fragment } from 'react'

const Spinner = () => {
    return (
        <Fragment>
            <img 
            src={spinner}
            style={{width: '200px', margin: 'auto', display: 'block'}}
            alt="Loading..."
            />
        </Fragment>
    )
}


export default Spinner