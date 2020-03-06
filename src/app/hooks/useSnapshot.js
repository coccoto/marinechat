import React from 'react'

export default (props) => {

    const [messages, setMessages] = React.useState()

    React.useEffect(() => {
        props.roomRef.orderBy('date').onSnapshot((snapshot) => {
            const messages = []

            snapshot.forEach((doc) => {
                const data = doc.data()

                const message = data.message
                const date = new Date(data.date.toDate())

                const timestamp = {
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }

                messages.push(<div key={doc.id}>{timestamp.hour}:{timestamp.minute} - {message}</div>)
            })

            setMessages(messages)
        })
    }, [])

    return {
        messages: messages
    }
}