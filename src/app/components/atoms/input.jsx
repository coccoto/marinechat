import React from 'react'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.handleSubmit(text)
        }
    }))

    const [text, setText] = React.useState()

    return (
        <input
            onChange={(event) => {setText(event.target.value)}}
        ></input>
    )
})