import React from 'react'
// atoms
import InputText from '@/app/components/atoms/inputText'
// molecules
import Form from '@/app/components/molecules/form'

export default (props) => {

    const inputTextRef = React.useRef()

    /**
     * 子要素 Form のイベントで発火
     * InputText から親要素の setAccount を実行しアカウント名を決定する。
     * その後、親要素の handleSubmit を実行しチャットルームに入室する。
     * 
     * 実装背景
     * 
     * Form コンポーネントだけの実装では入力欄を1つのみしか配置することができず、
     * アカウント名の入力欄を確保することができなかったため、このような実装となっている。
     * 
     * @param {string} text 孫要素 inputText が取得した文字列
     */
    const handleSubmit = (text) => {
        inputTextRef.current.handleSubmit()
        props.handleSubmit(text)
    }

    return (
        <div>
            <InputText
                handleSubmit={props.setAccount}
                ref={inputTextRef}
            ></InputText>
            <Form
                handleSubmit={(i) => {handleSubmit(i)}}
                label={'Enter'}
            ></Form>
        </div>
    )
}