import React from 'react'
// molecules
import Popup from '@/app/components/molecules/popup'
import SelectRoom from '@/app/components/molecules/selectRoom'

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
            <SelectRoom
                setBool={props.setBool}
            ></SelectRoom>
            <Popup
                handleSubmit={(i) => {handleSubmit(i)}}
            ></Popup>
        </div>
    )
}