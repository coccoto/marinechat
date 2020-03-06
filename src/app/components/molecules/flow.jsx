import React from 'react'
// hooks
import useSnapshot from '@/app/hooks/useSnapshot'

export default (props) => {

    const Snapshot = useSnapshot(props)

    return (
        <div>{Snapshot.messages}</div>
    )
}