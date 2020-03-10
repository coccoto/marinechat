import React from 'react'
// hooks
import useSnapshot from '@/app/hooks/useSnapshot'

export default (props) => {

    const Snapshot = useSnapshot(props.roomRef)

    return (
        <div>{Snapshot.data}</div>
    )
}