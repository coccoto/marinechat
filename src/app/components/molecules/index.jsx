import React from 'react'
// molecules
import SelectForm from '@/app/components/molecules/selectForm'

export default () => {

    /**
     * bool.popup ルーム入室時のポップアップを制御
     */
    const [bool, setBool] = React.useState({popup: false})

    return (
        <div>
            <SelectForm></SelectForm>
        </div>
    )
}