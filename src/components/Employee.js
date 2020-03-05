import React, {useState} from 'react'
import Button from './Button'

export default ({employee}) => {

    return (
        <div>
            {employee.name}
            <Button text="Delete"></Button>
        </div>
    )
    
}