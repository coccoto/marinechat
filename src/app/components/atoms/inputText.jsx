import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/inputText.module.sass'

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
            className={styles['input']}
            onChange={(event) => {
                setText(event.target.value)
            }}
            placeholder={props.placeholder}
        ></input>
    )
})