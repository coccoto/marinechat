import React from 'react'
// molecules
import Create from '@/app/components/molecules/home/popup/create'
import Search from '@/app/components/molecules/home/popup/search'
import Buttons from '@/app/components/molecules/home/buttons'

export default (props) => {

    /**
     * bool.popup ルーム入室時のポップアップを制御
     */
    const [bool, setBool] = React.useState({popup: false})

    return (
        <div>
            <Buttons
                setBool={props.setBool}
            ></Buttons>
            <Create
                handleSubmit={(i) => {
                    // アカウント名を設定する。
                    props.setAccount(i)
                    // チャットルームに入室する。
                    props.setBool()
                }}
            ></Create>
            <Search
                handleSubmit={(i) => {
                    // データベースを設定する。
                    props.setRoomRef(i)
                    // チャットルームに入室する。
                    props.setBool()
                }}
                setAccount={props.setAccount}
            ></Search>
        </div>
    )
}