import React from 'react'
// molecules
import Form from '@/app/components/molecules/form'
// atoms
import Flow from '@/app/components/atoms/flow'

export default (props) => {

    /**
     * データベースに取得した文字列・ユーザーID・送信時間を書き込む。
     * 
     * @param {string} text 孫要素 inputText が取得した文字列
     */
    const handleSubmit = (text) => {
        const date = new Date()
        const document = props.roomRef.doc()

        // データベースにデータを書き込む。
        document.set({
            date: date,
            accountId: props.account.accountId,
            name: props.account.name,
            message: text,
        })
    }

    return (
        <div>
            <Flow
                roomRef={props.roomRef}
            ></Flow>
            <Form
                handleSubmit={(i) => {handleSubmit(i)}}
                label={'Send'}
            ></Form>
        </div>
    )
}