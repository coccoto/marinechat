import React from 'react'
// molecules
import ChatRoom from '@/app/components/molecules/chatRoom'
import Index from '@/app/components/molecules/index'
// firebase
import Database from '@/firebase/index'

const random = () => {
    let random = Math.floor(Math.random() * 10000)
    return String(random).padStart(4, 0)
}

export default () => {

    const [id] = React.useState(random())
    const [roomRef, setRoomRef] = React.useState(Database.collection('rooms').doc(id).collection('contents'))

    /**
     * bool.run ルームの入室状況を判定
     */
    const [bool, setBool] = React.useState({run: false})

    return (
        <div>
            {! bool.run ?
                <Index
                    setRoomRef={(i) => {setRoomRef(Database.collection('rooms').doc(i).collection('contents'))}}
                    setBool={() => {setBool({run: true})}}
                ></Index>
            :
                <ChatRoom
                    roomRef={roomRef}
                    id={id}
                ></ChatRoom>
            }
        </div>
    )
}