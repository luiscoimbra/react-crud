import React, {useState} from 'react'
import Button from './Button'

export default ({employee, deleteAction}) => {

    return (
        <>
            {employee.name}
            <Button text="Delete" onclick={() => deleteAction(employee.id)}></Button>
        </>
    )
    
}