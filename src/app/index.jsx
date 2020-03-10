import React from 'react'
// molecules
import ChatRoom from '@/app/components/molecules/chatRoom'
import Index from '@/app/components/molecules/index'
// firebase
import Database, { Timestamp } from '@/firebase/index'

export default () => {

    const [roomRef, setRoomRef] = React.useState(Database.collection('rooms').doc('0001').collection('contents'))

    /**
     * bool.run ルームの入室状況を判定
     */
    const [bool, setBool] = React.useState({run: false})

    return (
        <div>
            {bool.run ?
                <Index></Index>
            :
                <ChatRoom
                    roomRef={roomRef}
                    Timestamp={Timestamp}
                ></ChatRoom>
            }
        </div>
    )
}