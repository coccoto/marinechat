import React from 'react'

export default (roomRef) => {

    const [data, setData] = React.useState()

    /**
     * データベースからデータを非同期で取得する。
     */
    React.useEffect(() => {
        roomRef.orderBy('date').onSnapshot((snapshot) => {
            const docs = []

            snapshot.forEach((doc) => {
                const ref = doc.data()

                // 送信内容を取得する。
                const id = ref.id
                const message = ref.message
                const date = new Date(ref.date.toDate())

                const time = {
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                }

                // 取得したデータから JSX を生成する。
                docs.push(<div key={doc.id}>{id} - {time.hour}:{time.minute} - {message}</div>)
            })

            setData(docs)
        })
    }, [])

    return {
        data: data
    }
}