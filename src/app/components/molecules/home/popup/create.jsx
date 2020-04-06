import React from 'react'
// molecules
import Form from '@/app/components/molecules/form'
// styles
import styles from '@/app/styles/components/molecules/home/popup/create.module.sass'

export default (props) => {

    return (
        <div className={styles[props.styles]}>
            <Form
                styles={styles['button']}
                handleSubmit={props.handleSubmit}
                label={'Enter'}
                placeholder={'Please enter your name.'}
            ></Form>
        </div>
    )
}