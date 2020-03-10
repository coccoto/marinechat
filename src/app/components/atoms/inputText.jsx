import React from 'react'

export default React.forwardRef((props, ref) => {

    /**
     * 親要素 index の handleSubmit を実行、テキストを index に渡す。
     */
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