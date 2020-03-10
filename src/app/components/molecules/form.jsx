import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
import InputText from '@/app/components/atoms/InputText'

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
        <div>
            <InputText
                handleSubmit={props.handleSubmit}
                ref={inputTextRef}
            ></InputText>
            <Button
                onClick={() => {handleSubmit()}}
                label={props.label}
            ></Button>
        </div>
    )
}