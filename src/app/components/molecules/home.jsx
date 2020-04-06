import React from 'react'
// molecules
import Create from '@/app/components/molecules/home/popup/create'
import Search from '@/app/components/molecules/home/popup/search'
import SelectButton from '@/app/components/molecules/home/selectButton'
// styles
import styles from '@/app/styles/components/molecules/home.module.sass'

export default (props) => {

    /**
     * bool.popup ルーム入室時のポップアップを制御
     */
    const [bool, setBool] = React.useState({
        popup: {
            create: false,
            search: false,
        }
    })

    return (
        <div className={styles['container']}>
            <SelectButton
                // 表示するポップアップを選択
                setBool={(popup) => {
                    if (popup === 'create') {
                        setBool({
                            popup: {
                                ...bool.popup,
                                create: true,
                            }
                        })
                    } else if (popup === 'search') {
                        setBool({
                            popup: {
                                ...bool.popup,
                                search: true,
                            }
                        })
                    }
                }}
            ></SelectButton>
            <Create
                styles={bool.popup.create ? 'container-fadein' : 'container-fadeout'}
                handleSubmit={(i) => {
                    // アカウント名を設定する。
                    props.setAccount(i)
                    // チャットルームに入室する。
                    props.setBool()
                }}
            ></Create>
            <Search
                styles={bool.popup.search ? 'container-fadein' : 'container-fadeout'}
                handleSubmit={(i) => {
                    // データベースを設定する。
                    props.setRoomRef(i)
                    // チャットルームに入室する。
                    props.setBool()
                }}
                setAccount={props.setAccount}
            ></Search>
        </div>
    )
}