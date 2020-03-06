import React from 'react'
// molecules
import Form from '@/app/components/molecules/form'
import Flow from '@/app/components/molecules/flow'
import Index from '@/app/components/molecules/index'
// styles
import styles from '@/app/styles/index.module.sass'
// firebase
import Database from '@/firebase/index'

export default () => {

    const [roomRef, setRoomRef] = React.useState()

    const [bool, setBool] = React.useState ({
        run: false,
        select: false,
    })

    React.useEffect(() => {
        const num = Math.floor(Math.random() * 10000)
        const roomId = String(num).padStart(4, 0)

        setRoomRef(Database.collection('rooms').doc('list').collection(roomId))
    }, [])

    const handleSubmit = (message) => {
        const document = roomRef.doc()

        document.set({
            date: new Date(),
            message: message
        })
    }

    return (
        <div style={{height: '100vh'}}>
            <div className={styles['sea']}></div>
            <div className={styles['circle']}></div>
            {! bool.run ?
                <Index
                    setBool={(i) => {setBool(i)}}
                ></Index>
            :
                <div>
                    <Flow roomRef={roomRef}></Flow>
                    <Form
                        handleSubmit={(i) => {handleSubmit(i)}}
                        label={'送信'}
                    ></Form>
                </div>
            }
            {bool.select ?
                <div className={styles['select']}>
                    <Form 
                        handleSubmit={(i) => {
                            setRoomRef(Database.collection('rooms').doc('list').collection(i))
                            setBool({run: true, select: false})
                        }}
                        label={'入室'}
                    ></Form>
                </div>
            :
                null
            }
        </div>
    )
}