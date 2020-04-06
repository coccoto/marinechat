import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
import InputText from '@/app/components/atoms/inputText'
// styles
import styles from '@/app/styles/components/molecules/form.module.sass'

export default (props) => {

    const inputTextRef = React.useRef()

    /**
     * 子要素 Button のイベントで発火
     * inputText が所有するメソッドを親から実行する。
     */
    const handleSubmit = () => {
        inputTextRef.current.handleSubmit()
    }

    return (
        <div className={styles['container']}>
            <InputText
                handleSubmit={props.handleSubmit}
                ref={inputTextRef}
                placeholder={props.placeholder}
            ></InputText>
            <Button
                styles={props.styles}
                onClick={() => {handleSubmit()}}
                label={props.label}
            ></Button>
        </div>
    )
}