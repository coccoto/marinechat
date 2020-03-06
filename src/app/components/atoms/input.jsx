import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/input.module.sass'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.handleSubmit(text)
        }
    }))

    const [text, setText] = React.useState()

    return (
        <input
            className={props.styles}
            onChange={(event) => {setText(event.target.value)}}
        ></input>
    )
})