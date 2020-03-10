import React from 'react'
// molecules
import Form from '@/app/components/molecules/form'

export default (props) => {

    return (
        <Form
            handleSubmit={props.handleSubmit}
            label={'Enter'}
        ></Form>
    )
}