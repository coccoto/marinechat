import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'

export default (props) => {

    return (
        <div>
            <Button
                onClick={props.setBool}
                label={'Create'}
            ></Button>
            <Button
                label={'Serach'}
            ></Button>
        </div>
    )
}