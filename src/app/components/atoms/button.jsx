import React from 'react'

export default (props) => {

    return (
        <button
            className={props.styles}
            type={'button'}
            onClick={() => {props.onClick()}}
        >{props.label}</button>
    )
}