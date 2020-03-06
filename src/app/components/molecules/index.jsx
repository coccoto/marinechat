import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
// styles
import styles from '@/app/styles/components/molecules/index.module.sass'

export default (props) => {

    return (
        <div className={styles['container']}>
            <h2 className={styles['container-h2']}>チャットを もっと！ 手軽に</h2>
            <Button
                styles={styles['button']}
                onClick={() => {props.setBool({run: true})}}
                label={'ルームを作る'}
            ></Button>
            <Button
                styles={styles['button']}
                onClick={() => {props.setBool({select: true})}}
                label={'ルームに入る'}
            ></Button>
        </div>
    )
}