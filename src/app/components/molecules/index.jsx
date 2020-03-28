import React from 'react'
// molecules
import SelectForm from '@/app/components/molecules/selectForm'

export default (props) => {

    /**
     * bool.popup ルーム入室時のポップアップを制御
     */
    const [bool, setBool] = React.useState({popup: false})

    const handleSubmit = (text) => {
        // データベースを設定する。
        props.setRoomRef(text)
        // チャットルームに入室する。
        props.setBool()
    }

    return (
        <div>
            <SelectForm
                handleSubmit={(i) => {handleSubmit(i)}}
            ></SelectForm>
        </div>
    )
}