import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
// styles
import styles from '@/app/styles/components/molecules/home/selectButton.module.sass' 

export default (props) => {

    return (
        <div>
            <Button
                styles={styles['button']}
                onClick={() => {props.setBool('create')}}
                label={'Create'}
            ></Button>
            <Button
                styles={styles['button']}
                onClick={() => {props.setBool('search')}}
                label={'Serach'}
            ></Button>
        </div>
    )
}
