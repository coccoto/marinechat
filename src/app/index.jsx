import React from 'react'
// molecules
import ChatRoom from '@/app/components/molecules/chatRoom'
import Home from '@/app/components/molecules/home'
// firebase
import Database from '@/firebase/index'

const random = () => {
    let random = Math.floor(Math.random() * 10000)
    return String(random).padStart(4, 0)
}

export default () => {

    // ユーザー情報
    const [account] = React.useState({
        accountId: random(),
        name: 'ruru',
    })

    const [roomRef, setRoomRef] = React.useState(Database.collection('rooms').doc(random()).collection('contents'))

    /**
     * bool.run ルームの入室状況を判定する。
     */
    const [bool, setBool] = React.useState({run: false})

    return (
        <div>
            {! bool.run ?
                <Home
                    setRoomRef={(i) => {setRoomRef(Database.collection('rooms').doc(i).collection('contents'))}}
                    setBool={() => {setBool({run: true})}}
                ></Home>
            :
                <ChatRoom
                    roomRef={roomRef}
                    account={account}
                ></ChatRoom>
            }
        </div>
    )
}