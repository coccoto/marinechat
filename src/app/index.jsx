import React from 'react'
// molecules
import ChatRoom from '@/app/components/molecules/chatRoom'
import Home from '@/app/components/molecules/home'
// hooks
import useRandom from '@/app/hooks/useRandom'
// firebase
import Database from '@/firebase/index'

const collection = (roomId) => {
    return Database.collection('rooms').doc(roomId).collection('contents')
}

export default () => {

    /**
     * ルーム番号・アカウントID に利用する4桁の乱数を生成する。
     */
    const random = useRandom(4)

    console.log(random)

    /**
     * ユーザー情報
     * 名前の初期値は ruruchat に因んで ruru とする。
     */
    const [account, setAccount] = React.useState({
        accountId: random,
        name: 'ruru',
    })

    const [roomRef, setRoomRef] = React.useState(collection(random))

    /**
     * bool.run チャットルームの入室状況を判定する。
     */
    const [bool, setBool] = React.useState({run: false})

    return (
        <div>
            {! bool.run ?
                <Home
                    setAccount={(i) => {setAccount({...account, name: i})}}
                    setRoomRef={(i) => {setRoomRef(collection(i))}}
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