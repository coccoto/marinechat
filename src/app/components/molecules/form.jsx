import React from 'react'
// atoms
import Input from '@/app/components/atoms/input'
import Button from '@/app/components/atoms/button'
// styles
import styles from '@/app/styles/components/molecules/form.module.sass'

export default (props) => {

    const inputRef = React.useRef()

    const handleSubmit = () => {
        inputRef.current.handleSubmit()
    }

    return (
        <div className={styles['select']}>
            <Input
                handleSubmit={props.handleSubmit}
                ref={inputRef}
            ></Input>
            <Button
                onClick={() => {handleSubmit()}}
                label={props.label}
            ></Button>
        </div>
    )
}